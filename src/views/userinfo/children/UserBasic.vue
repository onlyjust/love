<template>
    <!--基本信息-->
    <div class="basic">
        <h1 class="subject"><i class="iconfont iconjibenziliao_huaban">基本信息</i></h1>
        <div class="basic_box">
            <div class="basic_box_info">
                <div>
                    <i class="iconfont iconsuozaidi"></i>
                    <span>上海</span>
                </div>
                <div>
                    <i class="iconfont iconw_zhiye"></i>
                    <span>医生</span>
                </div>
                <div>
                    <i class="iconfont icon_xingzuoyuncheng"></i>
                    <span>水瓶座</span>
                </div>
                <div>
                    <i class="iconfont iconshengao"></i>
                    <span>180CM</span>
                </div>
                <div>
                    <i class="iconfont iconnianling"></i>
                    <span>26</span>
                </div>
                <div>
                    <i class="iconfont iconshouruqingkuang"></i>
                    <span>20-30W</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "UserBasic"
    }
</script>

<style scoped>

    /*基本信息*/
    .basic{
        width: 100%;
    }
    .subject{
        font-size: 1.6rem;
        font-weight: bold;
        margin: 1rem 2rem;
    }
    .basic .basic_box {
    }
    .basic .basic_box .basic_box_info{
        display: flex;
        justify-content: space-around;
    }
    .basic .basic_box .basic_box_info>div{
        display: flex;
        flex-direction: column;
        align-items: center;
        /*width: 25%;*/
        font-size: 2.5rem;
        /*border: #eea1af solid 1px;*/
        padding: 1rem 0;
        box-sizing: border-box;
    }
    .basic .basic_box .basic_box_info .align-left>span{
        align-self: flex-start;
        /*flex-grow: 1;*/
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .basic .basic_box .basic_box_info>div>span{
        font-size: 1.2rem;
        color: #999999;
    }

</style>
