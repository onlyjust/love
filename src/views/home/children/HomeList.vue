<template>
    <div id="listContainer">
        <div v-for="(match,index) in matchList" :key="index">
            <HomeMatch :match="match"/>
        </div>
        <div class="footer"></div>
    </div>


</template>

<script>
    import HomeMatch from "./HomeMatch";
    export default {
        name: "HomeList",
        components: {HomeMatch},
        props:{
            matchList:Array
        }
    }
</script>

<style lang="less" scoped>
    #listContainer {
    }
    .footer{
        height: 60px;
    }
</style>
