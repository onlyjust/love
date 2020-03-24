<template>
    <div id="home">
        <van-nav-bar
                title="主页"
                fixed
                border
        ></van-nav-bar>
        <div style="margin-top: 3.1rem;">
            <div class="dating-container">
                <div class="person-list">
                    <div class="person-content">
                        <div class="person-left">
                            <img class="pic-img" src="https://img.yzcdn.cn/vant/t-thirt.jpg">
                        </div>
                        <div class="person-right">
                            <!--<div>
                                <span class="person-title">小天</span><img src="@/images/person/boy.png">
                            </div>-->
                            <!--<div>
                                <van-tag class="person-span-box" plain color="#7232dd">程序员</van-tag>
                            </div>
                            <div>
                                <van-tag class="person-span-box" plain color="#7232dd">24</van-tag>
                                <van-tag class="person-span-box" plain color="#7232dd">🐕</van-tag>
                                <van-tag class="person-span-box" plain color="#7232dd">180CM</van-tag>
                                <van-tag class="person-span-box" plain color="#7232dd">70KG</van-tag>
                            </div>
                            <div>
                                <van-tag class="person-span-box" color="#f2826a">水平座<img width="10px" height="10px" src="@/images/horoscope/双鱼座.png"></van-tag>
                                <van-tag class="person-span-box" plain color="#7232dd">A型血</van-tag>
                            </div>

                            <div>
                                <van-tag class="person-span-box" plain color="#7232dd">吃鸡</van-tag>
                                <van-tag class="person-span-box" plain color="#7232dd">游戏</van-tag>
                                <van-tag class="person-span-box" plain color="#7232dd">旅游</van-tag>
                                <van-tag class="person-span-box" plain color="#7232dd">电影</van-tag>
                            </div>

                            <div class="person-sign">
                                天气很好，就在这等。天气很好
                            </div>-->
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "Home"
    }
</script>

<style lang="less"  scoped>
    #home{
        width: 100%;
        height: 100%;
        /*background-color: #42b983;*/
    }

    .person-container{
        /*display: flex;*/
        position: relative;
        /*height: 14rem;*/
        background-color: #42b983;
    }
    .person-list{
        /*display: flex;*/
        /*position: relative;*/
        height: 14rem;
        background-color: red;
        padding: 0.4rem;
        border-radius: 0.5rem;
    }
    .person-list .person-content {

    }
    .person-list .person-content .person-left {
        width: 20rem;
        height: 20rem;
        float: left;
    }
    .person-list .person-content .person-left .pic-img{
        width: 10rem;
        height: 12rem;
    }
    .person-list .person-info{
        width: (100%-24rem);
        height: 160px;
        margin-top: 0.1rem;
        margin-left: 0.4rem;
        /*border: #fd2105 solid 1px;*/
        /*background-color: #FFFFFF;*/
        background-color: chocolate;
        float: left;
    }
    /*.person-title{
        font-size: 13px;
    }
    .person-span-box {
        margin-right: 0.2rem;
    }
    .person-sign{
        font-size: 12px;
        color: #7d7e80;
        margin: 5px 0px;
    }*/
</style>
