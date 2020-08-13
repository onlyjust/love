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
                let that = this;
                wx.ready(function () {   //需在用户可能点击分享按钮前就先调用
                    wx.checkJsApi({
                        jsApiList: ['updateAppMessageShareData','updateTimelineShareData','onMenuShareAppMessage','onMenuShareTimeline'], // 需要检测的JS接口列表，所有JS接口列表见附录2,
                        success: function(res) {
                            // 以键值对的形式返回，可用的api值true，不可用为false
                            // 如：{"checkResult":{"chooseImage":true},"errMsg":"checkJsApi:ok"}
                            // console.log("res==>",res);
                            that.shareInfo(res);
                            // console.log("personalPhoto==>",that.datingData.personalPhoto);
                        }
                    });
                });
            },
            shareInfo(res){
                let httpUrl = window.location.href.substring(0,window.location.href.indexOf(window.location.pathname))+"/tourist/preview/"+this.datingData.datingDataId;
                let title = "给你推荐一个朋友";
                if (this.datingData.gender == 2){
                    title = "给你推荐一个女朋友";
                } else if (this.datingData.gender == 1) {
                    title = "给你推荐一个男朋友";
                }
                let personalPhoto = this.datingData.personalPhoto;
                let checkResult = res.checkResult;
                if (checkResult){
                    /*console.log("checkResult==>",checkResult);
                    console.log("updateAppMessageShareData==>",checkResult.updateAppMessageShareData);
                    console.log("updateTimelineShareData==>",checkResult.updateTimelineShareData);
                    console.log("onMenuShareAppMessage==>",checkResult.onMenuShareAppMessage);
                    console.log("onMenuShareTimeline==>",checkResult.onMenuShareTimeline);*/
                    if (checkResult.updateAppMessageShareData){
                        wx.updateAppMessageShareData({
                            title: title,
                            desc: '马上领养',
                            link: httpUrl,
                            imgUrl: personalPhoto,
                            success: function () {
                                // 设置成功
                                console.log("分享成功updateAppMessageShareData")
                            },
                            cancel: function () {
                                console.log("分享取消")
                            }
                        });
                    }
                    if (checkResult.updateTimelineShareData){
                        wx.updateTimelineShareData({
                            title: title,
                            desc: '马上领养',
                            link: httpUrl,
                            imgUrl: personalPhoto,
                            success: function () {
                                // 设置成功
                                console.log("分享成功updateTimelineShareData")
                            },
                            cancel: function () {
                                console.log("分享取消")
                            }
                        });
                    }
                    if (checkResult.onMenuShareAppMessage) {
                        wx.onMenuShareAppMessage({
                            title: title, // 分享标题
                            desc: '马上领养', // 分享描述
                            link: httpUrl, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                            imgUrl: personalPhoto, // 分享图标
                            type: '', // 分享类型,music、video或link，不填默认为link
                            dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
                            success: function () {
                                // 用户点击了分享后执行的回调函数
                                console.log("分享成功onMenuShareAppMessage")
                            }
                        });
                    }
                    if (checkResult.onMenuShareTimeline) {
                        wx.onMenuShareTimeline({
                            title: title, // 分享标题
                            link: httpUrl, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                            imgUrl: personalPhoto, // 分享图标
                            success: function () {
                                // 用户点击了分享后执行的回调函数
                                console.log("分享成功onMenuShareTimeline")
                            }
                        });
                    }
                }
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
