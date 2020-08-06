//提取出来的公共方法
/*
* 判断是否IOS环境
* */

import {getSignature} from "../../service/api";

export function isIOS () {
    let isIphone = navigator.userAgent.includes('iPhone')
    let isIpad = navigator.userAgent.includes('iPad')
    return isIphone || isIpad
}

/*
* 获取微信签名，注入权限验证配置
* */
export async function requestWxStr () {
    let httpUrl = location.href.split('#')[0];
    if (httpUrl.endsWith("/")){
        httpUrl = httpUrl.substring(0,httpUrl.length-1);
    }
    let res = await getSignature(httpUrl);
    if (res.data) {
        let wxResp = res.data;
        wx.config({
            debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            appId: wxResp.appId, // 必填，公众号的唯一标识
            timestamp: wxResp.timestamp, // 必填，生成签名的时间戳
            nonceStr: wxResp.nonceStr, // 必填，生成签名的随机串
            signature: wxResp.signature,// 必填，签名，见附录1
            // 必填，需要使用的JS接口列表，所有JS接口列表见官方js接口
            // 这里配置录音所需要的接口权限
            jsApiList: [
                'startRecord',
                'stopRecord',
                'onVoiceRecordEnd',
                'playVoice',
                'pauseVoice',
                'stopVoice',
                'onVoicePlayEnd',
                'uploadVoice',
                'downloadVoice',
                'previewImage'
            ]
        });
        // let that = this;
        wx.ready(function () {
            // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
            console.log("成功")
        });
        wx.error(function (res) {
            // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
            console.log("失败res===>", res);
            //that.$toast("失败res"+JSON.stringify(res));
        });
    }
}
