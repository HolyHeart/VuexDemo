<template>
  <div id="app">
    <h2>modules中的内容</h2>
    <h2>APP---{{$store.state.a.name}}</h2>
    <h2>APP---{{$store.getters.fullName}}</h2>
    <h2>APP---{{$store.getters.fullName2}}</h2>
    <h2>APP---{{$store.getters.fullName3}}</h2>
    <button @click="updateName">修改名字</button>
    <button @click="asyncupdateName">异步修改名字</button>

    <h2>info对象的内容是否是响应式</h2>
    <h2>APP---{{$store.state.info}}</h2>
    <button @click="updateInfo">修改信息</button>

    <h2>vuex---{{$store.state.message}}</h2>
    <h2>APP---{{message}}</h2>
    <h2>vuex---{{$store.state.counter}}</h2>
    <h2>APP---{{counter}}</h2>

    <button @click="addtion">+</button>
    <button @click="subtion">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addStu">添加学生</button>

    <h2>vuex---{{$store.getters.somestu}}</h2>
    <h2>vuex---{{$store.getters.somestuLength}}</h2>
    <h2>vuex---{{$store.getters.anystu(20)}}</h2>

    <hello-vuex></hello-vuex>
    
  </div>
</template>

<script>
import HelloVuex from "./components/HelloVuex";
export default {
  name: 'App',
  components: {
    HelloVuex
  },
  data() {
    return {
      message: "我是APP组件",
      counter: 0
    }
  },
  methods: {
    addtion() {
      this.$store.commit("addtion")
    },
    subtion() {
      this.$store.commit("subtion")
    },
    addCount(count) {
      //payload:负载
      // 1.普通的提交封装
      // this.$store.commit("addCount",count)
      // 2.特殊的提交封装
      this.$store.commit({    //payload就是commit({})中的{}
        type: "addCount",
        count
      })
    },
    addStu() {
      const stu = {
        name: "alen",age: 33,height: 1.68
      }
      this.$store.commit("addStu",stu)
    },
    updateInfo() {
      // this.$store.commit("updateInfo")
      this.$store
      .dispatch("aupdateInfo","我是payload")  //这里其实是执行了aupdateInfo，然后返回Promise
      .then(res => {
        console.log("成功回调")
        console.log(res)
      })
    },
    updateName() {
      this.$store.commit("updateName","lisi")
    },
    asyncupdateName() {
      this.$store.dispatch("aupdateName")
    } 
  }
}
</script>

<style>

</style>
