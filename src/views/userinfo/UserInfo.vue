<template>
    <div id="person">
        <div class="photo">
            <div>
                <img src="@/img/1.jpg">
            </div>
        </div>
        <!--用户头信息-->
        <header class="header">
            <!--<div class="header_left">
                <img src="img/2.jpg">
            </div>-->
            <div class="header_right">
                <h1 class="nickname">晓晓<i class="iconfont iconnv"></i></h1>
                <p class="highlight_title">一句突出自己的话</p>
            </div>
        </header>
        <!--用户导航-->
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

        <!--基本信息-->
        <div class="basic">
            <h1 class="subject"><i class="iconfont iconjibenziliao_huaban">基本信息</i></h1>
            <div class="basic_box">
                <!--<div class="basic_box_info">
                    <div>
                        <i class="iconfont iconsuozaidi"></i>
                        <span>上海</span>
                    </div>
                    <div>
                        <i class="iconfont iconw_zhiye"></i>
                        <span>医生</span>
                    </div>
                    <div class="align-left">
                        <i class="iconfont icongongsimingcheng"></i>
                        <span>杭州阿里巴巴科技有限公司</span>
                    </div>
                </div>-->
                <div class="basic_box_info">
                    <div>
                        <i class="iconfont iconsuozaidi"></i>
                        <span>上海</span>
                    </div>
                    <div>
                        <i class="iconfont iconw_zhiye"></i>
                        <span>医生</span>
                    </div>
                    <div>
                        <i class="iconfont icon_xingzuoyuncheng"></i>
                        <span>水瓶座</span>
                    </div>
                    <div>
                        <i class="iconfont iconshengao"></i>
                        <span>180CM</span>
                    </div>
                    <div>
                        <i class="iconfont iconnianling"></i>
                        <span>26</span>
                    </div>
                    <div>
                        <i class="iconfont iconshouruqingkuang"></i>
                        <span>20-30W</span>
                    </div>
                </div>
            </div>
        </div>

        <!--认证信息-->
        <div class="auth">
            <h1 class="subject"><i class="iconfont iconjibenziliao_huaban">认证信息</i></h1>
            <div class="auth_container">
                <div class="auth_left">
                    <i class="iconfont iconrenzheng"></i>
                </div>
                <div class="auth_right">
                    <p>张*</p>
                    <p>321***199101******</p>
                    <p>2020-01-01 通过身份认证</p>
                </div>
            </div>
        </div>

        <!--个性标签-->
        <div class="label">
            <h1 class="subject">个性标签</h1>
            <div class="label_container">
                <label class="tag">直率</label>
                <label class="tag">开朗</label>
                <label class="tag">独立</label>
                <label class="tag">善解人意</label>
                <label class="tag">看电影</label>
                <label class="tag">听歌</label>
                <label class="tag">吃鸡</label>
                <label class="tag">烹饪</label>
                <label class="tag">直率</label>
                <label class="tag">开朗</label>
                <label class="tag">独立</label>
                <label class="tag">善解人意</label>
                <label class="tag">看电影</label>
                <label class="tag">听歌</label>
                <label class="tag">吃鸡</label>
                <label class="tag">烹饪</label>
            </div>
        </div>

        <!--走心问答-->
        <div class="question">
            <h1 class="subject">走心问答</h1>
            <div class="question_container">
                <h2 class="question_title">自我描述</h2>
                <p class="answer">
                    1、有良好的用户同理心。在XX实习工作中，和用户沟通次数达XX，日活跃度XX，拥有较多XX人群资源，对用户的意见反馈处理速度XX，根据反馈对产品更新XX。<br>
                    2、沟通能力强。团队协作中，任务交接XXX，有效传达了XXX，和B端客户XXX，和C端用户XXX，达成XXX量。<br>
                    3、逻辑思维强。曾画过XXX产品原型图，研究过XXX产品原型，对XX产品进行过用户行为分析。<br>
                    （对于产品经理来说，这一点非常重要，求职者通常也会带上很多作品，比如原型图，这个就需要你有多少拿多少出来了。）<br>
                    4、抗压能力强。实习期间完成了XXX高强度工作。多次挑战XXX不熟悉的领域。工作之余同时学习XXXX新技能来提升等等。<br>
                </p>
                <img src="@/img/1.jpg">
                <img src="@/img/2.jpg">
            </div>
            <div class="question_container">
                <h2 class="question_title">你觉得最浪漫的事</h2>
                <p class="answer">
                    一起走在路上 两人都不说话 但是他们不烦 他们心理有对方 即使什么事也不做也很好<br>
                    就是跟老公在昏黄的灯光下手拉手踩在雪白雪白的雪地上的那一刻的时候最浪漫<br>
                    老公抱着宝宝与我对视的时候最温馨<br>
                    把宝宝搂在怀里给他唱歌的时候最幸福<br>
                    也祝你幸福美满<br>
                </p>
                <img src="@/img/1.jpg">
                <img src="@/img/2.jpg">
            </div>
            <div class="question_container">
                <h2 class="question_title">遇见TA最想做什么</h2>
                <p class="answer">
                    如果遇见你，我会对你说。但我们不会遇见了，即时遇见，可能我也只会和你打个招呼，或是装作没看见，我想你可以理解。
                </p>
                <img src="@/img/1.jpg">
            </div>
        </div>

        <div class="footer"></div>

        <div class="float_block">
            <span>分享</span>
            <span>想认识</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Person",
        computed:{

        }
    }
