<template>
    <div class="like" @click="onLike()">
        <img v-if="liked" src="@/images/user/guanzhu.png">
        <img v-else src="@/images/user/guanzhu2.png">
    </div>
</template>

<script>
    import {likeUser} from "../../../service/api";

    export default {
        name: "UserLike",
        data(){
            return {
                selected: false
            }
        },
        props:{
            datingId:Number,
            liked:{
                type:Boolean,
                default: () =>false
            }
        },
        methods:{
            // 关注
            async onLike(){
                let result = await likeUser(this.datingId,!this.liked);
                if (result.success) {
                    this.liked = !this.liked;
                }
            }
        }
    }
</script>

<style scoped>

    .like {
        position: fixed;
        right: 50px;
        bottom: 100px;
        width: 50px;
        height: 50px;
        line-height: 50px;
        text-align: center;
        vertical-align: middle;
    }
    .like img {
        width: 100%;
        height: 100%;
    }
</style>
