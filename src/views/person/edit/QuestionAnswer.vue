<template>
    <div id="questionAnswer" class="top-bar">
        <!--导航栏-->
        <van-nav-bar
                title="走心问题回答"
                left-arrow
                :fixed=true
                :border=true
                @click-left="$router.go(-1)"
        ></van-nav-bar>
        <van-form @submit="onSubmit">
            <van-cell-group>
                <van-field name="question" v-model="question" disabled />
                <van-field
                        name="answer"
                        v-model="answer"
                        rows="6"
                        autosize
                        type="textarea"
                        placeholder="请回答问题"
                />
            </van-cell-group>
            <van-cell-group title="上传回答问题相关图片" style="padding: 1rem">
                <van-uploader
                        v-model="fileList"
                        multiple
                        :max-count="3"
                />
            </van-cell-group>
            <div style="margin: 16px;">
                <van-button round block color="#65c4aa" native-type="submit">
                    提交
                </van-button>
            </div>
        </van-form>
    </div>
</template>

<script>
    export default {
        name: "QuestionAnswer",
        data(){
          return{
              id:'',
              question:'',
              answer:'',
              fileList:[]
          }
        },
        created() {
            this.id = this.$route.params.id;
            this.question = this.$route.params.question;
        },
        methods:{
            // 提交
            onSubmit(values){
                values.id = this.id;
                console.log("values",values);
            }
        }
    }
</script>

<style scoped>

</style>
