<template>
    <div id="editor">
        <!--导航栏-->
        <van-nav-bar
                title="个人信息"
                left-arrow
                :fixed=true
                :border=true
                @click-left="$router.go(-1)"
        ></van-nav-bar>
<!--        <vue-html5-editor :content="content" :height="500"></vue-html5-editor>-->
        <vue-html5-editor ref="editor" :content="content" :height="400"  @change="updateData"></vue-html5-editor>
    </div>
</template>

<script>


    export default {
        name: "Editor",
        data() {
          return {
              content: ''
          }
        },
        created() {

        },
        methods:{
            updateData(data){
                this.content = data;
                console.info(data);
            }
        }
    }
</script>

<style lang="less" scoped>
    #editor {
        width: 100%;
        height: 120%;
        background-color: #748594;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
    }
</style>
