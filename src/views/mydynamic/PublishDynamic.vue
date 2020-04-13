<template>
    <div id="publish-dynamic" >

        <!--头部信息-->
        <!--<header class="header">
            <a href=""><</a>
            <a href="">发布</a>
        </header>-->

        <van-nav-bar
                title="动态"
                left-text="返回"
                right-text="发布"
                :fixed=true
                :border=true
                :placeholder=true
                left-arrow
                @click-left="$router.go(-1)"
                @click-right="publishDynamic"
        />

        <van-form @submit="onSubmit">
            <van-cell-group>
                <van-field
                        name="dynamicContent"
                        v-model="dynamicContent"
                        rows="6"
                        autosize
                        type="textarea"
                        placeholder="记录你的生活，晒给TA看，让TA懂你……"
                />
            </van-cell-group>
            <van-cell-group title="" style="padding: 1rem">
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
            <van-cell-group>
                <!--参与话题-->
                <van-field
                        readonly
                        clickable
                        name="subject"
                        :value="subject"
                        label="参与话题"
                        placeholder="点击选择参与话题"
                        input-align="right"
                        required
                        @click="showSubjectPicker = true"
                />
                <van-popup v-model="showSubjectPicker" position="bottom">
                    <van-picker
                            show-toolbar
                            :columns="subjectList"
                            @confirm="onSubjectConfirm"
                            @cancel="showSubjectPicker = false"
                    />
                </van-popup>

                <van-field name="switch" label="是否匿名">
                    <template #input>
                        <van-switch v-model="switchChecked" size="20" />
                    </template>
                </van-field>
            </van-cell-group>
        </van-form>



        <!--动态内容区-->
        <div class="dynamic_container">
            <div class="dynamic_select">
                <span>所在位置</span>
                <span>&gt;</span>
            </div>
            <div class="dynamic_select">
                <span>参与话题</span>
                <span>&gt;</span>
            </div>
            <div class="dynamic_select">
                <span>是否匿名</span>
                <span>&gt;</span>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "PublishDynamic",
        data(){
            return {
                dynamicContent:'',
                switchChecked:false,
                subject:'',
                subjectList:[]
            }
        },
        methods:{
            publishDynamic(){

            },
            onSubmit(values){

            },

            onSubjectConfirm(){

            },
            beforeReadFile(file){
                console.log("beforeReadFile", file);
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

<style scoped>

    /*头部信息*/
    .header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 1rem;
        font-size: 1.6rem;
        background: #ee95ba;
    }
    .header a{
        height: 4rem;
        line-height: 4rem;
    }
    /*动态内容区*/
    .dynamic_container{
        margin: 0 1rem;
    }
    .dynamic_container .dynamic_text{
        width: 98%;
        text-indent: 1em;
        border: none;
        outline: none;
        resize: none;
        font-size: 1.4rem;
    }
    .dynamic_container .dynamic_img {
        display: flex;
        flex-wrap: wrap;
    }
    .dynamic_container .dynamic_img img{
        width: 8rem;
        padding: 0.25rem 0.25rem;
    }
    .dynamic_container .dynamic_select{
        display: flex;
        justify-content: space-between;
        margin: 0 1rem;
        font-size: 1.6rem;
        border-top: #ccc solid 1px;
    }
    .dynamic_container .dynamic_select:last-child{
        border-bottom: #ccc solid 1px;
    }
    .dynamic_container .dynamic_select span{
        line-height: 4rem;
        height: 4rem;
    }

</style>
