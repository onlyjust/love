<template>
    <div id="home">
        <!-- 最新推荐 -->
        <love-recommend :recommendList="recommendList"/>
        <!--主页匹配-->
        <!--<home-match :matchList="matchList"/>-->
        <home-swipe :matchList="matchList"/>
    </div>
</template>

<script>
    import LoveRecommend from "./children/LoveRecommend";
    import HomeMatch from "./children/HomeMatch";

    import {recommend,personMatch} from './../../service/api/index';
    import HomeSwipe from "./children/HomeSwipe";

    export default {
        name: "Home",
        components: {HomeSwipe, HomeMatch, LoveRecommend},
        data(){
            return {
                recommendList:[],
                matchList:[]
            }
        },
        created() {
            this.initRecommendData();
            this.initMatchData();
        },
        methods:{
            async initRecommendData(){
                let result = await recommend();
                console.log("首页结果：",result);
                if (result.success){
                    this.recommendList = result.data;
                }
            },
            async initMatchData(){
                let matchResult = await personMatch();
                console.log("matchResult",matchResult);
                if (matchResult.success){
                    this.matchList = matchResult.data;
                }
            }
        }
    }
</script>

<style lang="less"  scoped>
    #home{
        width: 100%;
        height: 100%;
        /*background-color: #42b983;*/
    }
</style>
