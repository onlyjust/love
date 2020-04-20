<template>
    <div id="person">
        <!--用户轮播-->
        <Slideshow :slideshow_list="slideshow_list"/>
        <!--用户头信息-->
        <UserHeader />
        <!--用户导航-->
        <UserNav />
        <!--基本信息-->
        <UserBasic/>
        <!--认证信息-->
        <UserAuth />
        <!--个性标签-->
        <UserLabel/>
        <!--走心问答-->
        <UserQuestion/>
        <div class="footer"></div>

        <div class="float_block">
            <span>分享</span>
            <span>想认识</span>
        </div>
    </div>
</template>

<script>
    import Slideshow from "../../components/slideshow/Slideshow";
    import UserHeader from "./children/UserHeader";
    import UserNav from "./children/UserNav";
    import UserBasic from "./children/UserBasic";
    import UserAuth from "./children/UserAuth";
    import UserLabel from "./children/UserLabel";
    import UserQuestion from "./children/UserQuestion";
    export default {
        name: "Person",
        components: {UserQuestion, UserLabel, UserAuth, UserBasic, UserNav, UserHeader, Slideshow},
        data(){
            return {
                datingId:0,
                slideshow_list:['http://file.51vipyuan.com/8d11ff72-3827-4eee-82af-c7e86b3e9efd.JPG','http://file.51vipyuan.com/9113a71b-ac28-43f9-becf-41ae72160a30.jpeg']
            }
        },
        created(){
            this.datingId = this.$route.params.datingId;
            console.log(this.datingId);
        },
        computed:{

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
        font-size: 1.4rem;
        height: 2.4rem;
        line-height: 2.4rem;
        display: inline-block;
        border-radius: 1rem;
    }

</style>
