<template>
    <div>
        <div class="cell-box" v-for="(dating,index) in acceptList">
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
                    <div v-if="dating.status == 0">
                        <span class="agree" @click="agreeApply(dating.datingId)">同意</span>
                        <span class="refuse" @click="refuseApply(dating.datingId)">拒绝</span>
                    </div>
                    <div v-else>
                        <span v-if="dating.status == 1">已同意</span>
                        <span v-if="dating.status == 2">已拒绝</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {getAcceptWechat,auditApply} from "../../../service/api";

    export default {
        name: "Accept",
        data(){
            return {
                acceptList: [],
            }
        },
        created() {
            this.initData();
        },
        methods:{
            async initData(){
                this.getAcceptList();
            },
            async getAcceptList(){
                let result = await getAcceptWechat();
                if (result.success){
                    this.acceptList = result.data;
                }
            },
            async agreeApply(applyId){
                let result = await auditApply(applyId, 1);
                if (result.success){
                    this.getAcceptList();
                }
            },
            async refuseApply(applyId){
                let result = await auditApply(applyId, 2);
                if (result.success){
                    this.getAcceptList();
                }
            }
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

    .cell-box .cell-right .right {
        margin-right: 1rem;
        line-height: 5rem;
        text-align: center;
    }

    .cell-box .cell-right .right .agree {
        margin-right: 1.5rem;
        background: #55a532;
        padding: 0.5rem 0.8rem;
        color: white;
        border-radius: 0.3rem;
    }

    .cell-box .cell-right .right .refuse {
        margin-right: 0.5rem;
        background: #ee6d89;
        padding: 0.5rem 0.8rem;
        color: white;
        border-radius: 0.3rem;
    }
</style>
