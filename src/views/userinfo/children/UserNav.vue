<template>
    <div class="nav">
        <ul class="nav_container">
            <li>
                <img src="@/img/guanzhu.png">
                <span>关注TA</span>
            </li>
            <li>
                <img src="@/img/dongtai.png">
                <span>TA的动态</span>
            </li>
            <li>
                <img src="@/img/shengyin.png">
                <span>TA的声音</span>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "UserNav"
    }
</script>

<style scoped>

    /*用户导航*/
    .nav {

    }
    .nav .nav_container{
        display: flex;
        justify-content: space-around;
    }
    .nav .nav_container li{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .nav .nav_container li img{
        width: 3.2rem;
    }

</style>
