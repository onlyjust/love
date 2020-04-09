<template>
    <div class="muli-tags" @click='focus'>
        <button class='btn' v-for='(tag, index) in tags' :key='index' @click='delTag(index)'>{{tag}} <span>x</span></button>
        <input type="text"
               ref='input'
               @keyup.enter="add"
               @keydown.delete="del"
               @keydown.188='split'
               v-model='current'>
    </div>
</template>

<script>
    export default {
        name: "TagsInput",
        props: {
            value: Array,
            required: true,
            default: () => []
        },
        methods: {
            focus () {
                this.$refs.input.focus()
            },
            split (e) {
                e.preventDefault()
                this.add(e)
            },
            add (e) {
                const val = e.target.value
                if (!val) return
                if (this.tags.indexOf(val) > -1) return
                this.tags.push(val)
                this.$emit('input', this.tags)
                this.current = ''
            },
            del (e) {
                if (!e.target.value.length) {
                    this.tags.pop()
                    this.$emit('input', this.tags)
                }
            },
            delTag (index) {
                this.tags.splice(index, 1)
                this.$emit('input', this.tags)
            }
        },
        computed: {
            tags () {
                return this.value.slice();
            }
        },
        data () {
            return {
                current: ''
            }
        }
    }
</script>

<style lang="less" scoped>

    .muli-tags{
        /*padding: 5px 10px;*/
        display: block;
        /*border: 1px solid #ccc;*/
        input{
            background: transparent;
        }
        .btn{
            /*margin: 0 5px 3px 0;*/
            /*padding: 4px 5px;*/
            /*background: #fff;*/
            /*border: 1px solid #eee;*/
            /*box-shadow:  0 0 4px;*/
            /*margin: 0.5rem 0.5rem;
            padding: 0.25rem 0.6rem;
            border-radius: 0.25rem;*/
            background-color: #7232dd;
            color: #ffffff;
            font-size: 1.4rem;
            padding: 0.4rem 0.8rem;
            border-radius: 0.5rem;
            margin: 0.3rem 0.5rem;


        }
    }
</style>
