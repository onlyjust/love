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
                httpUrl = "https://love.51vipyuan.com/tourist/preview/100001";
                let title = "给你推荐一个朋友";
                if (this.datingData.gender == 2){
                    title = "给你推荐一个女朋友";
                } else if (this.datingData.gender == 1) {
                    title = "给你推荐一个男朋友";
                }
                let personalPhoto = this.datingData.personalPhoto;

                wx.ready(function () {   //需在用户可能点击分享按钮前就先调用
                    wx.checkJsApi({
                        jsApiList: ['updateAppMessageShareData','updateTimelineShareData'], // 需要检测的JS接口列表，所有JS接口列表见附录2,
                        success: function(res) {
                            // 以键值对的形式返回，可用的api值true，不可用为false
                            // 如：{"checkResult":{"chooseImage":true},"errMsg":"checkJsApi:ok"}
                            console.log("res==>",res);
                        }
                    });
                    wx.updateAppMessageShareData({
                        title: title,
                        desc: '马上领养',
                        link: httpUrl,
                        imgUrl: personalPhoto,
                        success: function () {
                            // 设置成功
                            console.log("分享成功")
                        },
                        cancel: function () {
                            console.log("分享取消")
                        }
                    });
                    wx.updateTimelineShareData({
                        title: title,
                        desc: '马上领养',
                        link: httpUrl,
                        imgUrl: personalPhoto,
                        success: function () {
                            // 设置成功
                            console.log("分享成功")
                        },
                        cancel: function () {
                            console.log("分享取消")
                        }
                    });
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
