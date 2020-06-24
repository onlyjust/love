<template>
    <div id="basic" class="top-bar">
        <!--导航栏-->
        <van-nav-bar
                title="个人信息"
                left-arrow
                :fixed=true
                :border=true
                @click-left="$router.go(-1)"
        ></van-nav-bar>

        <van-form @submit="onSubmit">
            <van-cell-group  title="基本资料">
                <!--头像-->
                <van-cell title="头像" center is-link :to="{name:'profilePhoto',query:{url:'https://img.yzcdn.cn/vant/cat.jpeg'}}">
                    <van-image width="40" height="40" radius="5" src="https://img.yzcdn.cn/vant/cat.jpeg" />
                </van-cell>
                <!--昵称-->
                <van-field
                        v-model="datingBasic.nickname"
                        name="nickname"
                        label="昵称"
                        placeholder="昵称"
                        input-align="right"
                        required
                />
                <!--性别-->
                <van-field label="性别" v-model="datingBasic.gender" disabled input-align="right" required/>

                <!--身高-->
                <van-field
                        readonly
                        clickable
                        name="height"
                        :value="datingBasic.height"
                        label="身高"
                        placeholder="点击选择身高"
                        input-align="right"
                        required
                        @click="showHeightPicker = true"
                />
                <van-popup v-model="showHeightPicker" position="bottom">
                    <van-picker
                            show-toolbar
                            :columns="heightList"
                            :default-index="defaultHeightIdx"
                            @confirm="onHeightConfirm"
                            @cancel="showHeightPicker = false"
                    />
                </van-popup>

                <!--生日-->
                <van-field
                        readonly
                        clickable
                        name="birthday"
                        :value="datingBasic.birthday"
                        label="生日"
                        placeholder="点击选择生日"
                        input-align="right"
                        required
                        @click="showBirthdayPicker = true"
                />
                <van-popup v-model="showBirthdayPicker" position="bottom">
                    <van-datetime-picker
                            v-model="currentDate"
                            type="date"
                            :min-date="minBirthday"
                            :max-date="maxBirthday"
                            @confirm="onBirthdayConfirm"
                            @cancel="showBirthdayPicker = false"
                            :formatter="formatter"
                    />
                </van-popup>

                <!--星座-->
                <van-field
                        readonly
                        clickable
                        name="horoscope"
                        :value="datingBasic.horoscope"
                        label="星座"
                        placeholder="点击选择星座"
                        input-align="right"
                        required
                        @click="showHoroscopePicker = true"
                />
                <van-popup v-model="showHoroscopePicker" position="bottom">
                    <van-picker
                            show-toolbar
                            :columns="horoscopeList"
                            :default-index="defaultHoroscopeIdx"
                            @confirm="onHoroscopeConfirm"
                            @cancel="showHoroscopePicker = false"
                    />
                </van-popup>

                <van-field
                        v-model="datingBasic.highlightTitle"
                        name="highlightTitle"
                        rows="1"
                        autosize
                        label="个性标语"
                        type="textarea"
                        placeholder="请输入个性标语"
                        maxlength="80"
                        input-align="right"
                />

                <!--居住地-->
                <van-field
                        readonly
                        clickable
                        name="live"
                        :value="datingBasic.live"
                        label="居住地"
                        placeholder="点击选择居住地"
                        input-align="right"
                        required
                        @click="showLive = true"
                />
                <van-popup v-model="showLive" position="bottom">
                    <van-area
                            :area-list="areaList"
                            :value="datingBasic.liveAreaCode"
                            @confirm="onLiveConfirm"
                            @cancel="showLive = false"
                    />
                </van-popup>

                <!--家乡-->
                <van-field
                        readonly
                        clickable
                        name="nativePlace"
                        :value="datingBasic.nativePlace"
                        label="家乡"
                        placeholder="点击选择家乡"
                        input-align="right"
                        required
                        @click="showNative = true"
                />
                <van-popup v-model="showNative" position="bottom">
                    <van-area
                            :area-list="areaList"
                            :value="datingBasic.nativeAreaCode"
                            @confirm="onNativeConfirm"
                            @cancel="showNative = false"
                    />
                </van-popup>
            </van-cell-group>

            <van-cell-group title="教育/职业背景">
                <!--学历-->
                <van-field
                    readonly
                    clickable
                    name="education"
                    :value="datingBasic.education"
                    label="学历"
                    placeholder="点击选择学历"
                    input-align="right"
                    required
                    @click="showEducationPicker = true"
                />
                <van-popup v-model="showEducationPicker" position="bottom">
                    <van-picker
                        show-toolbar
                        :columns="educationList"
                        @confirm="onEducationConfirm"
                        @cancel="showEducationPicker = false"
                    />
                </van-popup>

                <!--毕业学校-->
                <van-field
                    v-model="datingBasic.graduateSchool"
                    name="graduateSchool"
                    label="毕业学校"
                    input-align="right"
                    placeholder="请输入毕业学校"
                />

                <!--职业-->
                <van-field
                    v-model="datingBasic.job"
                    name="job"
                    label="职业"
                    placeholder="请填写职业"
                    input-align="right"
                    required
                />

                <!--公司-->
                <van-field
                    v-model="datingBasic.company"
                    name="company"
                    label="公司名称"
                    input-align="right"
                    placeholder="请输入公司名称"
                />
                <div class="salaryBox">
                    <van-field
                               name="salary"
                               v-model="datingBasic.salary"
                               label="月薪(元)"
                               type="digit"
                               placeholder="请填写月薪"
                               input-align="right"
                               required
                    />
                    <van-field
                            clickable
                            readonly
                            name="salaryScopeDesc"
                            :value="datingBasic.salaryScopeDesc"
                            placeholder="选中薪资范畴"
                            @click="showSalaryPicker = true"
                    />
                </div>

                <van-popup v-model="showSalaryPicker" position="bottom">
                    <van-picker
                        show-toolbar
                        :columns="salaryList"
                        :default-index="defaultSalaryScopeIdx"
                        @confirm="onSalaryConfirm"
                        @cancel="showSalaryPicker = false"
                    />
                </van-popup>
            </van-cell-group>
            <van-cell-group title="联系方式">
                <van-field v-model="datingBasic.wechatId" label="微信号" name="wechatId" placeholder="请输入微信号" required input-align="right"/>
                <!-- 输入手机号，调起手机号键盘 -->
                <van-field v-model="datingBasic.phone" type="tel" name="phone" label="手机号" placeholder="请输入手机号" required input-align="right"/>
            </van-cell-group>

            <div style="margin: 16px;">
                <van-button round block color="#65c4aa" native-type="submit">
                    提交
                </van-button>
            </div>
        </van-form>
    </div>
