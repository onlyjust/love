<template>
    <div id="person">
        <!--轮播图-->
        <Slideshow :slideshow_list="slideshow_list"/>
        <!--基本信息-->
        <BasicInfo/>
        <!--个性标签-->
        <PersonLabel/>
        <!--走心问答-->
        <QuestionAnswer/>
    </div>
</template>

<script>

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
                    'https://img.yzcdn.cn/vant/apple-1.jpg',
                    'https://img.yzcdn.cn/vant/apple-2.jpg'
                ]
            }
        },
        components:{
            QuestionAnswer,
            PersonLabel,
            Slideshow,
            BasicInfo,
        }
    }
</script>

<style lang="less" scoped>
    #person{
        width: 100%;
    }

</style>
