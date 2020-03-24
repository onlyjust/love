<template>
    <div id="dynamic">
        <!--<van-nav-bar
                title="动态"
                fixed
                border
        ></van-nav-bar>-->
        <!--今日话题-->
        <div class="topic">
            <div class="topic_title">
                <h1 class="title">今日话题</h1>
                <a href="">历史话题></a>
            </div>
            <div class="topic_container">
                <div class="topic_content">
                    <div class="topic_info">
                        <h1 class="title">#疫情职场办公晒一下午餐#</h1>
                        <a href="" class="reply">参与话题</a>
                    </div>
                </div>
            </div>
        </div>
        <!--动态-->
        <div class="dynamic">
            <div class="dynamic_container">
                <div class="dynamic_left">
                    <div class="phone">
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
                            <p class="dynamic_txt">
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
                            <p class="location">上海.世博园</p>
                        </div>
                        <div class="dynamic_footer">
                            <span class="">点赞12</span>
                            <span>评论3</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="dynamic_container">
                <div class="dynamic_left">
                    <div class="phone">
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
                            <p class="dynamic_txt">
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
                            <p class="location"><i class="iconfont iconzuobiao"></i>上海.世博园</p>
                        </div>
                        <div class="dynamic_footer">
                            <span class="">点赞12</span>
                            <span>评论3</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="dynamic_container">
                <div class="dynamic_left">
                    <div class="phone">
                        <img src="@/img/3.jpg">
                    </div>
                </div>
                <div class="dynamic_right">
                    <div class="dynamic_person">
                        <div class="person_info">
                            <div>
                                <h1>晓晓<i class="iconfont iconnan"></i></h1>
                                <span>网红</span>
                            </div>
                            <span>09:12</span>
                        </div>
                        <div class="dynamic_info">
                            <p class="dynamic_txt">
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
                            <p class="location"><i class="iconfont iconzuobiao"></i>上海.世博园</p>
                        </div>
                        <div class="dynamic_footer">
                            <span class="">点赞12</span>
                            <span>评论3</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="footer"></div>
    </div>
</template>

<script>
    export default {
        name: "Dynamic"
    }
</script>

<style scoped>
    #dynamic{
        width: 100%;
        height: 100%;
        /*background-color: purple;*/
    }
    .footer{
        height: 5rem;
    }

    /*今日话题*/
    .topic{
        width: 100%;
        /*background: #999999;*/
        margin-bottom: 1rem;
    }
    .topic .topic_title{
        font-size: 1.4rem;
        display: flex;
        justify-content: space-between;
        margin: 1rem;
    }
    .topic .topic_container{
        padding: 0 2rem;
    }
    .topic .topic_container .topic_content{
        background: -webkit-linear-gradient(left, #f0ffde, #c8ff87, #629916);
        border-radius: 1rem;
        padding: 2rem;
    }
    .topic .topic_container .topic_content .topic_info {
        /*background: antiquewhite;*/
        height: 6rem;
        position: relative;
    }
    .topic .topic_container .topic_content .topic_info .title{
        font-size: 1.4rem;
        font-weight: bold;
    }
    .topic .topic_container .topic_content .topic_info .reply{
        background: #e9a4a5;
        font-size: 1.2rem;
        border-radius: 1.2rem;
        padding: 0.2rem 0.8rem;
        position: absolute;
        right: 0;
        bottom: 0;
    }

    /*动态*/
    .dynamic {
        width: 100%;
    }
    .dynamic .dynamic_container{
        display: flex;
        /*background: #eee;*/
        border-top: #eee solid 0.1rem;
        margin-bottom: 0.5rem;
    }
    .dynamic .dynamic_container:last-child{
        border-bottom: #eee solid 0.1rem;
    }
    .dynamic .dynamic_container .dynamic_left .phone{
        width: 6rem;
        padding: 1rem;
        box-sizing: border-box;
    }
    .dynamic .dynamic_container .dynamic_left .phone img{
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
        height: 4rem;
    }

    .dynamic .dynamic_container .dynamic_right .dynamic_person .person_info div{
        flex-grow: 1;
    }
    .dynamic .dynamic_container .dynamic_right .dynamic_person .person_info h1{
        font-size: 1.6rem;
        font-weight: bold;
        padding-bottom: 0.5rem;
    }
    .dynamic .dynamic_container .dynamic_right .dynamic_person .person_info span{
        font-size: 1.3rem;
        color: #999999;
    }

    .dynamic .dynamic_container .dynamic_right .dynamic_person .dynamic_info .dynamic_txt{
        font-size: 1.4rem;
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
        font-size: 1.2rem;
        display: flex;
        justify-content: flex-end;
    }
    .dynamic .dynamic_container .dynamic_footer span{
        margin: 0 1rem 0.5rem;
        background: -webkit-linear-gradient(left, #e9d6d6, #e9bebf, #e9a4a5);
        padding: 0.2rem 0.5rem;
        border-radius: 0.5rem;
    }

</style>
