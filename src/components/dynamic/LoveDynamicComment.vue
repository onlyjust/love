<template>
    <div id="loveDynamicComment">

        <!--动态评论-->
        <div class="dynamic_comment">
            <ul>
                <li v-for="dynamicComment in dynamicCommentList" :key="dynamicComment.id">
                    <!--用户头像-->
                    <div class="comment_user">
                        <a >
                            <img :src="dynamicComment.personalPhoto">
                        </a>
                    </div>
                    <div class="comment_content">
                        <div class="comment_header">
                            <div>
                                <h2>{{dynamicComment.nickname}}</h2>
                                <span>{{dynamicComment.commentTime}}</span>
                            </div>
                            <p @click="likeComment(dynamicComment)"><i class="iconfont iconz-like" :style="dynamicComment.liked? 'color:red':''"></i>{{dynamicComment.likeNum}}</p>
                        </div>
                        <p class="comment" @click="onChangeComment(dynamicComment.id,dynamicComment.nickname)">{{dynamicComment.comment}}</p>
                        <!--追加评论-->
                        <ul class="add_comment" v-if="dynamicComment.appendCommentList">
                            <li v-for="appendCommend in dynamicComment.appendCommentList" @click="onChangeComment(appendCommend.id,appendCommend.nickname)">
                                <a class="reply_user">{{appendCommend.nickname}}</a> 回复 <a class="reply_user">{{appendCommend.replierNickname}}：</a>{{appendCommend.comment}}
                            </li>
                        </ul>
                    </div>
                </li>

                <!--<li>
                    &lt;!&ndash;用户头像&ndash;&gt;
                    <div class="comment_user">
                        <a href="">
                            <img src="@/img/2.jpg">
                        </a>
                    </div>
                    <div class="comment_content">
                        <div class="comment_header">
                            <div>
                                <h2>小媛</h2>
                                <span>20-03-04 00:23</span>
                            </div>
                            <p><i class="iconfont iconz-like"></i>5</p>
                        </div>
                        <p class="comment">我好像喜欢上你了，你看能不能……</p>
                    </div>
                </li>

                <li>
                    &lt;!&ndash;用户头像&ndash;&gt;
                    <div class="comment_user">
                        <a href="">
                            <img src="@/img/3.jpg">
                        </a>
                    </div>
                    <div class="comment_content">
                        <div class="comment_header">
                            <div>
                                <h2>莹莹</h2>
                                <span>20-03-04 00:23</span>
                            </div>
                            <p><i class="iconfont iconz-like"></i>5</p>
                        </div>
                        <p class="comment">我好像喜欢上你了，你看能不能……我好像喜欢上你了，你看能不能……我好像喜欢上你了，你看能不能……</p>
                        &lt;!&ndash;追加评论&ndash;&gt;
                        <ul class="add_comment">
                            <li>
                                <a href="" class="reply_user">晓晓</a> 回复 <a href=""  class="reply_user">小媛：</a>我其实早就关注你了，只是不敢告诉你而已……
                            </li>
                            <li>
                                <a href="" class="reply_user">小媛</a> 回复 <a href=""  class="reply_user">晓晓：</a>我其实早就关注你了，只是不敢告诉你而已……
                            </li>
                        </ul>
                    </div>
                </li>-->
            </ul>
        </div>

        <!--最下面区块空格-->
        <div class="footer"></div>

    </div>
</template>

<script>
    // import Bus from '@/plugins/bus';

    import {likeComment} from "../../service/api";

    export default {
        name: "LoveDynamicComment",
        props:{
            dynamicCommentList:Array,
            Event:Object
        },
        methods:{
            onChangeComment(commentId,commentNickname){
                let obj = {commentId, commentNickname};
                // console.log("传值",obj);
                this.Event.$emit("onChangeComment", obj);
            },
            async likeComment(comment){
                let result = await likeComment(comment.id, !comment.liked)
                if (result.success){
                    comment.liked = !comment.liked;
                    if (comment.liked){
                        comment.likeNum++;
                    } else {
                        comment.likeNum--;
                    }
                }
            }
        }
    }
</script>

<style scoped>

    /*动态评论*/
    .dynamic_comment > ul > li {
        display: flex;
        padding: 1rem 0;
        border-top: #eee solid 1px;
    }
    .dynamic_comment > ul > li:last-child{
        border-bottom: #eee solid 1px;
        margin-bottom: 3rem;
    }
    .dynamic_comment .comment_user{
        /*background-color: #e9a4a5;*/
        width: 6rem;
        text-align: center;
    }
    .dynamic_comment .comment_user img{
        width: 4rem;
        height: 4rem;
        border-radius: 50%;
    }
    .dynamic_comment .comment_content{
        flex: 1;
        margin-right: 1rem;
    }
    .dynamic_comment .comment_content .comment_header{
        display: flex;
        justify-content: space-between;
        align-content: center;
    }
    .dynamic_comment .comment_content .comment_header>div>h2{
        font-size: 1.6rem;
        line-height: 2rem;
        color: #3f659d;
        flex-grow: 1;
    }
    .dynamic_comment .comment_content .comment_header>div>span{
        color: #9d9d9d;
    }
    .dynamic_comment .comment_content .comment_header>p{
        width: 4rem;
        height: 4rem;
        line-height: 4rem;
        font-size: 1.6rem;
        flex-shrink: 0;
    }

    .dynamic_comment .comment_content .comment{
        margin: 0.5rem 0;
        font-size: 1.4rem;
        line-height: 2rem;
        color: #373737;
    }
    .dynamic_comment .comment_content .add_comment{
        font-size: 1.4rem;
        line-height: 2rem;
        background-color: #e5e5e5;
        border-radius: 0.5rem;
        padding: 0.5rem;
        color: #373737;
    }
    .dynamic_comment .comment_content .add_comment .reply_user{
        color: #3f659d;
    }

    /*最下面区块空格*/
    .footer{
        height: 3.5rem;
    }
</style>
