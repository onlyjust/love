<template>
    <div>
        <div class="menu-wrapper">
            <div class="iconfont icon voice">&#xe72c;</div>
            <div class="input-wrapper">
                <label>
                    <input type="text" class="input"/>
                </label>
            </div>
            <div class="iconfont icon emoticon">&#xe6f6;</div>
            <div class="iconfont icon more">&#xe6e0;</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ChatReply"
    }
</script>

<style lang="less" scoped>
    .menu-wrapper {
        height: 49px;
        background: #f2f2f2;
        display: flex;
        box-sizing: border-box;
    .icon {
        font-size: 2.88rem;
        margin: 0 5px;
        line-height: 49px;
    }
    .voice {
        float: left;
    }
    .input-wrapper {
        flex: 1;
        padding: 0;
        margin: 8px 0;
    .input {
        box-sizing: border-box;
        height: 100%;
        width: 100%;
        line-height: 100%;
        border-radius: 5px;
        background: white;
        color: #f2f2f2;
        outline: none;
        border: none;
        font-size: 1.44rem;
    }
    }
    .emoticon {
        float: right;
    }
    .more {
        float: right;
        margin-left: 0;
    }
    }
</style>
