<template>
    <div id="person">
        <!--轮播图-->
        <Slideshow :slideshow_list="slideshow_list" :datingId="userInfo.datingDataId"/>
        <!--基本信息-->
        <BasicInfo :userInfo="userInfo"/>
        <!--个性标签-->
        <PersonLabel :labelList="userInfo.labelList"/>
        <!--走心问答-->
        <QuestionAnswer :questionAnswerList="userInfo.questionAnswerList"/>
        <span class="share" @click="shareInfo()">分享名片</span>
        <HtmlToCanvas v-if="userInfo" ref="canvasImage" :userInfo="userInfo"/>
        <div class="footer"></div>
    </div>
</template>

<script>

    import {getMovieOnInfoList,getPersonal} from './../../service/api/index'

    import {getStore,setStore} from './../../config/global';

    import {USER_INFO} from "../../store/mutations-type";

    // 引入组件
    import Slideshow from '../../components/slideshow/Slideshow';
    import BasicInfo from '../../components/person/BasicInfo';
    import PersonLabel from "../../components/person/PersonLabel";
    import QuestionAnswer from "../../components/person/QuestionAnswer";
    import HtmlToCanvas from "../../components/canvas/HtmlToCanvas";

    export default {
        name: "Person",
        data(){
            return{
                slideshow_list: [],
                userInfo:{}
            }
        },
        components:{
            HtmlToCanvas,
            QuestionAnswer,
            PersonLabel,
            Slideshow,
            BasicInfo,
        },
        created() {

            this.initData();
        },
        methods:{
            async initData(){
                let result = await getPersonal();
                // console.log('result',result)
                if (result.success){
                    let data = result.data;
                    // console.log("lifePhotoList",data.lifePhotoList)
                    this.slideshow_list.push(data.personalPhoto);
                    data.lifePhotoList.forEach(item =>{
                        this.slideshow_list.push(item.filePath);
                    });
                    this.userInfo = data;
                } else {
                    this.$toast(result.message);
                }
                // console.log('questionAnswerList',result.data.questionAnswerList)
            },
            shareInfo(){
                this.$refs.canvasImage.htmlToCanvas();
            }
        }
    }
</script>

<style lang="less" scoped>
    #person{
        width: 100%;
    }
    /*底部*/
    .footer{
        height: 10rem;
    }

    .share {
        position: fixed;
        right: 0;
        bottom: 50px;
        background: #e84310;
        height: 40px;
        line-height: 40px;
        color: white;
        padding: 0 5px 0 20px;
        border-radius: 20px 0 0 20px;
        font-size: 14px;
    }

</style>
