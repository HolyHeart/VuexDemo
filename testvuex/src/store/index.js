import Vue from "vue"
import Vuex from "vuex"
import mutations from "./mutations"
import actions from "./actions"
import getters from "./getters"
import moduleA from "./modules/moduleA"



// 1.安装插件
Vue.use(Vuex)

// 2.创建对象
const state = {
  counter: 10,
  message: "我是vuex中的message",
  students: [
    {name: "Holy",age: 25,height: 1.88},
    {name: "James",age: 30,height: 1.78},
    {name: "Durant",age: 28,height: 1.98},
    {name: "Curry",age: 24,height: 1.68}
  ],
  info: {name: "kobe",age: 33,height: 1.98}
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: { //为了防止vuex的单一状态树使得一个store比较臃肿，可以将store进行模块划分
    a: moduleA
  }
})

// 3.导出store对象
export default store