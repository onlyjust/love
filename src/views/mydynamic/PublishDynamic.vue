<template>
    <div id="publish-dynamic" >

        <!--头部信息-->
        <!--<header class="header">
            <a href=""><</a>
            <a href="">发布</a>
        </header>-->

        <van-nav-bar
                title="动态"
                left-text="返回"
                right-text="发布"
                :fixed=true
                :border=true
                :placeholder=true
                left-arrow
                @click-left="$router.go(-1)"
                @click-right="onPublishDynamic"
        />

        <van-cell-group>
            <van-field
                    name="dynamicContent"
                    v-model="dynamicContent"
                    rows="6"
                    autosize
                    type="textarea"
                    placeholder="记录你的生活，晒给TA看，让TA懂你……"
            />
        </van-cell-group>
        <van-cell-group title="" style="padding: 1rem">
            <van-uploader
                    v-model="fileList"
                    multiple
                    :max-count="3"
                    :after-read="afterReadFile"
                    :before-read="beforeReadFile"
                    :before-delete="deleteFile"
                    image-fit="cover"
                    preview-size="80px"
            />
        </van-cell-group>
        <van-cell-group>
            <!--参与话题-->
            <van-field
                    readonly
                    clickable
                    name="subject"
                    :value="subject"
                    label="参与话题"
                    placeholder="点击选择参与话题"
                    input-align="right"
                    required
                    @click="showSubjectPicker = true"
            />
            <van-popup v-model="showSubjectPicker" position="bottom">
                <van-picker
                        show-toolbar
                        :columns="subjectList"
                        @confirm="onSubjectConfirm"
                        @cancel="showSubjectPicker = false"
                />
            </van-popup>

            <!--所在位置-->
            <van-field
                    readonly
                    clickable
                    name="location"
                    :value="location"
                    label="所在位置"
                    placeholder="点击选择所在位置"
                    input-align="right"
                    required
                    @click="showLocationPicker = true"
            />
            <van-popup v-model="showLocationPicker" position="bottom"  :style="{ height: '90%' }">
                <!--<van-picker
                        show-toolbar
                        :columns="locationList"
                        @confirm="onLocationConfirm"
                        @cancel="showSubjectPicker = false"
                />-->
                <iframe id="mapPage" width="100%" height="100%" frameborder=0
                        src="https://apis.map.qq.com/tools/locpicker?search=1&type=1&key=OB4BZ-D4W3U-B7VVO-4PJWW-6TKDJ-WPB77&referer=myapp">
                </iframe>
            </van-popup>


            <van-field name="switch" label="是否匿名" input-align="right">
                <template #input>
                    <van-switch v-model="anonymityChecked" size="20" />
                </template>
            </van-field>
        </van-cell-group>

    </div>

</template>

