<template>
    <div class="shareWx">
    </div>
</template>

<script>
    export default {
        name: "UserShareWx",
        props: {
            datingData: Object
        },
        created(){
            this.shareFriend();
        },
        methods:{
            shareFriend(){
                let httpUrl = window.location.href.substring(0,window.location.href.indexOf(window.location.pathname))+"/tourist/preview/"+this.datingData.datingDataId;
                let title = "给你推荐一个朋友";
                if (this.datingData.gender == 2){
                    title = "给你推荐一个女朋友";
                } else if (this.datingData.gender == 1) {
                    title = "给你推荐一个男朋友";
                }
                let personalPhoto = this.datingData.personalPhoto;
                wx.ready(function () {   //需在用户可能点击分享按钮前就先调用
                    let shareData = {
                        title: title,
                        desc: '马上领养',
                        link: httpUrl,
                        imgUrl: personalPhoto
                    };
                    wx.updateAppMessageShareData(shareData);
                    wx.updateTimelineShareData(shareData);
                });
                let that = this;
                wx.error(function (res) {
                    that.$toast(res.errMsg);
                });
            }
        }
    }
</script>

<style lang="less" scoped>

    /*.shareWx {*/

    /*}*/
    /*.shareWx span {*/
        /*position: fixed;*/
        /*top: 50px;*/
        /*right: 0;*/
        /*width: 70px;*/
        /*height: 24px;*/
        /*line-height: 24px;*/
        /*background-color: red;*/
        /*color: white;*/
        /*text-align: center;*/
        /*border-radius: 12px 0 0 12px;*/
    /*}*/

</style>
