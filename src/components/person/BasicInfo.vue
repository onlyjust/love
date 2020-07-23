<template>
    <div class="basic">

        <!--用户头信息-->
        <header class="header">
            <!--<div class="header_left">
                <img :src="userInfo.personalPhoto">
            </div>-->
            <div class="header_box">
                <h1 class="nickname">{{userInfo.nickname}}<i class="iconfont " :class="[userInfo.gender == 1?'iconnan':'iconnv']"></i><a @click="$router.push('/person/basic')"><i class="iconfont iconbianji"></i></a></h1>
                <!--<p class="highlight_title">{{userInfo.highlightTitle}}</p>-->
            </div>
            <div class="header_right">
                <!--<img src="@/img/shengyin.png"><p>TA的声音</p>-->
                <MobileAudio :src="userInfo.myVoice"></MobileAudio>
                <span @click="$router.push('/person/voice')" class="iconfont iconbianji"></span>
            </div>
        </header>
        <p class="highlight_title">{{userInfo.highlightTitle}}</p>
        <!--基本信息-->
        <div class="basic_box">
            <div class="basic_box_info">
                <div>
                    <span v-if="userInfo.height"><i class="iconfont iconshengao"></i>{{userInfo.height}}CM</span>
                    <span v-if="userInfo.age"><i class="iconfont iconnianling"></i>{{userInfo.age}}</span>
                    <span v-if="userInfo.horoscope"><i class="iconfont icon_xingzuoyuncheng"></i>{{userInfo.horoscope}}</span>
                </div>
                <div>
                    <span v-if="userInfo.liveCity"><i class="iconfont iconzuobiao"></i>{{userInfo.liveCity}}</span>
                    <span v-if="userInfo.job"><i class="iconfont iconw_zhiye"></i>{{userInfo.job}}</span>
                    <span v-if="userInfo.salary"><i class="iconfont iconshouruqingkuang"></i>{{userInfo.salary}}元{{userInfo.salaryScope=='1'?'以上':''}}</span>
                </div>
                <div>
                    <span v-if="userInfo.graduateSchool"><i class="iconfont iconbiye"></i>{{userInfo.graduateSchool}}</span>
                    <span v-if="userInfo.education"><i class="iconfont iconsuozaidi"></i>{{userInfo.education}}</span>
                </div>
                <div v-if="userInfo.company">
                    <span><i class="iconfont icongongsimingcheng"></i>{{userInfo.company}}</span>
                </div>
                <div v-if="userInfo.nativePlace">
                    <i class="iconfont iconsuozaidi"></i>
                    <span>{{userInfo.nativePlace}}人</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {uploadAvatar} from "../../service/api";
    import MobileAudio from "../audio/MobileAudio";

    export default {
        name: "BasicInfo",
        components: {MobileAudio},
        props:{
            userInfo:{
                type:Object
            }
        },
        methods:{
            /*beforeReadFile(file){
                //console.log("beforeReadFile", file);
                return true;
            },*/
            /*async afterReadFile(file){
                file.status = 'uploading';
                file.message = '上传中...';
                let formData = new FormData();
                formData.append("file", file.file);
                formData.append("fileName", file.file.name);
                let result = await uploadAvatar(formData);
                console.log("上传结果", result);
                if (result.success){
                    file.status = 'done';
                    file.message = '上传成功';
                    this.userInfo.personalPhoto = result.data;
                    return true;
                }
                return false;
            },*/
        }
    }
</script>

<style scoped>

    /*用户头信息*/
    .header{
        display: flex;
        flex-wrap: nowrap;
        padding: 1rem 2rem 0rem;
        align-items: center;
    }
    .header .header_left{
        width: 5rem;
    }
    .header .header_left img{
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }
    .header .header_box{
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
    }
    .header .header_box .nickname{
        font-size: 1.8rem;
        font-weight: bold;
    }
    .header .header_box .nickname a{
        margin-left: 1rem;
        font-size: 1.4rem;
    }
    .highlight_title{
        margin-left: 2rem;
        margin-top: 1rem;
        font-size: 1.5rem;
    }

    .header .header_right {
        /*width: 5rem;*/
        /*text-align: center;*/
        /*font-size: 12px;*/
        vertical-align: middle;
    }
    .header .header_right span{
        /*margin-top: 5px;*/
        margin-left: 1em;
        display: inline-block;
        font-size: 12px;
    }

    /*基本信息*/
    .basic .basic_box {
        padding: 0 2rem;
    }
    .basic .basic_box .basic_box_info{
        display: flex;
        flex-direction: column;
    }
    .basic .basic_box .basic_box_info>div{
        display: flex;
        flex-wrap: nowrap;
        align-items: flex-start;
        font-size: 1.3rem;
        box-sizing: border-box;
        color: #999999;
        height: 2.5rem;
        line-height: 2.5rem;
    }
    .basic .basic_box .basic_box_info>div i {
        margin-right: 0.3rem;
    }
    .basic .basic_box .basic_box_info>div span {
        margin-right: 1rem;
    }

</style>
