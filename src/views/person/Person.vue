<template>
    <div id="person">
        <!--轮播图-->
        <Slideshow :slideshow_list="slideshow_list"/>
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
                slideshow_list: [
                    /*'https://img.yzcdn.cn/vant/apple-1.jpg',
                    'https://img.yzcdn.cn/vant/apple-2.jpg'*/
                ],
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
            setStore(USER_INFO,{"token":'15900898361:838552232aeb4e4ab51d3a282ba6a659'});
            this.$toast('初始化数据');
            this.initData();
        },
        methods:{
            async initData(){
                let result = await getPersonal();
                console.log('result',result)
                if (result.success){
                    var data = result.data;
                    console.log("lifePhotoList",data.lifePhotoList)
                    data.lifePhotoList.forEach(item =>{
                        this.slideshow_list.push(item.filePath)
                    });
                    this.userInfo = data;
                } else {
                    this.$toast(result.message);
                }
                console.log('questionAnswerList',result.data.questionAnswerList)
            }
        }
    }
</script>

<style lang="less" scoped>
    #person{
        width: 100%;
    }

</style>