</script>

<style scoped>

    /*用户头信息*/
    .header{
        display: flex;
        padding: 2rem 2rem;
        align-items: center;
    }
    .header .header_left{
        width: 6rem;
    }
    .header .header_left img{
        width: 100%;
        border-radius: 50%;
    }
    .header .header_right .nickname{
        font-size: 1.6rem;
        font-weight: bold;
    }
    .header .header_right .highlight_title{
        margin-top: 1rem;
        font-size: 1.4rem;
    }
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

    /*基本信息*/
    .basic{
        width: 100%;
    }
    .subject{
        font-size: 1.6rem;
        font-weight: bold;
        margin: 1rem 2rem;
    }
    .basic .basic_box {
    }
    .basic .basic_box .basic_box_info{
        display: flex;
        justify-content: space-around;
    }
    .basic .basic_box .basic_box_info>div{
        display: flex;
        flex-direction: column;
        align-items: center;
        /*width: 25%;*/
        font-size: 2.5rem;
        /*border: #eea1af solid 1px;*/
        padding: 1rem 0;
        box-sizing: border-box;
    }
    .basic .basic_box .basic_box_info .align-left>span{
        align-self: flex-start;
        /*flex-grow: 1;*/
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .basic .basic_box .basic_box_info>div>span{
        font-size: 1.2rem;
        color: #999999;
    }

    /*认证信息*/
    .auth{
    }
    .auth .auth_container{
        display: flex;
    }
    .auth .auth_container .auth_left {
        width: 6rem;
        font-size: 5rem;
        text-align: center;
    }
    .auth .auth_container .auth_right {
        flex-grow: 1;
        text-align: right;
        padding-right: 1rem;
        padding-top: 1rem;
    }

    /*个性标签*/
    .label_container{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        padding: 0 1rem;
    }

    /*走心问答*/

    .question .question_container{
        padding: 0 2rem;
    }
    .question .question_container .question_title{
        text-align: center;
        font-size: 1.5rem;
        font-weight: bold;
        margin: 1rem 0;
    }
    .question .question_container .answer{
        font-size: 1.2rem;
        line-height: 2rem;
        margin: 1rem auto;
    }
    .question .question_container img{
        width: 100%;
        margin: 0.25rem auto;
    }

    /*底部*/
    .footer{
        height: 10rem;
    }

    /*浮块*/
    .float_block{
        position: fixed;
        width: 100%;
        bottom: 0;
        display: flex;
        justify-content: space-around;
        margin-bottom: 1.5rem;
        /*background-color: #1296db ;*/
    }
    .float_block span{
        background-color: #e9a4a5;
        padding: 0 2rem;
        text-align: center;
        font-size: 1.4rem;
        height: 2.4rem;
        line-height: 2.4rem;
        display: inline-block;
        border-radius: 1rem;
    }

    .photo{
        text-align: center;
    }
    .photo img {
        height: 30rem;

    }

</style>
