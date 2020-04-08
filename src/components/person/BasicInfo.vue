<template>
    <div class="basic">

        <!--用户头信息-->
        <header class="header">
            <!--<div class="header_left">
                <img src="@/img/2.jpg">
            </div>-->
            <div class="header_box">
                <h1 class="nickname">{{userInfo.nickname}}<i class="iconfont " :class="[userInfo.gender == 1?'iconnan':'iconnv']"></i><a @click="$router.push('/person/basic')"><i class="iconfont iconbianji"></i></a></h1>
                <p class="highlight_title">{{userInfo.highlightTitle}}</p>
            </div>
            <div class="header_right">
                <img src="@/img/shengyin.png">
                <p>TA的声音</p>
            </div>
        </header>
        <!--基本信息-->
        <div class="basic_box">
            <div class="basic_box_info">
                <div>
                    <i class="iconfont iconshengao"></i>
                    <span v-if="userInfo.height">{{userInfo.height}}CM</span>
                    <i class="iconfont iconnianling"></i>
                    <span>{{userInfo.age}}</span>
                    <i class="iconfont icon_xingzuoyuncheng"></i>
                    <span>{{userInfo.horoscope}}</span>
                </div>
                <div>
                    <i class="iconfont iconzuobiao"></i>
                    <span>{{userInfo.liveCity}}</span>
                    <i class="iconfont iconsuozaidi"></i>
                    <span>{{userInfo.education}}</span>
                    <i class="iconfont iconw_zhiye"></i>
                    <span>{{userInfo.job}}</span>
                    <span v-if="userInfo.salary"><i class="iconfont iconshouruqingkuang"></i>{{userInfo.salary}}元{{userInfo.salaryScope==='1'?'以上':''}}</span>
                </div>
                <div v-if="userInfo.graduateSchool">
                    <i class="iconfont iconbiye"></i>
                    <span>{{userInfo.graduateSchool}}</span>
                </div>
                <div v-if="userInfo.company">
                    <span><i class="iconfont icongongsimingcheng"></i>{{userInfo.company}}</span>
                </div>
                <div  v-if="userInfo.nativePlace">
                    <i class="iconfont iconsuozaidi"></i>
                    <span>{{userInfo.nativePlace}}人</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BasicInfo",
        props:{
            userInfo:{
                type:Object
            }
        }
    }
</script>

<style scoped>

    /*用户头信息*/
    .header{
        display: flex;
        flex-wrap: wrap;
        padding: 2rem 2rem;
        align-items: center;
    }
    .header .header_left{
        width: 6rem;
    }
    .header .header_left img{
        width: 100%;
        border-radius: 50%;
    }
    .header .header_box{
        flex-grow: 1;
    }
    .header .header_box .nickname{
        font-size: 1.6rem;
        font-weight: bold;
    }
    .header .header_box .nickname a{
        margin-left: 1rem;
        font-size: 1.4rem;
    }
    .header .header_box .highlight_title{
        margin-top: 1rem;
        font-size: 1.4rem;
    }

    .header .header_right {
        width: 5rem;
        text-align: center;
    }

    /*基本信息*/
    .basic .basic_box {
        padding: 0 2rem;
    }
    .basic .basic_box .basic_box_info{
        display: flex;
        flex-direction: column;
    }
    .basic .basic_box .basic_box_info>div{
        display: flex;
        align-items: flex-start;
        font-size: 1.3rem;
        box-sizing: border-box;
        color: #999999;
        height: 2.5rem;
        line-height: 2.5rem;
    }
    .basic .basic_box .basic_box_info>div i {
        margin-right: 0.3rem;
    }
    .basic .basic_box .basic_box_info>div span {
        margin-right: 1rem;
    }

</style>
