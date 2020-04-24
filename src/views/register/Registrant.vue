<template>
    <div class="registrant">
        <div @click="selectedGender(1)" :class="[gender==1?'boy':'']">
            <img src="@/images/gender/boy.jpg">
            <p>男生</p>
        </div>
        <div @click="selectedGender(2)" :class="{'girl':gender==2}">
            <img src="@/images/gender/girl.jpg">
            <p>女生</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Registrant",
        props:{
            datingObj:Object
        },
        created(){
            this.gender = this.datingObj.gender;
        },
        data(){
            return{
                gender:0
            }
        },
        methods:{
            selectedGender(gender){
                this.gender = gender;
                this.datingObj.gender = gender;
                this.$emit('onDating',this.datingObj);
            }
        }
    }
</script>

<style scoped>

    .registrant{
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        margin-bottom: 2rem;
    }
    .registrant div{
        margin-top: 2rem;
        border: #666666 solid 1px;
        border-radius: 1rem;
    }
    .registrant p{
        border-top: #666666 dashed 1px;
        font-size: 1.4rem;
        height: 2.5rem;
        line-height: 2.5rem;
    }
    .registrant img{
        width: 14rem;
        height: 14rem;
        border-radius: 1rem;
    }
    .registrant .boy{
        border: #db3551 solid 1px;
        color: #db3551;
    }
    .registrant .girl{
        border: #db3551 solid 1px;
        color: #db3551;
    }
</style>
