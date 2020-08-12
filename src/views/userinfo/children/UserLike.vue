<template>
    <div class="like" @click="onLike()">
        <img v-if="liked" src="@/images/user/shouchang.png">
        <img v-else src="@/images/user/shouchang2.png">
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
        right: 40px;
        bottom: 60px;
        width: 40px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        vertical-align: middle;
        border-radius: 20px;
        padding: 5px;
        border: #619c8f solid 1px;
        background-color: white;
    }

    .like img {
        width: 100%;
        height: 100%;
    }
</style>
