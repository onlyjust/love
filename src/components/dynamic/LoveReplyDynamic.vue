<template>

    <div id="reply-dynamic">
        <!--回复动态-->
        <form class="reply_dynamic">
            <textarea rows="1" placeholder="回复："></textarea>
            <button >发送</button>
        </form>
    </div>

</template>

<script>
    export default {
        name: "LoveReplyDynamic"
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
        line-height: 2rem;
        margin-top: 0.8rem;
        margin-left: 1em;
        flex-grow: 1;
    }
    .reply_dynamic button {
        color: #333333;
        resize: none;
        outline: none;
        border: none;
        flex-shrink: 0;
        padding: 0 1rem;
    }
</style>
