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

    export default {
        name: "Person",
        data(){
            return{
                slideshow_list: [],
                userInfo:{}
            }
        },
        components:{
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
            }
        }
    }
</script>

<style lang="less" scoped>
    #person{
        width: 100%;
    }

</style>
