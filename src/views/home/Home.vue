<template>
    <div id="home">
        <!--<van-nav-bar-->
                <!--title="主页"-->
                <!--fixed-->
                <!--border-->
        <!--&gt;</van-nav-bar>-->

        <!-- 最新推荐 -->
        <div class="latest_recommend">
            <div class="recommend_title">
                <h1 class="title">最新推荐</h1>
                <a href="">全部></a>
            </div>
            <div class="recommend_content">
                <ul>
                    <li @click="$router.push({path:'/userinfo', query:{id:'12'}})"><img src="@/img/1.jpg" alt=""><p class="name">亦菲</p><span class="job">演员</span></li>
                    <li><img src="@/img/2.jpg" alt=""><p class="name">大幂幂</p><span class="job">演员</span></li>
                    <li><img src="@/img/3.jpg" alt=""><p class="name">美美</p><span class="job">网红</span></li>
                    <li><img src="@/img/1.jpg" alt=""><p class="name">亦菲</p><span class="job">演员</span></li>
                    <li><img src="@/img/2.jpg" alt=""><p class="name">大幂幂</p><span class="job">演员</span></li>
                    <li><img src="@/img/3.jpg" alt=""><p class="name">美美</p><span class="job">网红</span></li>
                    <li><img src="@/img/1.jpg" alt=""><p class="name">亦菲</p><span class="job">演员</span></li>
                    <li><img src="@/img/2.jpg" alt=""><p class="name">大幂幂</p><span class="job">演员</span></li>
                    <li><img src="@/img/3.jpg" alt=""><p class="name">美美</p><span class="job">网红</span></li>
                </ul>
            </div>
        </div>

        <!-- 正文列表 -->
        <div class="container">
            <div class="list">
                <div class="photo">
                    <img src="@/img/1.jpg">
                </div>
                <div class="desc">
                    <div>
                        <h2 class="nickname">亦菲 <i class="iconfont iconnv"></i></h2>
                    </div>
                    <p class="desc_info">
                        <span>31岁</span>
                        <span>165cm</span>
                        <span>演员</span>
                    </p>
                    <span class="location"><i class="iconfont iconzuobiao"></i>上海</span>
                </div>
            </div>

            <div class="list">
                <div class="photo">
                    <img src="@/img/1.jpg">
                </div>
                <div class="desc">
                    <div>
                        <h2 class="nickname">亦菲 <i class="iconfont iconnv"></i></h2>
                    </div>
                    <p class="desc_info">
                        <span>31岁</span>
                        <span>165cm</span>
                        <span>演员</span>
                    </p>
                    <span class="location"><i class="iconfont iconzuobiao"></i>上海</span>
                </div>
            </div>

            <div class="list">
                <div class="photo">
                    <img src="@/img/1.jpg">
                </div>
                <div class="desc">
                    <div>
                        <h2 class="nickname">亦菲 <i class="iconfont iconnan"></i></h2>
                    </div>
                    <p class="desc_info">
                        <span>31岁</span>
                        <span>165cm</span>
                        <span>演员</span>
                    </p>
                    <span class="location"><i class="iconfont iconzuobiao"></i>上海</span>
                </div>
            </div>


            <div class="list">
                <div class="photo">
                    <img src="@/img/1.jpg">
                </div>
                <div class="desc">
                    <div>
                        <h2 class="nickname">亦菲 <i class="iconfont iconnan"></i></h2>
                    </div>
                    <p class="desc_info">
                        <span>31岁</span>
                        <span>165cm</span>
                        <span>演员</span>
                    </p>
                    <span class="location"><i class="iconfont iconzuobiao"></i>上海</span>
                </div>
            </div>

            <div class="list">
                <div class="photo">
                    <img src="@/img/1.jpg">
                </div>
                <div class="desc">
                    <div>
                        <h2 class="nickname">亦菲 <i class="iconfont iconnan"></i></h2>
                    </div>
                    <p class="desc_info">
                        <span>31岁</span>
                        <span>165cm</span>
                        <span>演员</span>
                    </p>
                    <span class="location"><i class="iconfont iconzuobiao"></i>上海</span>
                </div>
            </div>

            <div class="list">
                <div class="photo">
                    <img src="@/img/1.jpg">
                </div>
                <div class="desc">
                    <div>
                        <h2 class="nickname">亦菲 <i class="iconfont iconnan"></i></h2>
                    </div>
                    <p class="desc_info">
                        <span>31岁</span>
                        <span>165cm</span>
                        <span>演员</span>
                    </p>
                    <span class="location"><i class="iconfont iconzuobiao"></i>上海</span>
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

    /* 最新推荐 */
    .latest_recommend{
        width: 100%;
        display: flex;
        flex-direction: column;
    }
    .latest_recommend .recommend_title{
        display: flex;
        justify-content: space-between;
        text-align: center;
        margin: 1rem;
        font-size: 1.4rem;
    }
    .latest_recommend .recommend_title h1 {
        font-weight: bold;
        font-size: 1.3rem;
    }

    .latest_recommend .recommend_content{
        overflow: hidden;
    }

    .latest_recommend .recommend_content ul {
        /* width: 100%; */
        display: flex;
        overflow-x: auto;
        /*-ms-overflow-style: none;*/
        /*-webkit-overflow-scrolling: auto;*/
        /*justify-content: space-between;*/
        text-align: center;
    }
    ::-webkit-scrollbar {
        display: none;
    }
    .latest_recommend .recommend_content ul li {
        width: 5.25rem;
        flex-shrink: 0;
        margin: 0 0.5rem;
    }
    .latest_recommend .recommend_content  ul li img {
        width: 100%;
        border-radius: 50%;
        padding: 0.2rem;
    }
    .latest_recommend .recommend_content  ul li .name{
        font-size: 1.3rem;
        font-weight: bold;
    }
    .latest_recommend .recommend_content  ul li .job{
        font-size: 1.2rem;
    }

    /*正文列表*/
    .container .list{
        width: calc(100% - 2rem);
        background: ghostwhite;
        margin: 0.5rem auto;
        border-radius: 1rem;
        padding: 1rem 1rem 1rem 1rem;

    }
    .container .list .photo {
        margin: 0 auto;
    }
    .container .list .photo img {
        width: 100%;
        height: 26rem;
    }
    .container .list .desc {
        color: #999999;
    }
    .container .list .desc .nickname {
        font-size: 1.4rem;
        font-weight: bold;
        display: inline-block;
        color: #333333;
    }
    .container .list .desc .desc_info{
        margin-top: 0.2rem;
        font-size: 1.2rem;
    }

    .container .list .desc .location {
        font-size: 1.2rem;
    }


</style>
