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
            <van-popup v-model="showLocationPicker" position="bottom">
                <van-picker
                        show-toolbar
                        :columns="locationList"
                        @confirm="onLocationConfirm"
                        @cancel="showSubjectPicker = false"
                />
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

    import {getStore,setStore} from './../../config/global';
    import {USER_INFO} from "../../store/mutations-type";

    import {pushDynamic, uploadFile, deleteFile} from './../../service/api/index';

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
                locationList: [],
                showLocationPicker: false,

                dynamicFileIdList:[],
            }
        },
        methods:{
            async onPublishDynamic(){
                let pushObj = {};
                pushObj.content = this.dynamicContent;
                pushObj.title = this.subject;
                pushObj.location = this.location;
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

            onSubjectConfirm(){

            },
            onLocationConfirm(){

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
