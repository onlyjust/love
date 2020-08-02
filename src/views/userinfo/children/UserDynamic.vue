<template>
    <div id="user-dynamic" v-if="dynamicInfo">
        <div class="subject">
            <h1>最新动态</h1>
            <a @click="onDynamic()">更多…</a>
            <!--<a v-else >更多…</a>-->
        </div>
        <div class="dynamic_container">
            <div class="dynamic_info">
                <p class="dynamic_txt">{{dynamicInfo.content}}</p>
                <div class="dynamic_img">
                    <img :class="dynamicImgIdx" v-for="(file,index) in dynamicInfo.dynamicFileList"
                         @click="Preview_img(dynamicInfo.dynamicFileList,index)" :src="file.filePath">
                </div>
                <h1 v-if="dynamicInfo.title" class="dynamic_title">#{{dynamicInfo.title}}</h1>
                <p v-if="dynamicInfo.location" class="location iconfont iconzuobiao">{{dynamicInfo.location}}</p>
            </div>
            <!--<div class="dynamic_footer">
                <span ><i class="iconfont iconz-like"/>{{dynamicInfo.likeNum}}</span>
                <span><i class="iconfont iconpinglun1"></i> {{dynamicInfo.commentNum}}</span>
            </div>-->
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex';
    export default {
        name: "UserDynamic",
        props: {
            dynamicInfo: {
                type: Object,
                default: ()=>{}
            },
            datingId:{
                type: Number
            }
        },
        computed:{
            // ...mapState(['token']),
            dynamicImgIdx(){
                if (this.dynamicInfo.dynamicFileList){
                    let index = (this.dynamicInfo.dynamicFileList.length-1)%3
                    return 'dynamic_img_'+index;
                }
            },
            onDynamic() {
                console.log("this.token==>"+this.$store.state.token);
                if ( this.$store.state.token){
                    this.$router.push({name:'personDynamic',params:{datingId:this.datingId}})
                } else {
                    this.$toast("您还没登录，只有登录后才有权限访问")
                }

            },
        }
    }
</script>

<style scoped>
    .dynamic_container {
        margin-bottom: 0.5rem;
        padding: 0 2rem;
    }

    .dynamic_container .dynamic_info .dynamic_txt {
        font-size: 1.4rem;
        line-height: 2.3rem;
        color: #393939;
        white-space: pre-wrap;
    }

    .dynamic_container .dynamic_info .dynamic_img {
        display: flex;
        align-items: center;
    }

    .dynamic_container .dynamic_info .dynamic_img .dynamic_img_0 {
        height: 12rem;
        margin: 1%;
    }

    .dynamic_container .dynamic_info .dynamic_img .dynamic_img_1 {
        width: 30%;
        margin: 1%;
    }

    .dynamic_container .dynamic_info .dynamic_img .dynamic_img_2 {
        width: 30%;
        margin: 1%;
    }

    .dynamic_container .dynamic_info .dynamic_title {
        font-size: 1.2rem;
        color: #ca78b5;
        height: 2.2rem;
        line-height: 2.2rem;
    }

    .dynamic_container .dynamic_info .location {
        font-size: 1.1rem;
        color: #9393a1;
    }

    .dynamic_container .dynamic_info .location i {
        font-size: 1rem;
        color: #9393a1;
    }

    .dynamic_container .dynamic_footer {
        font-size: 1.4rem;
        display: flex;
        justify-content: flex-end;
        vertical-align: center;
    }

    .dynamic_container .dynamic_footer span {
        margin: 0 1rem 0.5rem;
        /*background: -webkit-linear-gradient(left, #e9d6d6, #e9bebf, #e9a4a5);*/
        border-radius: 0.5rem;
        height: 2rem;
        line-height: 2rem;
    }

</style>
