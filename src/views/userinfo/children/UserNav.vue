<template>
    <div class="nav">
        <ul class="nav_container">
            <li @click="onLike()">
                <img v-if="false" src="@/images/user/guanzhu.png">
                <img v-else src="@/images/user/guanzhu2.png">
                <span>关注TA</span>
            </li>
            <li @click="onDynamic()">
                <img src="@/images/user/dongtai.png">
                <span>TA的动态</span>
            </li>
            <li>
                <img src="@/images/user/shengyin.png">
                <span>TA的声音</span>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "UserNav",
        props:{
            datingId:Number,
            liked:Boolean
        },
        created(){
            console.log('datingId is ',this.datingId);
        },
        methods:{
            onDynamic(){
                this.$router.push({name:'personDynamic',params:{datingId:this.datingId}})
            },
            // 关注
            onLike(){

            }
        }
    }
</script>

<style scoped>

    /*用户导航*/
    .nav {

    }
    .nav .nav_container{
        display: flex;
        justify-content: space-around;
    }
    .nav .nav_container li{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .nav .nav_container li img{
        width: 3.2rem;
    }

</style>
