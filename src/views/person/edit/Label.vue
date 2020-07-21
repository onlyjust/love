<template>
    <!--个性标签-->
    <div id="label" class="top-bar">
        <!--导航栏-->
        <van-nav-bar
                title="个性标签"
                left-arrow
                :fixed=true
                :border=true
                @click-left="$router.go(-1)"
        ></van-nav-bar>
        <van-cell-group v-for="(label,idx) in labelList" v-if="label.labelType != 'CUSTOM'" :title="label.labelTypeDesc">
            <ul class="tag_list">
                <li v-for="(tag,index) in label.datingLabelList" @click="selectTag(idx,index)" :class="{'select': tag.selected}">
                    {{tag.label}}
                </li>
            </ul>
        </van-cell-group>
        <!--<van-cell-group title="兴趣爱好">
            <ul class="tag_list">
                <li v-for="(tag,index) in tagList" @click="selectTag(index)" :class="{'select': tag.select}">
                    {{tag.tagName}}
                </li>
            </ul>
        </van-cell-group>
        <van-cell-group title="饮食习惯">
            <ul class="tag_list">
                <li v-for="(tag,index) in tagList" @click="selectTag(index)" :class="{'select': tag.select}">
                    {{tag.tagName}}
                </li>
            </ul>
        </van-cell-group>-->

        <van-cell-group title="自定义标签">
            <tags-input v-model="tags"></tags-input>
        </van-cell-group>


        <van-form @submit="onSubmit">
            <div style="margin: 16px;">
                <van-button round block color="#65c4aa" native-type="submit">
                    提交
                </van-button>
            </div>
        </van-form>
    </div>
</template>

<script>
    import {getLabelList, updateDatingLabel} from './../../../service/api/index';
    import TagsInput from '@/components/tag/TagsInput';
    export default {
        name: "Label",
        data() {
            return {
                tags: [],
                labelList:[],
                selectedLabelList:[]
            }
        },
        created(){
            console.log("请求数据")
            this.initData();
        },
        mounted(){

        },
        methods: {
            async initData(){
                //获取标签数据
                let result = await getLabelList();
                console.log('result', result);
                if (result.success){
                    this.labelList = result.data;
                    this.labelList.forEach((item) =>{
                        item.datingLabelList.forEach((label) =>{
                            if (item.labelType === 'CUSTOM'){
                                this.tags.push(label.label)
                            } else if (label.selected) {
                                this.selectedLabelList.push(label);
                            }
                        });
                    });
                } else {
                    this.$toast(result.message);
                }
            },
            // 提交标签信息
            async onSubmit(values) {
                // console.log("selectedLabelList",this.selectedLabelList);
                // console.log("自定义",this.tags)
                this.tags.forEach(tag=>{
                   this.selectedLabelList.push({label:tag,labelType:'CUSTOM'})
                });
                // console.log("所有选中的",this.selectedLabelList);
                let result = await updateDatingLabel(this.selectedLabelList);
                this.$toast(result.message);
                if (result.success){
                    // 回去
                    this.$router.back();
                }
            },
            selectTag(idx,index){
                this.$set(this.labelList[idx].datingLabelList[index],'selected',!this.labelList[idx].datingLabelList[index].selected); //正确姿势
                if (this.labelList[idx].datingLabelList[index].selected) {
                    this.selectedLabelList.push(this.labelList[idx].datingLabelList[index]);
                } else {
                    this.selectedLabelList.forEach((item,num)=>{
                        if(item.label === this.labelList[idx].datingLabelList[index].label){
                            this.selectedLabelList.splice(num,1);
                        }
                    });
                }
            }
        },
        components:{
            TagsInput
        }
    }
</script>

<style lang="less" scoped>
    .tag_list {
        display: flex;
        flex-wrap: wrap;
    }
    .tag_list li {
        /*margin: 0.5rem 0.5rem;
        padding: 0.25rem 0.6rem;
        border-radius: 0.25rem;*/
        border: #7232dd solid 1px;
        color: #7232dd;
        font-size: 1.4rem;
        padding: 0.4rem 0.8rem;
        border-radius: 0.5rem;
        margin: 0.3rem 0.5rem;
    }

    .select {
        background-color: #7232dd;
        color: #ffffff !important;
    }
</style>
