<template>
    <div id="person">
        <!--用户轮播-->
        <Slideshow :slideshow_list="slideshow_list"/>
        <!--用户头信息-->
        <UserHeader :userInfo="datingData" />
        <!--用户导航-->
        <!--<UserNav :datingId="datingData.datingDataId" :liked="false"/>-->
        <!--基本信息-->
        <UserBasic :userInfo="datingData"/>
        <!--认证信息-->
        <UserAuth v-if="datingData.authIdentity" :authIdentity="datingData.authIdentity"/>
        <!--最新动态-->
        <UserDynamic :dynamicInfo="datingData.dynamicInfo"/>
        <!--个性标签-->
        <UserLabel :labelList="datingData.labelList"/>
        <!--走心问答-->
        <UserQuestion :questionAnswerList="datingData.questionAnswerList"/>
        <div class="footer"></div>

        <span class="shouye iconfont iconindex" @click="goHome()"></span>
    </div>
</template>

<script>
    import Slideshow from "../../components/slideshow/Slideshow";
    import UserHeader from "./../userinfo/children/UserHeader";
    import UserNav from "./../userinfo/children/UserNav";
    import UserBasic from "./../userinfo/children/UserBasic";
    import UserAuth from "./../userinfo/children/UserAuth";
    import UserLabel from "./../userinfo/children/UserLabel";
    import UserQuestion from "./../userinfo/children/UserQuestion";

    import {preview} from "../../service/api";
    import HtmlToCanvas from "../../components/canvas/HtmlToCanvas";
    import UserDynamic from "../userinfo/children/UserDynamic";

    export default {
        name: "PreviewInfo",
        components: {
            UserDynamic,
            HtmlToCanvas, UserQuestion, UserLabel, UserAuth, UserBasic, UserNav, UserHeader, Slideshow},
        data(){
            return {
                datingId:0,
                slideshow_list:[],
                datingData:{}
            }
        },
        created(){
            this.datingId = this.$route.params.datingId;
            console.log(this.datingId);
            this.initData();
        },
        computed:{

        },
        methods:{
            async initData(){
                let result = await preview(this.datingId);
                // console.log("个人信息数据：", result);
                if (result.success){
                    this.datingData = result.data;
                    this.slideshow_list.push(this.datingData.personalPhoto);
                    this.datingData.lifePhotoList.forEach(item =>{
                        this.slideshow_list.push(item.filePath);
                    });
                    /*this.slideshow_list = result.data.lifePhotoList.map(photo => {
                        return photo.filePath;
                    });*/
                }
            },
            switchSession (fromId,fromName) {
                let from = fromId;
                let remark = '';
                this.$store.dispatch('switchSession', {from, remark}).then(() => {
                    this.$router.push({path: '/chat/'+fromName})
                })
            },
            shareInfo(){
                this.$refs.canvasImage.htmlToCanvas();
            },
            goHome(){
                this.$router.push({path: '/'})
            }
        }
    }
</script>

<style scoped>

    /*底部*/
    .footer{
        height: 10rem;
    }

    /*浮块*/
    .float_block{
        position: fixed;
        width: 100%;
        bottom: 0;
        display: flex;
        justify-content: space-around;
        margin-bottom: 1.5rem;
        /*background-color: #1296db ;*/
    }

    .float_block span{
        background-color: #e9a4a5;
        padding: 0 2rem;
        text-align: center;
        font-size: 1.6rem;
        height: 3rem;
        line-height: 3rem;
        display: inline-block;
        border-radius: 1rem;
        color: #787878;
    }

    .shouye {
        background: #a40818;
        color: white;
        width: 40px;
        height: 40px;
        line-height: 40px;
        font-size: 25px;
        position: fixed;
        right: 20px;
        bottom: 50px;
        text-align: center;
        border-radius: 20px;
    }

</style>
