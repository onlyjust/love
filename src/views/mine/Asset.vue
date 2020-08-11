<template>
    <div class="top-bar">
        <!--导航栏-->
        <van-nav-bar
                title="我的资产"
                left-arrow
                :fixed=true
                :border=true
                @click-left="$router.go(-1)"
        ></van-nav-bar>
        <div class="asset">
            <p>我的总资产</p>
            <span>{{assetInfo.dogFood}} 🍗</span>
        </div>
        <div v-if="assetInfo.assetRecordList && assetInfo.assetRecordList.length > 0">
            <div class="cell-box" v-for="(asset,index) in assetInfo.assetRecordList">
                <div class="clearfix">
                    <div class="left">
                        <h2>{{asset.assetDesc}}</h2>
                        <span>{{asset.createTime}}</span>
                    </div>
                    <div class="right">{{asset.qtyType}} {{asset.assetQty}}</div>
                </div>
            </div>
        </div>
        <div v-else>
            <van-empty description="还没有狗粮" />
        </div>
        <div class="footer"></div>
    </div>
</template>

<script>
    import {getAssetInfo} from "../../service/api";

    export default {
        name: "Asset",
        data(){
            return {
                assetInfo:{}
            }
        },
        created() {
            this.initData();
        },
        methods:{
            async initData(){
                let result = await getAssetInfo();
                if (result.success){
                    this.assetInfo = result.data;
                }
            }
        }
    }
</script>

<style lang="less" scoped>

    .asset {
        width: 100vw;
        text-align: center;
        font-size: 20px;
        background: #ff959a;
        color: white;
        display: flex;
        flex-direction: column;
        padding: 50px 0;
    }
    .cell-box{
        margin: 0 0.5rem;
        padding: 1rem 0;
        border-bottom: #e1e1e1 solid 1px;
    }

    .cell-box .left {
        margin-left: 1rem;
        line-height: 2.2rem;
    }
    .cell-box .left span{
        font-size: 13px;
    }
    .cell-box .right {
        margin-right: 1rem;
        line-height: 4rem;
        font-size: 16px;
        color: red;
    }

    .footer {
        height: 60px;
    }
</style>
