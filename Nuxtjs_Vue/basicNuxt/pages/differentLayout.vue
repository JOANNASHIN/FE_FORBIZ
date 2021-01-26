<template>
    <div>
        다른레이아웃 적용해보기

        <button @click="$store.commit('increment')">{{ $store.state.counter}}</button>
        <button @click="onBtnClick">{{ counter }}</button>
        
    </div>
</template>
<script>
    export default {
        layout: "blog",
        computed: {
            counter () {
                return this.$store.state.counter
            }
        },

        methods: {
            onBtnClick() {
                this.$store.commit('increment');
            }
        }
    }
</script>

<style>
 
</style>