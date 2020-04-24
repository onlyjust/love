<template>
    <div>
        <van-cell-group title="">
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
    </div>
</template>

<script>

    import Basic from './../../plugins/basic'

    export default {
        name: "RegJob",
        props:{
            datingBasic:Object
        },
        data(){
            return{
                educationList: Basic.educationList,
                showEducationPicker: false,

                salaryList:Basic.salaryList,
                defaultSalaryScopeIdx:0,
                showSalaryPicker:false,
            }
        },
        created(){
            this.initData();
        },
        methods:{
            initData(){
                if (!this.datingBasic.salaryScope){
                    this.datingBasic.salaryScope = 0;
                    this.datingBasic.salaryScopeDesc = '左右';
                }
            },
            // 学历
            onEducationConfirm(value) {
                this.datingBasic.education = value;
                this.showEducationPicker = false;
            },
            // 收入
            onSalaryConfirm(value) {
                console.log("value",value)
                this.datingBasic.salaryScopeDesc = value.text;
                this.datingBasic.salaryScope = value.value;
                this.showSalaryPicker = false;
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
