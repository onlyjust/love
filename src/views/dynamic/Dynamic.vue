<template>
    <div id="dynamic">
        <van-nav-bar
                title="动态"
                fixed
                border
        ></van-nav-bar>
        <div style="margin-top: 2.6rem;">
            <div>
                <div class="chatMsg">
                    <img class="iconImage" src="
https://leo-public-dfs.oss-cn-beijing.aliyuncs.com/17313d72-96e2-4865-bc88-a82f380c555f.jpg" alt="">
                    <div class="chatInfo">
                        <span class="chatMsg-title">不安分的选择</span>
                        <span class="chatMsg-content">水瓶座 A型血</span>
                    </div>
                    <div class="chatTime">
                        <span>08-09</span>
                    </div>
                </div>
                <div style="margin-left: 2rem">
                    <div>
                        的萨菲按单收费梵蒂冈的的司法是
                    </div>
                    <img style="width: 50%;height: 10rem;" src="
https://leo-public-dfs.oss-cn-beijing.aliyuncs.com/17313d72-96e2-4865-bc88-a82f380c555f.jpg" alt="">
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "Dynamic"
    }
</script>

<style scoped>
    #dynamic{
        width: 100%;
        height: 100%;
        /*background-color: purple;*/
    }

    .chatMsg {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .chatInfo {
        display: flex;
        flex-direction: column;
        margin-left: 0.8rem;
    }

    .chatMsg .iconImage {
        width: 3rem;
        height: 3rem;
        margin: 0.4rem 0.4rem;
        border-radius: 1.5rem;
        border: 0.12rem solid #FFF;
    }

    .chatMsg-title{
        font-weight: bold;
        font-size: 14px;
        margin-bottom: 0.4rem;
    }
    .chatMsg-content{
        color: #7d7e80;
        font-size: 12px;
    }
    .chatTime{
        position: absolute;
        right:1rem;
        color: #fd2105;
        font-size: 12px;
    }

</style>
