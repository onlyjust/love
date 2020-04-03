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
            <van-field
                    v-model="nickname"
                    name="nickname"
                    label="昵称"
                    placeholder="昵称"
                    :rules="[{ required: true, message: '请填写昵称' }]"
            />

            <van-field label="性别" value="男" disabled />

            <van-field
                    readonly
                    clickable
                    name="live"
                    :value="live"
                    label="居住地"
                    placeholder="点击选择居住地"
                    @click="showLive = true"
            />
            <van-popup v-model="showLive" position="bottom">
                <van-area
                        :area-list="areaList"
                        @confirm="onLiveConfirm"
                        @cancel="showLive = false"
                />
            </van-popup>


            <van-field
                    readonly
                    clickable
                    name="native"
                    :value="native"
                    label="老家"
                    placeholder="点击选择老家"
                    @click="showNative = true"
            />
            <van-popup v-model="showNative" position="bottom">
                <van-area
                        :area-list="areaList"
                        @confirm="onNativeConfirm"
                        @cancel="showNative = false"
                />
            </van-popup>

            <van-field
                    readonly
                    clickable
                    name="picker"
                    :value="education"
                    label="学历"
                    placeholder="点击选择城市"
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


            <!--<van-field
                    readonly
                    clickable
                    name="birthday"
                    :value="birthday"
                    label="生日"
                    placeholder="点击选择生日"
                    @click="showBirthdayPicker = true"
            />
            <van-popup v-model="showBirthdayPicker" position="bottom">
                <van-datetime-picker
                        v-model="birthday"
                        type="date"
                        :min-date="minBirthday"
                        :max-date="maxBirthday"
                        @change="onChangeBirthday"
                        @confirm="showBirthdayPicker = false"
                        @cancel="showBirthdayPicker = false"
                        :formatter="formatter"
                />
            </van-popup>-->


            <van-field
                    v-model="password"
                    type="password"
                    name="密码"
                    label="密码"
                    placeholder="密码"
                    :rules="[{ required: true, message: '请填写密码' }]"
            />

            <!-- 输入任意文本 -->
            <van-field v-model="text" label="文本" />
            <!-- 输入手机号，调起手机号键盘 -->
            <van-field v-model="tel" type="tel" label="手机号" />
            <!-- 允许输入正整数，调起纯数字键盘 -->
            <van-field v-model="digit" type="digit" label="整数" />
            <!-- 允许输入数字，调起带符号的纯数字键盘 -->
            <van-field v-model="number" type="number" label="数字" />
            <!-- 输入密码 -->
            <van-field v-model="password" type="password" label="密码" />
            <div style="margin: 16px;">
                <van-button round block type="info" native-type="submit">
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
                tel: '',
                text: '',
                digit: '',
                number: '',
                password: '',

                nickname:'',

                education: '',
                educationList: ['初中', '高中', '中专', '大专', '本科', '硕士','博士','教授'],
                showEducationPicker: false,

                native:'',
                showNative: false,

                live: '',
                showLive: false,

                minBirthday: new Date(2020, 0, 1),
                maxBirthday: new Date(2025, 10, 1),
                birthday: this.dataFormat(new Date(2025, 10, 1)),
                showBirthdayPicker: false,

                areaList: AreaList, // 数据格式见 Area 组件文档
            }
        },
        methods:{
            onSubmit(values) {
                console.log('submit', values);
            },
            onEducationConfirm(value) {
                this.education = value;
                this.showEducationPicker = false;
            },
            onLiveConfirm(values) {
                this.live = values.map(item => item.name).join('-');
                this.showLive = false;
                console.info(this.live)
            },
            onNativeConfirm(values) {
                this.native = values.map(item => item.name).join('-');
                this.showNative = false;
                console.info(this.native)
            },
            onChangeBirthday(date) { // 值变化是触发
                let endTimeArr = date.getValues();
                console.log("endTimeArr",endTimeArr)
                console.log("currentDate",date);
                console.log("birthday",this.birthday);
                this.birthday = this.dataFormat(date.getData()) // Tue Sep 08 2020 00:00:00 GMT+0800 (中国标准时间)
            },
            onBirthdayConfirm(date) {
                let year = date.getFullYear();
                let month = date.getMonth() + 1;
                let day = date.getDate();
                if (month >= 1 && month <= 9) { month = `0${month}` }
                if (day >= 1 && day <= 9) { day = `0${day}` }
                // this.birthday = `${year}-${month}-${day}`;
                this.birthday = this.dataFormat(date);
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

            dataFormat(time) { // 时间格式化 2019-09-08
                let year = time.getFullYear();
                let month = time.getMonth() + 1;
                let day = time.getDate();
                return year + '年' + month + '月' + day + '日'
            }

        }
    }
</script>

<style scoped>

</style>
