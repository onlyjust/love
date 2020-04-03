<template>
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
</template>

<script>
    export default {
        name: "QuestionAnswer"
    }
</script>

<style scoped>

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
