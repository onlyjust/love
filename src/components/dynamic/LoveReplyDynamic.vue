<template>

    <div id="reply-dynamic">
        <!--回复动态-->
        <form class="reply_dynamic" >
            <textarea rows="1" v-model="comment" :placeholder="placeholder" @blur.prevent="resetComment()" ref="replyTextarea"></textarea>
            <input class="btn" type="button" @click="submitComment" value="发送"/>
        </form>
    </div>

</template>

<script>
    // import Bus from '@/plugins/bus';

    import {commentDynamic} from "../../service/api";

    export default {
        name: "LoveReplyDynamic",
        data(){
            return {
                placeholder:"回复：",
                parentId : 0,
                comment:''
            }
        },
        props:{
            Event:Object,
            dynamicId:Number
        },
        mounted(){
            // console.log("Event==>",this.Event);
            this.Event.$on('onChangeComment', this.onChangeComment);
        },
        methods:{
            onChangeComment(obj){
                if (!obj){
                    return;
                }
                console.log("回复内容：", obj);
                let commentNickname = obj.commentNickname;
                // console.log("回复：", commentId,commentNickname);
                this.placeholder = "回复："+commentNickname;
                this.parentId = obj.commentId;
                console.log("parentId==>",this.parentId);
                // console.log("dynamicId==>",this.dynamicId);
                this.$refs.replyTextarea.focus();
            },
            resetComment(){
                if (!this.comment) {
                    this.placeholder = "回复：";
                    this.parentId = 0;
                }
            },
            async submitComment(){
                let commentParam = {};
                commentParam.parentId = this.parentId;
                commentParam.comment = this.comment;
                commentParam.dynamicId = this.dynamicId;
                console.log("评论参数",commentParam);
                let result = await commentDynamic(commentParam);
                this.$toast(result.message);
                if (result.success){
                    // 刷新
                    // this.$router.back();
                    location.reload();
                }
            }
        }
    }
</script>

<style scoped>

    /*回复*/
    .reply_dynamic{
        display: flex;
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 3.5rem;
        border: #cccccc solid 1px;
        font-size: 1.4rem;
        background-color: white;
    }
    .reply_dynamic textarea{
        outline: none;
        border: none;
        resize: none;
        line-height: 2rem;
        margin-top: 0.8rem;
        margin-left: 1em;
        flex-grow: 1;
    }
    .reply_dynamic .btn {
        color: #333333;
        resize: none;
        outline: none;
        border: none;
        flex-shrink: 0;
        padding: 0 1rem;
        height: 3.5rem;
        box-sizing: border-box;
    }
</style>
