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
                <!--昵称-->
                <van-field
                        v-model="nickname"
                        name="nickname"
                        label="昵称"
                        placeholder="昵称"
                        input-align="right"
                        required
                />
                <!--性别-->
                <van-field label="性别" v-model="gender" disabled input-align="right" required/>

                <!--身高-->
                <van-field
                        readonly
                        clickable
                        name="height"
                        :value="height"
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
                            @confirm="onHeightConfirm"
                            @cancel="showHeightPicker = false"
                    />
                </van-popup>

                <!--生日-->
                <van-field
                        readonly
                        clickable
                        name="birthday"
                        :value="birthday"
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
                        :value="horoscope"
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
                            @confirm="onHoroscopeConfirm"
                            @cancel="showHoroscopePicker = false"
                    />
                </van-popup>

                <van-field
                        v-model="highlightTitle"
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
                        :value="live"
                        label="居住地"
                        placeholder="点击选择居住地"
                        input-align="right"
                        required
                        @click="showLive = true"
                />
                <van-popup v-model="showLive" position="bottom">
                    <van-area
                            :area-list="areaList"
                            @confirm="onLiveConfirm"
                            @cancel="showLive = false"
                    />
                </van-popup>

                <!--家乡-->
                <van-field
                        readonly
                        clickable
                        name="native"
                        :value="native"
                        label="家乡"
                        placeholder="点击选择家乡"
                        input-align="right"
                        required
                        @click="showNative = true"
                />
                <van-popup v-model="showNative" position="bottom">
                    <van-area
                            :area-list="areaList"
                            @confirm="onNativeConfirm"
                            @cancel="showNative = false"
                    />
                </van-popup>
            </van-cell-group>

            <van-cell-group  title="教育/职业背景">
                <!--学历-->
                <van-field
                    readonly
                    clickable
                    name="education"
                    :value="education"
                    label="学历"
                    placeholder="点击选择城市"
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
                    v-model="graduateSchool"
                    name="graduateSchool"
                    label="毕业学校"
                    input-align="right"
                    placeholder="请输入毕业学校"
                />

                <!--职业-->
                <van-field
                    v-model="job"
                    name="job"
                    label="职业"
                    placeholder="请填写职业"
                    input-align="right"
                    required
                />

                <!--公司-->
                <van-field
                    v-model="company"
                    name="company"
                    label="公司名称"
                    input-align="right"
                    placeholder="请输入公司名称"
                />

                <!--收入-->
                <van-field
                    readonly
                    clickable
                    name="salary"
                    :value="salary"
                    label="收入"
                    placeholder="点击选择收入"
                    input-align="right"
                    required
                    @click="showSalaryPicker = true"
                />
                <van-popup v-model="showSalaryPicker" position="bottom">
                    <van-picker
                        show-toolbar
                        :columns="salaryList"
                        @confirm="onSalaryConfirm"
                        @cancel="showSalaryPicker = false"
                    />
                </van-popup>
            </van-cell-group>
            <van-cell-group  title="联系方式">
                <van-field v-model="wechatId" label="微信号" name="wechatId" placeholder="请输入微信号" required input-align="right"/>
                <!-- 输入手机号，调起手机号键盘 -->
                <van-field v-model="phone" type="tel" name="phone" label="手机号" placeholder="请输入手机号" required input-align="right"/>
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
    import AreaList from '@/plugins/area';

    export default {
        name: "Basic",
        data(){
            return {
                gender:'男',
                nickname:'',
                highlightTitle:'',
                education: '大专',
                educationList: ['初中', '高中', '中专', '大专', '本科', '硕士','博士','教授'],
                showEducationPicker: false,
                graduateSchool:'',
                native:'',
                showNative: false,
                live: '',
                showLive: false,
                birthday:'',
                showBirthdayPicker: false,
                minBirthday: new Date(1950, 1, 1),
                maxBirthday: new Date(2020, 1, 1),
                currentDate: new Date(1990, 1, 1),

                horoscope:'',
                horoscopeList:['白羊座','金牛座'],
                showHoroscopePicker:false,

                height:'',
                heightList:['160','161','162','163','164','165','166','167','168','169'],
                showHeightPicker:false,

                salary:'',
                salaryList:["3W-5W","5W-8W","8W-15W","15W-20W","20W-25W","25W-30W","30W-40W","40W-50W","50W-100W","100W-1000W"],
                showSalaryPicker:false,

                job:'',
                company:'',

                phone:'',
                wechatId:'',
                areaList: AreaList, // 数据格式见 Area 组件文档
            }
        },
        methods:{
            onSubmit(values) {
                console.log('submit', values);
            },
            // 学历
            onEducationConfirm(value) {
                this.education = value;
                this.showEducationPicker = false;
            },
            // 居住地选择确认
            onLiveConfirm(values) {
                this.live = values.map(item => item.name).join('-');
                this.showLive = false;
                console.info(this.live)
            },
            //老家选择确认
            onNativeConfirm(values) {
                this.native = values.map(item => item.name).join('-');
                this.showNative = false;
                console.info(this.native)
            },
            //生日选择确认
            onBirthdayConfirm(date) {
                let year = date.getFullYear();
                let month = date.getMonth() + 1;
                let day = date.getDate();
                if (month >= 1 && month <= 9) { month = `0${month}` }
                if (day >= 1 && day <= 9) { day = `0${day}` }
                this.birthday = `${year}-${month}-${day}`;
                this.showBirthdayPicker = false;
                console.log(this.birthday)
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
                this.horoscope = value;
                this.showHoroscopePicker = false;
            },
            // 身高
            onHeightConfirm(value){
                this.height = value;
                this.showHeightPicker = false;
            },
            // 收入
            onSalaryConfirm(value) {
                this.salary = value;
                this.showSalaryPicker = false;
            }
        }
    }
</script>

<style scoped>

</style>
