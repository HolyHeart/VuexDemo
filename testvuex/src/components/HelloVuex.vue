<template>
<div id="app"> 
    <h2>info对象的内容是否是响应式</h2>
    <h2>HelloVuex组件---{{$store.state.info}}</h2>

    <h2>HelloVuex组件---{{$store.state.counter}}</h2>
    <h2>vuex---{{$store.getters.somestu}}</h2>
    <h2>vuex---{{$store.getters.somestuLength}}</h2>
    <h2>vuex---{{$store.getters.anystu(20)}}</h2>
</div>
</template>
<script>
export default {
name:'HelloVuex'
}
</script>
<style scoped>
</style>