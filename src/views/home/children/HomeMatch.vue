<template>
    <!-- 正文列表 -->
    <div class="container">
        <div class="list" @click="$router.push({name:'userinfo',params:{datingId:match.matchDatingId}})" >
            <div class="photo">
                <img :src="match.personalPhoto">
            </div>
            <div class="desc">
                <div>
                    <h2 class="nickname">{{match.nickname}} <i class="iconfont" :class="[match.matchPerson.gender == 1?'iconnan':'iconnv']"></i></h2>
                    <p class="desc_info">
                        <span>{{match.matchPerson.age}}岁  </span>
                        <span>{{match.matchPerson.height}}cm  </span>
                        <span>{{match.matchPerson.job}}  </span>
                        <span class="location"><i class="iconfont iconzuobiao"></i>{{match.matchPerson.liveCity}}</span>
                    </p>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HomeMatch",
        props:{
            match:Object
        }
    }
</script>

<style scoped>

    /*正文列表*/
    .container .list{
        width: calc(100% - 2rem);
        background: ghostwhite;
        margin: 0.5rem auto;
        border-radius: 1rem;
        padding: 1rem 1rem 1rem 1rem;
        box-shadow: 5px 5px 10px 5px rgba(178, 178, 195, 0.5);

    }
    .container .list .photo {
        margin: 0 auto;
        position: relative;
    }
    .container .list .photo img {
        width: 100%;

    }
    .container .list .desc {
        color: #999999;
        /*position: absolute;*/
        bottom: 0;
        /*background: rgba(223, 223, 223, 0.5);;*/
        width: 100%;
        box-sizing: border-box;
    }
    .container .list .desc .nickname {
        font-size: 1.4rem;
        font-weight: bold;
        display: inline-block;
        color: #333333;
    }
    .container .list .desc .desc_info{
        margin-top: 0.2rem;
        font-size: 1.3rem;
    }
    .container .list .desc .desc_info span {
        margin-right: 1rem;
    }

    .container .list .desc .location {
        font-size: 1.2rem;
    }

</style>
