<template>
    <div class="basic">
        <van-cell-group title="">
            <!--昵称-->
            <van-field
                    v-model="datingBasic.nickname"
                    name="nickname"
                    label="昵称"
                    placeholder="昵称"
                    input-align="right"
                    required
            />
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
    </div>
</template>

<script>
    import AreaList from '@/plugins/area';
    import Basic from './../../plugins/basic'

    export default {
        name: "RegBasic",
        props:{
            datingBasic:Object
        },
        data(){
            return{
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

                defaultGenderIdx:12,
                genderList: Basic.genderList,
                showGenderPicker:false,

                defaultHeightIdx:12,
                heightList: Basic.heightList,
                showHeightPicker:false,

                salaryList:Basic.salaryList,
                defaultSalaryScopeIdx:0,
                showSalaryPicker:false,
                areaList: AreaList, // 省份数据
            }
        },
        methods:{
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
            // 性别
            onGenderConfirm(value){
                console.log(value);
                this.datingBasic.genderDesc = value.text;
                this.datingBasic.gender = value.value;
                this.showGenderPicker = false;
            },
            // 身高
            onHeightConfirm(value){
                console.log(value);
                this.datingBasic.height = value.value;
                this.showHeightPicker = false;
            },
        }
    }
</script>

<style scoped>

</style>
