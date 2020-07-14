<template>
    <div class="sign_container">
        <div class="sign_box">
            <span v-if="signInInfo.signedIn">已签到</span>
            <span v-else @click="goSignIn()">签到</span>
        </div>
        <div class="sign_score">
            <h2>您已连续签到<span>{{signInInfo.signInDay}}</span>天了</h2>
            <ul>
                <li :class="[food.signInDay <= signInInfo.signInDay? 'selected':'']" v-for="(food,index) in dogFoodList"><span>+{{food.dogFood}}</span></li>
            </ul>
        </div>
    </div>
</template>

<script>
    import {signIn, signInHistory, getSignInFoodList} from "../../service/api";

    export default {
        name: "SignIn",
        data(){
            return {
                signInInfo:{},
                dogFoodList:[]
            }
        },
        created() {
            this.initData();
        },
        methods:{
            async initData(){
                this.getSignInHistory();
                this.getDogFood();
            },
            async getSignInHistory(){
                let result = await signInHistory();
                if (result.success){
                    this.signInInfo = result.data;
                }
            },
            async getDogFood(){
                let result = await getSignInFoodList();
                if (result.success){
                    this.dogFoodList = result.data;
                }
            },
            async goSignIn(){
                let result = await signIn();
                if (result.success){
                    this.$toast("签到成功");
                    this.getSignInHistory();
                } else {
                    this.$toast(result.message);
                }
            },
        }
    }
</script>

<style scoped>

    .sign_container {
        padding: 0 1rem;
    }
    .sign_container .sign_box{
        margin: 3rem auto;
        background: #ee0c45;
        width: 8rem;
        height: 8rem;
        text-align: center;
        line-height: 8rem;
        border-radius: 50%;
        color: #FFFFFF;
        font-size: 2rem;
    }

    .sign_container .sign_score{
        text-align: center;
    }
    .sign_container .sign_score ul {
        display: flex;
        justify-content: flex-start;
        flex-direction: row;
        flex-wrap: wrap;
        padding: 0 1rem;
    }
    .sign_container .sign_score ul li{
        width: 4rem;
        height: 4rem;
        background-color: #ccc;
        margin: 1rem 0.3rem;
        line-height: 4rem;
        color: #ee0c45;
        font-size: 1.4rem;
        border-radius: 0.5rem;
    }
    .sign_container .sign_score ul .selected {
        color: #fff;
        background-color: #ee0c45;
    }
    .sign_container .sign_score h2 {
        font-size: 1.4rem;
        margin-bottom: 1rem;
    }
    .sign_container .sign_score h2 > span{
        color: #ee0c45;
    }

</style>
