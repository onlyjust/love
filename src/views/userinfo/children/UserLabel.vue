<template>
    <!--个性标签-->
    <div class="label" v-if="labelList !== undefined && labelList.length>0">
        <h1 class="subject">个性标签</h1>
        <div class="label_container">
            <label class="tag" v-for="label in labelList">{{label}}</label>
        </div>
    </div>
</template>

<script>
    export default {
        name: "UserLabel",
        props:{
            labelList:Array
        }
    }
</script>

<style scoped>

    /*个性标签*/
    .label_container{
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        /*margin-right: 5px;*/
        padding: 0 1rem;
    }


</style>
