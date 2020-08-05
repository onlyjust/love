<template>
    <div>
        <div class="cell-box" v-for="(dating,index) in applyList">
            <van-image
                    round
                    width="5rem"
                    height="5rem"
                    :src="dating.personalPhoto"
                    @click="$router.push({name:'userinfo',params:{datingId:dating.datingId}})"
            />
            <div class="clearfix cell-right">
                <div class="left">
                    <h2 >{{dating.nickname}}</h2>
                    <span>{{dating.age}} {{dating.horoscope}} {{dating.job}}</span>
                    <p v-if="dating.refuseReason">{{dating.refuseReason}}</p>
                </div>
                <div class="right">
                    <p>{{dating.applyTime}}</p>
                    <span>{{dating.statusDesc}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {getApplyWechat} from "../../../service/api";

    export default {
        name: "Apply",
        data(){
            return {
                applyList: [],
            }
        },
        created() {
            this.initData();
        },
        methods:{
            async initData(){
                this.getApplyList();
            },
            async getApplyList(){
                let result = await getApplyWechat();
                if (result.success){
                    this.applyList = result.data;
                }
            },
        }
    }
</script>

<style scoped>
    .cell-box{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0 0.5rem;
        padding: 1rem 1rem;
        border-bottom: #e1e1e1 solid 1px;
    }
    .cell-box .cell-right{
        flex-grow: 1;
        height: 5rem;
    }
    .cell-box .cell-right .left {
        margin-left: 1rem;
        line-height: 2rem;
    }
    .cell-box .cell-right .left .nickname {
        font-size: 13px;
        font-weight: bold;
    }
    .cell-box .cell-right .right {
        margin-right: 1rem;
        line-height: 2rem;
        text-align: center;
    }

</style>
