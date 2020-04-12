<template>
    <div class="dynamic">
        <div class="dynamic_container">
            <div class="dynamic_left">
                <div class="user">
                    <img src="@/img/3.jpg">
                </div>
            </div>
            <div class="dynamic_right">
                <div class="dynamic_person">
                    <div class="person_info">
                        <div>
                            <h1>晓晓<i class="iconfont iconnv"></i></h1>
                            <span>网红</span>
                        </div>
                        <span>09:12</span>
                    </div>
                    <div class="dynamic_info">
                        <p class="dynamic_txt" @click="$router.push({path:'/dynamicDetail', query:{id:'12'}})">
                            啊书法大赛反对阿斯蒂芬萨芬就打算大事发生啊手动阀手动阀<br>
                            a爱的色放的撒发生阿发是否打算的撒发生
                            啊但是发射点发生广泛大概热帖热舞
                        </p>
                        <div class="dynamic_img">
                            <!--<img class="dynamic_img_1" src="img/1.jpg">-->
                            <!--<img class="dynamic_img_2" src="img/2.jpg">-->
                            <!--<img class="dynamic_img_2" src="img/3.jpg">-->

                            <img class="dynamic_img_3" src="@/img/1.jpg">
                            <img class="dynamic_img_3" src="@/img/2.jpg">
                            <img class="dynamic_img_2" src="@/img/3.jpg">
                            <!--<img class="dynamic_img_2" src="">-->
                        </div>
                        <h1 class="dynamic_title">#疫情的生活</h1>
                        <p class="location iconfont iconzuobiao">上海.世博园</p>
                    </div>
                    <div class="dynamic_footer">
                        <span ><i class="iconfont iconz-like"></i> 12</span>
                        <span ><i class="iconfont iconpinglun1"></i> 3</span>
                    </div>
                </div>
                <div class="dynamic_like">
                    <ul>
                        <li><img src="@/img/1.jpg"></li>
                        <li><img src="@/img/2.jpg"></li>
                        <li><img src="@/img/3.jpg"></li>
                        <li><img src="@/img/1.jpg"></li>
                        <li><img src="@/img/3.jpg"></li>
                        <li><img src="@/img/2.jpg"></li>
                        <li><img src="@/img/1.jpg"></li>
                        <li><img src="@/img/2.jpg"></li>
                        <li><img src="@/img/3.jpg"></li>
                        <li><img src="@/img/1.jpg"></li>
                        <li><img src="@/img/3.jpg"></li>
                        <li><img src="@/img/2.jpg"></li>
                        <li><img src="@/img/1.jpg"></li>
                        <li><img src="@/img/2.jpg"></li>
                        <li><img src="@/img/3.jpg"></li>
                        <li><img src="@/img/1.jpg"></li>
                        <li><img src="@/img/3.jpg"></li>
                        <li><img src="@/img/2.jpg"></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "LoveDynamic"
    }
</script>

<style scoped>

    .dynamic .dynamic_container{
        display: flex;
        /*background: #eee;*/
        border-top: #eee solid 0.1rem;
        margin-bottom: 0.5rem;
    }
    .dynamic .dynamic_container:last-child{
        /*border-bottom: #eee solid 0.1rem;*/
    }
    .dynamic .dynamic_container .dynamic_left .user{
        width: 6rem;
        padding: 1rem;
        box-sizing: border-box;
    }
    .dynamic .dynamic_container .dynamic_left .user img{
        width: 100%;
        border-radius: 50%;
    }
    .dynamic .dynamic_container .dynamic_right{
        /*background: #f0ffde;*/
        flex-grow: 1;
        margin-right: 1rem;
    }

    .dynamic .dynamic_container .dynamic_right .dynamic_person .person_info {
        display: flex;
        padding: 1rem 1rem 0.5rem 0;
        justify-content: left;
        align-items: center;
        height: 5.5rem;
    }

    .dynamic .dynamic_container .dynamic_right .dynamic_person .person_info div{
        flex-grow: 1;
    }
    .dynamic .dynamic_container .dynamic_right .dynamic_person .person_info h1{
        font-size: 1.6rem;
        height: 3rem;
        line-height: 3rem;
        font-weight: bold;
        /*padding-bottom: 0.5rem;*/
    }
    .dynamic .dynamic_container .dynamic_right .dynamic_person .person_info span{
        font-size: 1.4rem;
        color: #999999;
    }

    .dynamic .dynamic_container .dynamic_right .dynamic_person .dynamic_info .dynamic_txt{
        font-size: 1.6rem;
        line-height: 2.5rem;
        color: #373737;
    }

    .dynamic .dynamic_container .dynamic_right .dynamic_person .dynamic_info .dynamic_img {
        display: flex;
        /*justify-content: space-around;*/
        /*justify-content: space-between;*/
        /*justify-content: flex-start;*/
    }
    .dynamic .dynamic_container .dynamic_right .dynamic_person .dynamic_info .dynamic_img .dynamic_img_1{
        /*width: 90%;*/
        height: 12rem;
        margin: 1%;
    }
    .dynamic .dynamic_container .dynamic_right .dynamic_person .dynamic_info .dynamic_img .dynamic_img_2{
        width: 30%;
        margin: 1%;
    }
    .dynamic .dynamic_container .dynamic_right .dynamic_person .dynamic_info .dynamic_img .dynamic_img_3{
        width: 30%;
        margin: 1%;
    }

    .dynamic .dynamic_container .dynamic_right .dynamic_person .dynamic_info .dynamic_title {
        font-size: 1.2rem;
        color: #eea1af;
        height: 2rem;
        line-height: 2rem;
    }
    .dynamic .dynamic_container .dynamic_right .dynamic_person .dynamic_info .location {
        font-size: 1rem;
        color: #9393a1;
    }
    .dynamic .dynamic_container .dynamic_right .dynamic_person .dynamic_info .location i {
        font-size: 1rem;
        color: #9393a1;
    }

    .dynamic .dynamic_container .dynamic_footer {
        font-size: 1.4rem;
        display: flex;
        justify-content: flex-end;
        vertical-align: center;
    }
    .dynamic .dynamic_container .dynamic_footer span{
        margin: 0 1rem 0.5rem;
        /*background: -webkit-linear-gradient(left, #e9d6d6, #e9bebf, #e9a4a5);*/
        border-radius: 0.5rem;
        height: 2rem;
        line-height: 2rem;
    }
    .dynamic .dynamic_container .dynamic_like ul {
        display: flex;
        flex-wrap: wrap;
    }
    .dynamic .dynamic_container .dynamic_like ul li {
        width: 12%;
        padding: 0.2rem;
        box-sizing: border-box;
    }
    .dynamic .dynamic_container .dynamic_like ul li img{
        width: 100%;
        border-radius: 50%;
    }
</style>
