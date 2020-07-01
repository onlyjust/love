<template>
    <div>
        <div class="cell-box">
            <van-image
                    round
                    width="5rem"
                    height="5rem"
                    src="https://img.yzcdn.cn/vant/cat.jpeg"
            />
            <div class="clearfix cell-right">
                <div class="left">
                    <h2>小小</h2>
                    <span>撒打算</span>
                </div>
                <div class="right">05-09</div>
            </div>
        </div>
    <!--<van-divider />-->
        <div class="cell-box">
            <van-image
                    round
                    width="5rem"
                    height="5rem"
                    src="https://img.yzcdn.cn/vant/cat.jpeg"
            />
            <div class="clearfix cell-right">
                <div class="left">
                    <h2>小小</h2>
                    <span>撒打算</span>
                </div>
                <div class="right">05-09</div>
            </div>
        </div>


    </div>
</template>

<script>
    export default {
        name: "Fans"
    }
</script>

<style lang="less" scoped>

    .cell-box{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0 0.5rem;
        padding: 1rem 0;
        border-bottom: #bebebe solid 1px;
    }
    .cell-box .cell-right{
        flex-grow: 1;
        height: 5rem;
    }
    .cell-box .cell-right .left {
        margin-left: 1rem;
        line-height: 2.2rem;
    }
    .cell-box .cell-right .right {
        margin-right: 1rem;
        line-height: 4rem;
    }
</style>
