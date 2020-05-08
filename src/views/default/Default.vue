<template>
    <div id="default">
        <van-tabbar v-model="active" active-color="#fd2105">
            <van-tabbar-item replace to="/home">
                <span>首页</span>
                <img slot="icon" slot-scope="props" :src="props.active ? home_icon.active : home_icon.normal">
            </van-tabbar-item>
            <van-tabbar-item replace to="/dynamic">
                <span>动态</span>
                <img slot="icon" slot-scope="props" :src="props.active ? dynamic_icon.active : dynamic_icon.normal">
            </van-tabbar-item>
            <van-tabbar-item replace to="/message" >
                <span>消息</span>
                <img slot="icon" slot-scope="props" :src="props.active ? message_icon.active : message_icon.normal">
            </van-tabbar-item>
            <van-tabbar-item replace to="/mine">
                <span>我的</span>
                <img slot="icon" slot-scope="props" :src="props.active ? mine_icon.active : mine_icon.normal">
            </van-tabbar-item>
        </van-tabbar>
        <router-view/>
    </div>
</template>

<script>
    import {mapState,mapActions} from 'vuex';
    export default {
        name: "Default",
        data() {
            return {
                active: Number(sessionStorage.getItem('tabBarActiveIndex')) || 0,
                home_icon: {
                    normal: require('@/images/tabbar/home_default.png'),
                    active: require('@/images/tabbar/home_selected.png')
                },
                dynamic_icon: {
                    normal: require('@/images/tabbar/dynamic_default.png'),
                    active: require('@/images/tabbar/dynamic_selected.png')
                },
                message_icon: {
                    normal: require('@/images/tabbar/message_default.png'),
                    active: require('@/images/tabbar/message_selected.png')
                },
                mine_icon: {
                    normal: require('@/images/tabbar/mine_default.png'),
                    active: require('@/images/tabbar/mine_selected.png')
                }
            }
        },
        watch:{
            active(value){
                console.log(value);
                let tabBarActiveIndex = value > 0?value:0;
                // 缓存到本地
                sessionStorage.setItem('tabBarActiveIndex', tabBarActiveIndex);
            }
        },
        computed:{

        },
        mounted() {
            console.log("default mounted");
            // this.reqUserInfo();
            console.log("websocket init");
        },
        methods:{
            ...mapActions(["reqUserInfo"]),
        }
    }
</script>

<style lang="less" scoped>

    #default {
        width: 100%;
        height: 100%;
        background-color: #f5f5f5;
    }
</style>
