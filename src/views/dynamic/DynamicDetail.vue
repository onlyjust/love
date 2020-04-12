<template>
    <div id="dynamicDetail">
        <!--动态-->
        <love-dynamic />
        <!--动态评论-->
        <love-dynamic-comment/>
    </div>
</template>

<script>

    import LoveDynamic from '../../components/dynamic/LoveDynamic';
    import LoveDynamicComment from '../../components/dynamic/LoveDynamicComment';

    export default {
        name: "DynamicDetail",
        components:{
            LoveDynamicComment,
            LoveDynamic
        }
    }
</script>

<style scoped>



</style>
