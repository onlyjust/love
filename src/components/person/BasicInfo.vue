<template>
    <div class="basic">

        <!--用户头信息-->
        <header class="header">
            <!--<div class="header_left">
                <img src="@/img/2.jpg">
            </div>-->
            <div class="header_box">
                <h1 class="nickname">晓晓<i class="iconfont iconnv"></i><a @click="$router.push('/person/basic')">编辑</a></h1>
                <p class="highlight_title">一句突出自己的话</p>
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
                    <span>180CM</span>
                    <i class="iconfont iconnianling"></i>
                    <span>26</span>
                    <i class="iconfont icon_xingzuoyuncheng"></i>
                    <span>水瓶座</span>
                </div>
                <div>
                    <i class="iconfont iconzuobiao"></i>
                    <span>上海</span>
                    <i class="iconfont iconsuozaidi"></i>
                    <span>本科</span>
                    <i class="iconfont iconw_zhiye"></i>
                    <span>设计师</span>
                    <i class="iconfont iconshouruqingkuang"></i>
                    <span>20-30W</span>
                </div>
                <div>
                    <i class="iconfont iconbiye"></i>
                    <span>XXX大学</span>
                </div>
                <div>
                    <i class="iconfont icongongsimingcheng"></i>
                    <span>杭州XXX科技有限公司</span>
                </div>
                <div>
                    <i class="iconfont iconsuozaidi"></i>
                    <span>江苏 · 泰州人</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BasicInfo"
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
