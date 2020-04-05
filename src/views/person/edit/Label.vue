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
        <van-cell-group title="性格特点">
            <ul class="tag_list">
                <li v-for="(tag,index) in tagList" @click="selectTag(index)" :class="{'select': tag.select}">
                    {{tag.tagName}}
                </li>
            </ul>
        </van-cell-group>
        <van-cell-group title="兴趣爱好">
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
        </van-cell-group>

        <van-cell-group title="自定义标签">
            <tags-input v-model="tags"></tags-input>
        </van-cell-group>


        <van-form @submit="onSubmit">
            <input type="hidden" v-model="tagNameList" name="tagNameList">
            <div style="margin: 16px;">
                <van-button round block color="#65c4aa" native-type="submit">
                    提交
                </van-button>
            </div>
        </van-form>
    </div>
</template>

<script>
    import TagsInput from '@/components/tag/TagsInput';
    export default {
        name: "Label",
        data() {
            return {
                tags: ['tag1', 'tag2', 'tag3'],
                tagNameList:[],
                tagList: [
                    {
                        id: 1,
                        tagName: '90后'
                    },
                    {
                        id: 2,
                        tagName: '土豪',
                        select:true
                    },
                    {
                        id: 3,
                        tagName: '美女'
                    },
                    {
                        id: 4,
                        tagName: '帅哥',
                        select:true
                    },
                    {
                        id: 5,
                        tagName: '鸽子王'
                    },
                    {
                        id: 6,
                        tagName: '人傻钱多'
                    }
                ]
            }
        },
        mounted(){
            this.initData();
        },
        methods: {
            initData(){
                this.tagList.forEach((item,index) =>{
                    if(item.select){
                        this.tagNameList.push(item.tagName);
                    }
                })
            },
            onSubmit(values) {
                console.log("tagNameList",this.tagNameList);
                console.log("自定义",this.tags)
                console.log('submit', values);
            },
            selectTag(index){
                this.$set(this.tagList[index],'select',!this.tagList[index].select); //正确姿势
                if (this.tagList[index].select) {
                    this.tagNameList.push(this.tagList[index].tagName);
                } else {
                    this.tagNameList.forEach((item,idx)=>{
                        if(item === this.tagList[index].tagName){
                            this.tagNameList.splice(idx,1);
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
        margin: 0.5rem 0.5rem;
        padding: 0.25rem 0.6rem;
        border-radius: 0.25rem;
        border: #7232dd solid 1px;
        color: #7232dd;
    }

    .select {
        background-color: #7232dd;
        color: #ffffff !important;
    }
</style>
