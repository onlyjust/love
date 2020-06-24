<template>
    <div class="top-bar">
        <!--导航栏-->
        <van-nav-bar
                title="个人头像"
                left-arrow
                :fixed=true
                :border=true
                right-text="上传图片"
                @click-left="$router.go(-1)"
                @click-right="onClickRight"
        ></van-nav-bar>
        <div class="photo-box">
            <van-uploader :before-read="beforeRead" :after-read="afterRead">
                <van-image width="90%" fit="cover" radius="5" :src="url" />
            </van-uploader>

        </div>
    </div>
</template>

<script>
    export default {
        name: "ProfilePhoto",
        data(){
            return {
                url: ''
            }
        },
        created(){
            this.url = this.$route.query.url;
        },
        methods:{
            onClickRight() {
                this.$toast('按钮');
            },
            beforeRead(file) {
                console.log(file);
                return true
            },
            afterRead(file) {
                console.log(file);
                this.url = file.content;
                return true;
            }
        }
    }
</script>

<style scoped>

    .photo-box {
        display: flex;
        background-color: #e0e0e0;
        text-align: center;
        height: 90vh;
        justify-content: center;
        align-items: center;
    }

</style>
