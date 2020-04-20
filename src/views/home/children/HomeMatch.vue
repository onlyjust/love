<template>
    <!-- 正文列表 -->
    <div class="container">
        <div class="list" v-for="match in matchList">
            <div class="photo">
                <img :src="match.personalPhoto">
            </div>
            <div class="desc">
                <div>
                    <h2 class="nickname">{{match.nickname}} <i class="iconfont" :class="[match.matchPerson.gender == 1?'iconnan':'iconnv']"></i></h2>
                </div>
                <p class="desc_info">
                    <span>{{match.matchPerson.age}}岁</span>
                    <span>{{match.matchPerson.height}}cm</span>
                    <span>演员</span>
                </p>
                <span class="location"><i class="iconfont iconzuobiao"></i>{{match.matchPerson.liveCity}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HomeMatch",
        props:{
            matchList:Array
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

    }
    .container .list .photo {
        margin: 0 auto;
    }
    .container .list .photo img {
        width: 100%;
        /*height: 26rem;*/
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
