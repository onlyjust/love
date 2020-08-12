<template>
    <!--基本信息-->
    <div class="basic">
        <!--<i class="iconfont iconjibenziliao_huaban"></i>-->
        <h1 class="subject">基本信息</h1>
        <div class="basic_box">
            <div class="basic_box_info">
                <div>
                    <span v-if="userInfo.height"><i class="iconfont iconshengao"></i>{{userInfo.height}}CM</span>
                    <span v-if="userInfo.age"><i class="iconfont iconnianling"></i>{{userInfo.age}}</span>
                    <span v-if="userInfo.horoscope"><i class="iconfont icon_xingzuoyuncheng"></i>{{userInfo.horoscope}}</span>
                </div>
                <div>
                    <span v-if="userInfo.liveCity"><i class="iconfont iconzuobiao"></i>{{userInfo.liveCity}}</span>
                    <span v-if="userInfo.job"><i class="iconfont iconw_zhiye"></i>{{userInfo.job}}</span>
                    <span v-if="userInfo.salary"><i class="iconfont iconshouruqingkuang"></i>{{userInfo.salary}}元{{userInfo.salaryScope=='1'?'以上':''}}</span>
                </div>
                <div>
                    <span v-if="userInfo.graduateSchool"><i class="iconfont iconbiye"></i>{{userInfo.graduateSchool}}</span>
                    <span v-if="userInfo.education"><i class="iconfont iconsuozaidi"></i>{{userInfo.education}}</span>
                </div>
                <div v-if="userInfo.company">
                    <span><i class="iconfont icongongsimingcheng"></i>{{userInfo.company}}</span>
                </div>
                <div v-if="userInfo.nativePlace">
                    <i class="iconfont iconsuozaidi"></i>
                    <span>{{userInfo.nativePlace}}人</span>
                </div>
            </div>
            <div v-if="!this.$store.state.token" class="fullbg">
                登录后才能显示
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "UserBasic",
        props:{
            userInfo:Object
        }
    }
</script>

<style scoped>

    /*基本信息*/
    /*.basic{
        width: 100%;
    }
    .subject{
        font-size: 1.6rem;
        font-weight: bold;
        margin: 1rem 2rem;
    }
    .basic .basic_box {
    }
    .basic .basic_box .basic_box_info{
        display: flex;
        justify-content: space-around;
    }
    .basic .basic_box .basic_box_info>div{
        display: flex;
        flex-direction: column;
        align-items: center;
        !*width: 25%;*!
        font-size: 2.5rem;
        !*border: #eea1af solid 1px;*!
        padding: 1rem 0;
        box-sizing: border-box;
    }
    .basic .basic_box .basic_box_info .align-left>span{
        align-self: flex-start;
        !*flex-grow: 1;*!
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .basic .basic_box .basic_box_info>div>span{
        font-size: 1.2rem;
        color: #999999;
    }*/


    .basic .basic_box {
        padding: 0 2rem;
        position: relative;
    }
    .basic .basic_box .basic_box_info{
        display: flex;
        flex-direction: column;
    }
    .basic .basic_box .basic_box_info>div{
        display: flex;
        flex-wrap: nowrap;
        align-items: flex-start;
        font-size: 1.3rem;
        box-sizing: border-box;
        color: #666666;
        height: 2.5rem;
        line-height: 2.5rem;
    }
    .basic .basic_box .basic_box_info>div i {
        margin-right: 0.3rem;
    }
    .basic .basic_box .basic_box_info>div span {
        margin-right: 1rem;
    }

    .fullbg{
        background-color: #b9b9b9;
        /*background-color: rgba(0,0,0,.9);*/
        left:0;
        opacity: 0.98;
        position: absolute;
        top: 0;
        /*z-index: 1;*/
        filter: alpha(opacity=50);
        width: 100%;
        height: 100%;
        text-align: center;
        font-size: 16px;
        color: #ff2b42;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
