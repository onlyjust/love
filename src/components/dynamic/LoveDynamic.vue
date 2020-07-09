<template>
    <div class="dynamic">
        <div class="dynamic_container">
            <div class="dynamic_left">
                <div class="user">
                    <img :src="dynamicInfo.personalPhoto">
                </div>
            </div>
            <div class="dynamic_right">
                <div class="dynamic_person">
                    <div class="person_info">
                        <div>
                            <h1>{{dynamicInfo.nickname}}<i class="iconfont" :class="[dynamicInfo.gender == 1?'iconnan':'iconnv']"></i></h1>
                            <span>{{dynamicInfo.job}}</span>
                        </div>
                        <span>{{dynamicInfo.dynamicTime}}</span>
                    </div>
                    <div class="dynamic_info">
                        <p class="dynamic_txt" v-if="isDetail">{{dynamicInfo.content}}</p>
                        <p class="dynamic_txt" v-else @click="$router.push({path:'/dynamicDetail', query:{id:dynamicInfo.id}})">{{dynamicInfo.content}}</p>
                        <div class="dynamic_img">
                            <img :class="dynamicImgIdx" v-for="(file,index) in dynamicInfo.dynamicFileList" @click="Preview_img(dynamicInfo.dynamicFileList,index)"  :src="file.filePath">
                        </div>
                        <h1 v-if="dynamicInfo.title" class="dynamic_title">#{{dynamicInfo.title}}</h1>
                        <p v-if="dynamicInfo.location" class="location iconfont iconzuobiao">{{dynamicInfo.location}}</p>
                    </div>
                    <div class="dynamic_footer">
                        <span @click="likeDynamic(dynamicInfo)"><i class="iconfont iconz-like" :style="dynamicInfo.liked? 'color:red':''"/>{{dynamicInfo.likeNum}}</span>
                        <span @click="$router.push({path:'/dynamicDetail', query:{id:dynamicInfo.id}})"><i class="iconfont iconpinglun1"></i> {{dynamicInfo.commentNum}}</span>
                    </div>
                </div>
                <div class="dynamic_like" v-if="dynamicInfo.dynamicLikeList">
                    <ul>
                        <li v-for="(like, idx) in dynamicInfo.dynamicLikeList" :key="idx"><img :src="like.personalPhoto"></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {ImagePreview} from 'vant';//引入预览

    import {likeDynamic} from "../../service/api";

    export default {
        name: "LoveDynamic",
        props:{
            dynamicInfo:Object,
            isDetail:Boolean
        },
        data(){
            return {

            }
        },
        methods:{
            async likeDynamic(dynamic){
                let result = await likeDynamic(dynamic.id,!dynamic.liked);
                if (result.success){
                    dynamic.liked = !dynamic.liked;
                    if (dynamic.liked){
                        dynamic.likeNum++;
                    } else {
                        dynamic.likeNum--;
                    }
                }
            },
            // 轮播图预览
            Preview_img(images, index) {
                let imgList = images.map(image=>image.filePath);
                ImagePreview({
                    images: imgList,//图片数组
                    showIndex: true,
                    loop: false,
                    startPosition: index
                })
            }
        },
        computed:{
            dynamicImgIdx(){
                if (this.dynamicInfo.dynamicFileList){
                    let index = (this.dynamicInfo.dynamicFileList.length-1)%3
                    return 'dynamic_img_'+index;
                }
            }
        }
    }
</script>

<style scoped>

    .dynamic .dynamic_container{
        display: flex;
        /*background: #eee;*/
        border-top: #eee solid 0.1rem;
        margin-bottom: 0.5rem;
    }
    .dynamic .dynamic_container:last-child{
        /*border-bottom: #eee solid 0.1rem;*/
    }
    .dynamic .dynamic_container .dynamic_left .user{
        width: 6rem;
        padding: 1rem;
        box-sizing: border-box;
    }
    .dynamic .dynamic_container .dynamic_left .user img{
        width: 4rem;
        height: 4rem;
        border-radius: 50%;
    }
    .dynamic .dynamic_container .dynamic_right{
        /*background: #f0ffde;*/
        flex-grow: 1;
        margin-right: 1rem;
    }

    .dynamic .dynamic_container .dynamic_right .dynamic_person .person_info {
        display: flex;
        padding: 1rem 1rem 0.5rem 0;
        justify-content: left;
        align-items: center;
        height: 5.5rem;
    }

    .dynamic .dynamic_container .dynamic_right .dynamic_person .person_info div{
        flex-grow: 1;
    }
    .dynamic .dynamic_container .dynamic_right .dynamic_person .person_info h1{
        font-size: 1.6rem;
        height: 3rem;
        line-height: 3rem;
        font-weight: bold;
        /*padding-bottom: 0.5rem;*/
    }
    .dynamic .dynamic_container .dynamic_right .dynamic_person .person_info span{
        font-size: 1.4rem;
        color: #999999;
    }

    .dynamic .dynamic_container .dynamic_right .dynamic_person .dynamic_info .dynamic_txt{
        font-size: 14px;
        line-height: 23px;
        color: #393939;
        white-space: pre-wrap;
    }

    .dynamic .dynamic_container .dynamic_right .dynamic_person .dynamic_info .dynamic_img {
        display: flex;
        align-items:center;
        /*justify-content: space-around;*/
        /*justify-content: space-between;*/
        /*justify-content: flex-start;*/
    }
    .dynamic .dynamic_container .dynamic_right .dynamic_person .dynamic_info .dynamic_img .dynamic_img_0{
        /*width: 90%;*/
        height: 12rem;
        margin: 1%;
    }
    .dynamic .dynamic_container .dynamic_right .dynamic_person .dynamic_info .dynamic_img .dynamic_img_1{
        width: 30%;
        margin: 1%;
    }
    .dynamic .dynamic_container .dynamic_right .dynamic_person .dynamic_info .dynamic_img .dynamic_img_2{
        width: 30%;
        margin: 1%;
    }

    .dynamic .dynamic_container .dynamic_right .dynamic_person .dynamic_info .dynamic_title {
        font-size: 12px;
        color: #ca78b5;
        height: 22px;
        line-height: 22px;
    }
    .dynamic .dynamic_container .dynamic_right .dynamic_person .dynamic_info .location {
        font-size: 11px;
        color: #9393a1;
    }
    .dynamic .dynamic_container .dynamic_right .dynamic_person .dynamic_info .location i {
        font-size: 1rem;
        color: #9393a1;
    }

    .dynamic .dynamic_container .dynamic_footer {
        font-size: 1.4rem;
        display: flex;
        justify-content: flex-end;
        vertical-align: center;
    }
    .dynamic .dynamic_container .dynamic_footer span{
        margin: 0 1rem 0.5rem;
        /*background: -webkit-linear-gradient(left, #e9d6d6, #e9bebf, #e9a4a5);*/
        border-radius: 0.5rem;
        height: 2rem;
        line-height: 2rem;
    }
    .dynamic .dynamic_container .dynamic_like ul {
        display: flex;
        flex-wrap: wrap;
    }
    .dynamic .dynamic_container .dynamic_like ul li {
        width: 12%;
        padding: 0.2rem;
        box-sizing: border-box;
    }
    .dynamic .dynamic_container .dynamic_like ul li img{
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
    }
</style>
