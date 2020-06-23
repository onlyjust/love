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
                        :after-read="afterReadFile"
                        :before-read="beforeReadFile"
                        :before-delete="deleteFile"
                        image-fit="cover"
                        preview-size="80px"
                />
            </van-cell-group>
            <div style="margin: 16px;">
                <van-button round block color="#65c4aa" native-type="submit">
                    提交
                </van-button>
            </div>
        </van-form>

        <van-popup v-model="cropperShow" :close-on-click-overlay="false">
            <div class="cut">
                <vue-cropper
                        ref="cropper"
                        img="https://qn-qn-kibey-static-cdn.app-echo.com/goodboy-weixin.PNG"
                        :outputSize="option.size"
                        :outputType="option.outputType"
                        autoCrop
                        :autoCropWidth="100"
                        fixed
                        :fixedNumber="option.fixedNumber"
                        full
                        canScale
                        centerBox
                        high
                        mode="cover"
                ></vue-cropper>
                <van-button class="cropperCancel" plain type="primary">取消</van-button>
                <van-button class="cropperConfirm" plain type="info" @click="cutCropper">确认</van-button>
            </div>
        </van-popup>
    </div>
</template>

<script>

    import fileUtils from "./../../../plugins/file";
    import { VueCropper }  from 'vue-cropper';

    import {getDatingQuestionAnswer, updateDatingQuestionAnswer, uploadFile, deleteFile} from './../../../service/api/index';

    export default {
        name: "QuestionAnswer",
        components:{
            VueCropper
        },
        data(){
          return{
              relationalId:'',
              questionId:'',
              question:'',
              answer:'',
              fileList:[],
              fileIdList:[],
              cropperShow:false,
              cropperImg: '',
              option:{
                  img:'',
                  size: 1,
                  outputType: 'jpeg',
                  fixedNumber:[1,1]
              }
          }
        },
        created() {
            this.questionId = this.$route.params.id;
            this.question = this.$route.params.question;
            this.initData();
        },
        methods:{
            // 提交
            async onSubmit(values){
                values.questionId = this.questionId;
                values.fileIdList = this.fileIdList;
                // console.log("values",values);
                let result = await updateDatingQuestionAnswer(values.questionId, values.answer, values.fileIdList);
                this.$toast(result.message);
                if (result.success){
                    this.$router.back();
                }
            },
            // 初始化数据
            async initData(){
                let result = await getDatingQuestionAnswer(this.questionId);
                // console.log("初始化数据",result)
                if (result.success){
                    if (result.data){
                        this.answer = result.data.answer;
                        this.relationalId = result.data.id;
                        this.fileList = result.data.answerPhotoList.map(item=>{
                            let fileObj = {};
                            fileObj.url = item.filePath;
                            fileObj.id = item.id;
                            return fileObj;
                        });
                        console.log('fileList',this.fileList)
                    }
                }
            },

            cutCropper(){
                // 获取截图的base64 数据
                this.$refs.cropper.getCropData((data) => {
                    // do something
                    console.log(data)
                    this.cropperImg = data;
                    file = fileUtils.dataURLtoFile(data,file)
                });
                this.cropperShow = false;
                return;
            },
            beforeReadFile(file){
                console.log("beforeReadFile", file);
                this.cropperShow = true;
                let this_ = this;
                this_.$refs.cropper.getCropData((data) => {
                    // do something
                    console.log(data)
                    this.cropperImg = data;
                    file = fileUtils.dataURLtoFile(data,file)
                });
                return true;
            },
            async afterReadFile(file){
                file.status = 'uploading';
                file.message = '上传中...';
                // console.log("afterReadFile",file);
                let formData = new FormData();
                formData.append("file", file.file);
                formData.append("fileName", file.file.name);
                formData.append("relationalId", this.relationalId);
                formData.append("relationalName", 'QUESTION_ANSWER_PHOTO');
                let result = await uploadFile(formData);
                // console.log("上传结果", result);
                if (result.success){
                    file.status = 'done';
                    file.message = '上传成功';
                    file.id = result.data.id;
                    if (!this.relationalId){
                        this.fileIdList.push(file.id);
                    }
                    return true;
                }
                return false;
            },
            async deleteFile(file){
                // console.log("deleteFile", file);
                let result = await deleteFile(file.id);
                if (result.success){
                    // 删除
                    if (!this.relationalId){
                        this.fileIdList.forEach((item,index)=>{
                            if (item == file.id){
                                this.fileIdList.splice(index, 1);
                            }
                        });
                    }
                    return true;
                } else {
                    return false;
                }

            }
        }
    }
</script>

<style lang="less" scoped>
    .cut {
        /*width: 100%;
        height: 500px;*/
        width: 100vw;
        height: 100vh;
        .cropperCancel{
            position: fixed;
            bottom: 0;
            left: 0;
            margin-left: 3rem;
        }
        .cropperConfirm{
            position: fixed;
            bottom: 0;
            right: 0;
            margin-right: 3rem;
        }
    }
</style>
