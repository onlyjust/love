<template>
    <div id="mine">
        <!--<van-nav-bar
                title="我的"
                fixed
                border
        ></van-nav-bar>-->
        <van-cell-group>
            <van-cell
                    label-class="labelClass"
                    is-link
                    :center=true
                    @click="$router.push('/person')"
            >
                <template slot="title">
                    <div class="personMsg">
                        <van-image
                                round
                                width="80px"
                                height="80px"
                                :src="main.personalPhoto"
                        />
                        <!--<img class="iconImage" src="
https://leo-public-dfs.oss-cn-beijing.aliyuncs.com/17313d72-96e2-4865-bc88-a82f380c555f.jpg" alt="">-->
                        <div class="personInfo">
                            <span class="nickname">{{main.nickname}}</span>
                            <span class="personInfo-number">{{main.datingDataId}}</span>
                        </div>
                    </div>
                </template>
            </van-cell>
        </van-cell-group>

        <van-cell-group>
            <div class="watch-like">
            <div class="watch-like-container">
                <span class="watch-like-container-show">{{main.visitMeNum}}</span>
                <span class="watch-like-container-label">看过我</span>
            </div>
            <div class="watch-like-container">
                <span class="watch-like-container-show">{{main.likeMeNum}}</span>
                <span class="watch-like-container-label" >喜欢我</span>
            </div>
            <div class="watch-like-container">
                <span class="watch-like-container-show">{{main.likeNum}}</span>
                <span class="watch-like-container-label">我喜欢</span>
            </div>
            </div>
        </van-cell-group>

        <van-cell-group style="margin-top: 0.4rem">
            <van-cell title="实名认证" icon="gold-coin" is-link></van-cell>
            <!--<van-cell title="我的认证" icon="todo-list" is-link></van-cell>-->
        </van-cell-group>
        <van-cell-group style="margin-top: 0.4rem">
            <van-cell title="我的动态" icon="gold-coin" is-link to="/mydynamic"></van-cell>
            <van-cell title="我关注" icon="gold-coin" is-link></van-cell>
            <van-cell title="关注我" icon="todo-list" is-link></van-cell>
        </van-cell-group>
        <!--<van-cell-group style="margin-top: 0.4rem">
            <van-cell title="我的优惠券" icon="gold-coin" value="1张" is-link></van-cell>
            <van-cell title="我的收货地址" icon="todo-list" is-link></van-cell>
        </van-cell-group>-->

        <!--路由的出口-->
        <transition name="router-slider" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>

    import {getMain} from './../../service/api/index';

    import {getStore,setStore} from './../../config/global';
    import {USER_INFO} from "../../store/mutations-type";

    export default {
        name: "Mine",
        data(){
            return {
                main:{}
            }
        },
        created(){
            setStore(USER_INFO,{"token":'15900898361:838552232aeb4e4ab51d3a282ba6a659',"userId":2,"datingId":100001});
            this.initData();
        },
        methods: {
            async initData(){
                let result = await getMain();
                if (result.success){
                    this.main = result.data;
                }
            },
            editPerson(){
                this.$router.push({
                    path:'/default/mine/editor'
                });
            }
        },
        components:{
        }
    }
</script>

<style lang="less" scoped>
    #mine{
        width: 100%;
    }
    .personMsg {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    /*.personMsg > img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: 1px solid #FFF;
    }*/

    .personInfo {
        display: flex;
        flex-direction: column;
        margin-left: 8px;

    }
    .personMsg .personInfo .nickname{
        font-size: 18px;
    }
    .personInfo .personInfo-number{
        color: #7d7e80;
        font-size: 14px;
    }

    .van-grid-item__text{
        color: red;
    }
    .watch-like{
        display: flex;
    }
    .watch-like .watch-like-container{
        display: flex;
        flex-direction: column;
        flex-basis: 33.3%;
        align-items: center;
        padding: 16px 8px;
    }
    .watch-like-container-label{
        color: #7d7e80;
        font-size: 12px;
    }
    .watch-like-container-show{
        font-size: 16px;
        font-weight: bold;
        margin-bottom: 5px;
        color: #fd2105;
    }
</style>
