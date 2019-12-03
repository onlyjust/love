<template>
    <div id="mine">
        <van-nav-bar
                title="我的"
                fixed
                border
        ></van-nav-bar>
        <van-cell-group style="margin-top: 2.6rem;">
            <van-cell
                    label-class="labelClass"
                    is-link
                    :center=true
                    @click="$router.push('/default/mine/userCenter')"
            >
                <template slot="title">
                    <div class="personMsg">
                        <img class="iconImage" src="
https://leo-public-dfs.oss-cn-beijing.aliyuncs.com/17313d72-96e2-4865-bc88-a82f380c555f.jpg" alt="">
                        <div class="personInfo">
                            <span>张XX</span>
                            <span>15900898361</span>
                        </div>
                    </div>
                </template>
            </van-cell>
        </van-cell-group>

        <van-cell-group>
            <van-grid :border="false">
                <van-grid-item>
                    <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" />
                </van-grid-item>
                <van-grid-item icon="photo-o" text="文字" />
                <van-grid-item icon="photo-o" text="文字" />
                <van-grid-item icon="photo-o" text="文字" />
            </van-grid>
        </van-cell-group>

        <van-cell-group style="margin-top: 0.4rem">
            <van-cell title="我的优惠券" icon="gold-coin" value="1张" is-link></van-cell>
            <van-cell title="我的收货地址" icon="todo-list" is-link></van-cell>
        </van-cell-group>
        <van-cell-group style="margin-top: 0.4rem">
            <van-cell title="我的优惠券" icon="gold-coin" value="1张" is-link></van-cell>
            <van-cell title="我的收货地址" icon="todo-list" is-link></van-cell>
        </van-cell-group>
    </div>
</template>

<script>
    export default {
        name: "Mine"
    }
</script>

<style lang="less" scoped>
    #mine{
        width: 100%;
        height: 100%;
    }
    .personMsg {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .personMsg > img {
        width: 4rem;
        height: 4rem;
        border-radius: 2rem;
        border: 0.12rem solid #FFF;
    }

    .personInfo {
        display: flex;
        flex-direction: column;
        margin-left: 0.8rem;
    }

    .van-grid-item__text{
        color: red;
    }
</style>
