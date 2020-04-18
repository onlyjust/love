<template>
    <div id="love-reply">
        <button @click="getFocus">获取焦点</button>
        <vue-replay
                v-model="value"
                :focus-type.sync="show"
                @send="send()" />
    </div>
</template>

<script>
    import VueReport from "./sendReplay";
    export default {
        name: "LoveReply",
        components: {VueReport},
        data() {
            return {
                value: '',
                show: false
            }
        },
        watch: {
            value() {
                console.log(this.value)
            }
        },
        methods: {
            getFocus() {
                this.show = true
            },
            send() {
                console.log(this.value)
                this.show = false
            }
        }
    }
</script>

<style scoped>

</style>
