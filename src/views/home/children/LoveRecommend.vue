<template>
    <!-- 最新推荐 -->
    <div class="latest_recommend">
        <div class="recommend_title">
            <h1 class="title">最新推荐</h1>
            <a href="">全部></a>
        </div>
        <div class="recommend_content">
            <ul>
                <li @click="$router.push({name:'userinfo',params:{datingId:recommend.datingId}})" v-for="recommend in recommendList">
                    <img :src="recommend.personalPhoto"><p class="name">{{recommend.nickname}}</p><span class="job">{{recommend.job}}</span>
                </li>
                <!--<li><img src="@/img/2.jpg" alt=""><p class="name">大幂幂</p><span class="job">演员</span></li>
                <li><img src="@/img/3.jpg" alt=""><p class="name">美美</p><span class="job">网红</span></li>
                <li><img src="@/img/1.jpg" alt=""><p class="name">亦菲</p><span class="job">演员</span></li>
                <li><img src="@/img/2.jpg" alt=""><p class="name">大幂幂</p><span class="job">演员</span></li>
                <li><img src="@/img/3.jpg" alt=""><p class="name">美美</p><span class="job">网红</span></li>
                <li><img src="@/img/1.jpg" alt=""><p class="name">亦菲</p><span class="job">演员</span></li>
                <li><img src="@/img/2.jpg" alt=""><p class="name">大幂幂</p><span class="job">演员</span></li>
                <li><img src="@/img/3.jpg" alt=""><p class="name">美美</p><span class="job">网红</span></li>-->
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "LoveRecommend",
        props:{
            recommendList:Array
        }
    }
</script>

<style scoped>

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
        width: 6rem;
        flex-shrink: 0;
        margin: 0 0.8rem;
    }
    .latest_recommend .recommend_content  ul li img {
        width: 5.5rem;
        height: 5.5rem;
        border-radius: 50%;
        padding: 0.2rem;
    }
    .latest_recommend .recommend_content  ul li .name{
        font-size: 1.2rem;
        font-weight: bold;
    }
    .latest_recommend .recommend_content  ul li .job{
        font-size: 1rem;
    }

</style>
