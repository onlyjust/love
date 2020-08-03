<template>
    <div class="top-bar">
        <!--导航栏-->
        <van-nav-bar
                title="喜欢我的"
                left-arrow
                :fixed=true
                :border=true
                @click-left="$router.go(-1)"
        ></van-nav-bar>
        <div v-if="likeMeList && likeMeList.length > 0">
            <div class="cell-box" v-for="(dating,index) in likeMeList">
                <van-image
                        round
                        width="5rem"
                        height="5rem"
                        :src="dating.personalPhoto"
                        @click="$router.push({name:'userinfo',params:{datingId:dating.datingId}})"
                />
                <div class="clearfix cell-right">
                    <div class="left">
                        <h2>{{dating.nickname}}</h2>
                        <span>{{dating.age}} {{dating.horoscope}} {{dating.job}}</span>
                    </div>
                    <div class="right">{{dating.likeTime}}</div>
                </div>
            </div>
        </div>
        <div v-else>
            <van-empty description="您还没有被关注" />
        </div>
    </div>
</template>

<script>
    import {getLikeMe} from "../../service/api";

    export default {
        name: "Love",
        data(){
            return {
                likeMeList:[]
            }
        },
        created() {
            this.initData();
        },
        methods:{
            async initData(){
                let result = await getLikeMe();
                if (result.success){
                    this.likeMeList = result.data;
                }
            }
        }
    }
</script>

<style lang="less" scoped>

    .cell-box{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0 0.5rem;
        padding: 1rem 0;
        border-bottom: #e1e1e1 solid 1px;
    }
    .cell-box .cell-right{
        flex-grow: 1;
        height: 5rem;
    }
    .cell-box .cell-right .left {
        margin-left: 1rem;
        line-height: 2.2rem;
    }
    .cell-box .cell-right .right {
        margin-right: 1rem;
        line-height: 4rem;
    }
</style>