</template>

<script>
    import {getDatingBasic,updateDatingBasic} from './../../../service/api/index';
    import AreaList from '@/plugins/area';
    import Basic from './../../../plugins/basic'

    export default {
        name: "Basic",
        data(){
            return {
                datingBasic:{},
                educationList: Basic.educationList,
                showEducationPicker: false,
                showNative: false,
                showLive: false,
                showBirthdayPicker: false,
                minBirthday: new Date(1950, 1, 1),
                maxBirthday: new Date(2020, 1, 1),
                currentDate: new Date(1990, 1, 1),
                defaultHoroscopeIdx:0,
                horoscopeList: Basic.horoscopeList,
                showHoroscopePicker:false,

                defaultHeightIdx:12,
                heightList: Basic.heightList,
                showHeightPicker:false,

                salaryList:Basic.salaryList,
                defaultSalaryScopeIdx:0,
                showSalaryPicker:false,
                areaList: AreaList, // 省份数据
            }
        },
        created(){
          this.initData();
        },
        methods:{
            async initData(){
                // 请求加载数据
                let result = await getDatingBasic();
                if (result.success){
                    this.datingBasic = result.data;
                    // 生日
                    if (this.datingBasic.birthday){
                        this.currentDate = new Date(this.datingBasic.birthday)
                    }
                    // 性别
                    if (this.datingBasic.gender == 1){
                        this.datingBasic.gender = '男'
                    } else if (this.datingBasic.gender == 2){
                        this.datingBasic.gender = '女'
                    }
                    // 收入
                    if (this.datingBasic.salaryScope){
                        this.salaryList.forEach((item,index)=>{
                            if(item.value == this.datingBasic.salaryScope){
                                this.defaultSalaryScopeIdx = index;
                                this.datingBasic.salaryScopeDesc=item.text;
                                return;
                            }
                        })
                    } else {
                        this.datingBasic.salaryScopeDesc = '左右'
                    }
                    // 身高
                    this.heightList.forEach((item,index)=>{
                        if(item.value == this.datingBasic.height){
                            this.defaultHeightIdx = index;
                            return;
                        }
                    });
                    // 星座
                    this.horoscopeList.forEach((item,index)=>{
                        if(item.value == this.datingBasic.horoscope){
                            this.defaultHoroscopeIdx = index;
                            return;
                        }
                    });
                }
                console.log('result:{}',result)

            },


            //提交
            async onSubmit(values) {
                values.salaryScope = this.datingBasic.salaryScope;
                values.liveProvince = this.datingBasic.liveProvince;
                values.liveCity = this.datingBasic.liveCity;
                values.liveArea = this.datingBasic.liveArea;
                values.nativeProvince = this.datingBasic.nativeProvince;
                values.nativeCity = this.datingBasic.nativeCity;
                values.nativeArea = this.datingBasic.nativeArea;
                console.log('submit', values);
                console.log("datingBasic",this.datingBasic);
                if (!this.validateDating(values)) {
                    return;
                }
                let result = await updateDatingBasic(values);
                this.$toast(result.message);
                if (result.success){
                    this.$router.back();
                }
            },
            // 学历
            onEducationConfirm(value) {
                this.datingBasic.education = value;
                this.showEducationPicker = false;
            },
            // 居住地选择确认
            onLiveConfirm(values) {
                console.log("居住地",values)
                this.datingBasic.live = values.filter(item => item).map(item => item.name).join('-');
                this.datingBasic.liveProvince = values[0]?values[0].name:'';
                this.datingBasic.liveCity = values[1]?values[1].name:'';
                this.datingBasic.liveArea = values[2]?values[2].name:'';
                this.showLive = false;
            },
            //老家选择确认
            onNativeConfirm(values) {
                this.datingBasic.nativePlace =values.filter(item => item).map(item => item.name).join('-');
                this.datingBasic.nativeProvince = values[0]?values[0].name:'';
                this.datingBasic.nativeCity = values[1]?values[1].name:'';
                this.datingBasic.nativeArea = values[2]?values[2].name:'';
                this.showNative = false;
            },
            //生日选择确认
            onBirthdayConfirm(date) {
                let year = date.getFullYear();
                let month = date.getMonth() + 1;
                let day = date.getDate();
                if (month >= 1 && month <= 9) { month = `0${month}` }
                if (day >= 1 && day <= 9) { day = `0${day}` }
                this.datingBasic.birthday = `${year}-${month}-${day}`;
                this.showBirthdayPicker = false;
            },
            formatter(type, value) {
                if (type === 'year') {
                    return `${value}年`;
                } else if (type === 'month') {
                    return `${value}月`
                } else if (type === 'day') {
                    return `${value}日`
                }
                return value;
            },
            // 星座
            onHoroscopeConfirm(value){
                this.datingBasic.horoscope = value.value;
                this.showHoroscopePicker = false;
            },
            // 身高
            onHeightConfirm(value){
                console.log(value);
                this.datingBasic.height = value.value;
                this.showHeightPicker = false;
            },
            // 收入
            onSalaryConfirm(value) {
                console.log("value",value)
                this.datingBasic.salaryScopeDesc = value.text;
                this.datingBasic.salaryScope = value.value;
                this.showSalaryPicker = false;
            },

            //验证
            validateDating(datingObj){
                if (!datingObj.nickname) {
                    this.$toast('请输入昵称');
                    return false;
                }
                if (!datingObj.height) {
                    this.$toast('请选择身高');
                    return false;
                }
                if (!datingObj.birthday) {
                    this.$toast('请选择生日');
                    return false;
                }
                if (!datingObj.horoscope) {
                    this.$toast('请选择星座');
                    return false;
                }
                if (!datingObj.live) {
                    this.$toast('请选择居住地');
                    return false;
                }
                if (!datingObj.nativePlace) {
                    this.$toast('请选择家乡');
                    return false;
                }
                if (!datingObj.education) {
                    this.$toast('点击选择学历');
                    return false;
                }
                if (!datingObj.job) {
                    this.$toast('请填写职业');
                    return false;
                }
                if (!datingObj.salary) {
                    this.$toast('请填写月薪');
                    return false;
                }
                if (!datingObj.wechatId) {
                    this.$toast('请输入微信号');
                    return false;
                }
                if (!datingObj.phone) {
                    this.$toast('请输入手机号');
                    return false;
                }
                return true;
            },


        }
    }
</script>

<style scoped>

    .salaryBox{
        display: flex;
        justify-content: space-between;
    }
    .salaryBox > div:last-child{
        width: 8rem;
    }
</style>
