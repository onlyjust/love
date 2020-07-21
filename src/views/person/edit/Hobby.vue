<template>
    <div class="hobby ">
        <van-tree-select
                height="100vh"
                :items="items"
                :active-id.sync="activeIds"
                :main-active-index.sync="activeIndex"
                @click-item="selectedItem"
        >
            <template #content v-if="activeIndex === 3">
                <!--<van-image
                        src="https://img.yzcdn.cn/vant/apple-2.jpg"
                />-->
                <van-cell-group title="自定义标签">
                    <tags-label v-model="tags" @customTag="operationCustomTag"></tags-label>
                </van-cell-group>
            </template>
        </van-tree-select>
    </div>
</template>

<script>

    import {getLabelList,operationDatingLabel} from "../../../service/api";
    import TagsInput from "../../../components/tag/TagsInput";
    import TagsLabel from "../../../components/tag/TagsLabel";

    export default {
        name: "Hobby",
        components: {TagsLabel, TagsInput},
        data() {
            return {
                /*items :[
                    {
                        // 导航名称
                        text: '浙江',
                        // 导航节点额外类名
                        className: 'zhe-jiang',
                        // 该导航下所有的可选项
                        children: [
                            {
                                // 名称
                                text: '温州',
                                // id，作为匹配选中状态的标识符
                                id: 1,
                            },
                            {
                                text: '杭州',
                                id: 2,
                            },
                        ],
                    },
                    {
                        // 导航名称
                        text: '江苏',
                        // 导航节点额外类名
                        className: 'jiang-su',
                        // 该导航下所有的可选项
                        children: [
                            {
                                // 名称
                                text: '南京',
                                // id，作为匹配选中状态的标识符
                                id: 3,
                            },
                            {
                                text: '苏州',
                                id: 4,
                                name: "suzhou",
                                type: 'city',
                            },
                        ],
                    },
                ],*/
                items:[],
                activeIds: [],
                activeIndex: 0,
                tags:[],
            };
        },
        created(){
            this.initData();

        },
        methods:{
            async initData(){
                let result = await getLabelList();
                if (!result.success){
                    return;
                }
                let data = result.data;
                data.forEach((d)=>{
                    let obj = {};
                    obj.className = d.labelType;
                    obj.text = d.labelTypeDesc;
                    obj.children=[];
                    this.items.push(obj);
                    d.datingLabelList.forEach(item => {
                        let label = {};
                        label.id = item.id;
                        label.text = item.label;
                        label.labelType = item.labelType;
                        label.selected = item.selected;
                        if (item.selected){
                            this.activeIds.push(item.id);
                        }
                        if (item.labelType === 'CUSTOM'){
                            this.tags.push(item.label)
                        }
                        obj.children.push(label);
                    })
                })
            },
            selectedItem(data){
                data.selected = !data.selected;
                this.operationLabel(data.labelType,data.text, data.selected);
            },
            // 自定义标签
            operationCustomTag(tag, selected){
                this.operationLabel("CUSTOM",tag, selected);
            },
            // 操作标签
            async operationLabel(labelType,label,selected){
                let result = await operationDatingLabel(labelType,label,selected);
                // console.log("操作标签结果：", result)
            },
        }
    }
</script>

<style scoped>

    .hobby {
        height: 100%;
    }
</style>