<script>

    import {pushDynamic, uploadFile, deleteFile, getTopicList, getSignature, getComponentMap} from './../../service/api/index';

    export default {
        name: "PublishDynamic",
        data(){
            return {
                dynamicContent:'',
                anonymityChecked:false,
                subject:'',
                subjectList:[],
                showSubjectPicker:false,
                fileList:[],

                location: '',
                longitude:'',
                latitude:'',
                locationList: [],
                showLocationPicker: false,

                dynamicFileIdList:[],
            }
        },
        created(){
            this.subject = this.$route.params.title;
            this.initData();
            // this.getLocation();
        },
        mounted(){
            //这里是监听iframe发送事件的监听
            window.addEventListener('message', this.handleMessage,false)
        },
        methods:{
            //vue 接收iframe的方法
            handleMessage(event){
                // 接收位置信息，用户选择确认位置点后选点组件会触发该事件，回传用户的位置信息
                let loc = event.data;
                if (loc && loc.module == 'locationPicker') {//防止其他应用也会向该页面post信息，需判断module是否为'locationPicker'
                    // console.log('location', loc);
                    // alert(JSON.stringify(loc));
                    if(loc.poiname == '我的位置'){
                        this.location = loc.poiaddress;
                    } else {
                        this.location = loc.poiname;
                    }
                    this.longitude = loc.latlng.lng;
                    this.latitude = loc.latlng.lat;
                    this.showLocationPicker = false;
                }

            },
            async initData(){
                let result = await getTopicList();
                // console.log("result:",result);
                if (result.success){
                    this.subjectList = result.data.map(data => data.topic);
                }
                /*
                let url = window.location.href.split('#')[0];
                url = window.location.href;
                result = await getSignature(url);
                console.log("getSignature:",result);
                if (result.success) {
                    let data = result.data;
                    console.log("data",data);
                    wx.config({
                        debug: false, //生产环境需要关闭debug模式  测试环境下可以设置为true 可以在开发者工具中查看问题
                        appId: data.appId, //appId通过微信服务号后台查看
                        timestamp: data.timestamp, //生成签名的时间戳
                        nonceStr: data.nonceStr, //生成签名的随机字符串
                        signature: data.signature, //签名
                        jsApiList: [ //需要调用的JS接口列表
                            'updateAppMessageShareData', //自定义“分享给朋友”及“分享到QQ”按钮的分享内容（1.4.0） 新接口
                            'updateTimelineShareData', //自定义“分享到朋友圈”及“分享到QQ空间”按钮的分享内容（1.4.0） 老接口
                            'onMenuShareTimeline', //分享到朋友圈 老接口
                            'onMenuShareAppMessage',//分享给盆友 老接口
                            'getLocation' //获取定位
                        ]
                    });
                    wx.error(function (res) {
                        // alert(JSON.stringify(res))
                        console.log(res)
                        // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
                    });
                    wx.getLocation({
                        type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
                        success: function (res) {
                            var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
                            var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
                            var speed = res.speed; // 速度，以米/每秒计
                            var accuracy = res.accuracy; // 位置精度
                            console.log("res==>",res);
                            alert(res);
                        }
                    });
                }*/

            },


            showLocation(){
                let url = decodeURIComponent(window.location.href);
                getComponentMap(url);
            },

            async onPublishDynamic(){
                if(!this.dynamicContent){
                    this.$toast("动态内容不能为空");
                }
                let pushObj = {};
                pushObj.content = this.dynamicContent;
                pushObj.title = this.subject;
                pushObj.location = this.location;
                pushObj.longitude = this.longitude;
                pushObj.latitude = this.latitude;
                pushObj.anonymity = this.anonymityChecked ? 1 : 0;
                // let userInfo = getStore(USER_INFO);
                // pushObj.datingId = JSON.parse(userInfo).datingId;
                pushObj.dynamicFileIdList = this.dynamicFileIdList;
                console.log("动态发布数据：", pushObj)
                let result = await pushDynamic(pushObj);
                if (result.success){
                    this.$router.back();
                }
                this.$toast(result.message);
            },

            onSubjectConfirm(value){
                console.log("subject value",value);
                this.subject = value;
                this.showSubjectPicker = false;
            },
            onLocationConfirm(value){

            },

            beforeReadFile(file){
                console.log("beforeReadFile", file);
                return true;
            },
            async afterReadFile(file){
                file.status = 'uploading';
                file.message = '上传中...';
                // console.log("afterReadFile",file);
                let formData = new FormData();
                formData.append("file", file.file);
                formData.append("fileName", file.file.name);
                formData.append("relationalName", 'DYNAMIC_PHOTO');
                let result = await uploadFile(formData);
                // console.log("上传结果", result);
                if (result.success){
                    file.status = 'done';
                    file.message = '上传成功';
                    file.id = result.data.id;
                    this.dynamicFileIdList.push(file.id);
                    return true;
                }
                return false;
            },
            async deleteFile(file){
                // console.log("deleteFile", file);
                let result = await deleteFile(file.id);
                if (result.success){
                    // 删除
                    this.dynamicFileIdList.forEach((item,index)=>{
                        if (item == file.id){
                            this.dynamicFileIdList.splice(index, 1);
                        }
                    });
                    return true;
                } else {
                    return false;
                }
            }
        }
    }
</script>

<style scoped>


</style>
