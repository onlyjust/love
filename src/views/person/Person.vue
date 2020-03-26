<template>
    <div id="person">

        <!--用户头信息-->
        <header class="header">
            <div class="header_left">
                <img src="@/img/2.jpg">
            </div>
            <div class="header_box">
                <h1 class="nickname">晓晓<i class="iconfont iconnv"></i></h1>
                <p class="highlight_title">一句突出自己的话</p>
            </div>
            <div class="header_right">
                <img src="@/img/shengyin.png">
                <p>TA的声音</p>
            </div>
        </header>

        <!--基本信息-->
        <div class="basic">
            <div class="subject">
                <h1><i class="iconfont iconjibenziliao_huaban">基本信息</i></h1>
                <a href="">编辑</a>
            </div>
            <div class="basic_box">
                <div class="basic_box_info">
                    <div>
                        <i class="iconfont iconshengao"></i>
                        <span>180CM</span>
                        <i class="iconfont iconnianling"></i>
                        <span>26</span>
                        <i class="iconfont icon_xingzuoyuncheng"></i>
                        <span>水瓶座</span>
                    </div>
                    <div>
                        <i class="iconfont iconzuobiao"></i>
                        <span>上海</span>
                        <i class="iconfont iconsuozaidi"></i>
                        <span>本科</span>
                        <i class="iconfont iconw_zhiye"></i>
                        <span>设计师</span>
                        <i class="iconfont iconshouruqingkuang"></i>
                        <span>20-30W</span>
                    </div>
                    <div>
                        <i class="iconfont iconbiye"></i>
                        <span>XXX大学</span>
                    </div>
                    <div>
                        <i class="iconfont icongongsimingcheng"></i>
                        <span>杭州XXX科技有限公司</span>
                    </div>
                    <div>
                        <i class="iconfont iconsuozaidi"></i>
                        <span>江苏 · 泰州人</span>
                    </div>
                </div>
            </div>
        </div>

        <!--个性标签-->
        <div class="label">
            <div class="subject">
                <h1>个性标签</h1>
                <a href="">编辑</a>
            </div>
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
            <div class="subject">
                <h1>走心问答</h1>
                <!--<a href="">编辑</a>-->
            </div>
            <div class="question_container">
                <div class="subject">
                    <h2 class="subject_title question_title">自我描述</h2>
                    <a class="subject_edit" href="">编辑</a>
                </div>
                <div class="answer_container">
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
            </div>
            <div class="question_container">
                <div class="subject">
                    <h2 class="subject_title question_title">你觉得最浪漫的事</h2>
                    <a class="subject_edit" href="">编辑</a>
                </div>
                <div class="answer_container">
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
            </div>
            <div class="question_container">
                <div class="subject">
                    <h2 class="subject_title question_title">遇见TA最想做什么</h2>
                    <a class="subject_edit" href="">编辑</a>
                </div>
                <div class="answer_container">
                    <p class="answer">
                        如果遇见你，我会对你说。但我们不会遇见了，即时遇见，可能我也只会和你打个招呼，或是装作没看见，我想你可以理解。
                    </p>
                    <img src="@/img/1.jpg">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Person"
    }
</script>

<style scoped>

    /*用户头信息*/
    .header{
        display: flex;
        flex-wrap: wrap;
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
    .header .header_box{
        flex-grow: 1;
    }
    .header .header_box .nickname{
        font-size: 1.6rem;
        font-weight: bold;
    }
    .header .header_box .highlight_title{
        margin-top: 1rem;
        font-size: 1.4rem;
    }

    .header .header_right {
        width: 5rem;
        text-align: center;
    }

    /*主题*/
    .subject {
        display: flex;
        margin: 1rem 2rem;
        /*justify-content: center;*/
    }
    .subject h1{
        font-size: 1.6rem;
        font-weight: bold;
        flex-grow: 1;
    }
    .subject a{
        font-size: 1.3rem;
    }

    .subject_title{
        flex-grow: 1;
    }
    .subject_edit{
        font-size: 1.3rem;
    }

    /*基本信息*/
    .basic{
        width: 100%;
    }

    .basic .basic_box {
        padding: 0 2rem;
    }
    .basic .basic_box .basic_box_info{
        display: flex;
        flex-direction: column;
        /*justify-content: space-around;*/
    }
    .basic .basic_box .basic_box_info>div{
        display: flex;
        align-items: flex-start;
        font-size: 1.3rem;
        box-sizing: border-box;
        color: #999999;
        height: 2.5rem;
        line-height: 2.5rem;
    }
    .basic .basic_box .basic_box_info>div i {
        margin-right: 0.3rem;
    }
    .basic .basic_box .basic_box_info>div span {
        margin-right: 1rem;
    }

    /*个性标签*/
    .label_container{
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        padding: 0 1.5rem;
    }

    /*走心问答*/
    .question .question_container{

    }
    .question .question_container .question_title{
        text-align: center;
        font-size: 1.5rem;
        font-weight: bold;
    }
    .question .answer_container{
        padding: 0 2rem;
    }
    .question .answer_container .answer{
        font-size: 1.2rem;
        line-height: 2rem;
        margin: 1rem auto;
    }
    .question .answer_container img{
        width: 100%;
        margin: 0.25rem auto;
    }

</style>
