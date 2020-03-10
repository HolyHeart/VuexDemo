export default {
  state: {
    name: "zhangsan"
  },
  mutations: {
    updateName(state,payload) {
      state.name = payload
    }
  },
  actions: {
    aupdateName(context) {
      setTimeout(() => {
        context.commit("updateName","wangwu")  //此处的context指的是moduleA，commit提交updateName到moduleA的mutations中
        //可通过context.rootState，context.rootGetters等等访问根模块也就是store的state,getters等
      },1000)    
    }
  },
  getters: {
    fullName(state) {
      return state.name+"1111"
    },
    fullName2(state,getters) {
      return getters.fullName+"2222"
    },
    fullName3(state,getters,rootState) {
      return getters.fullName2+rootState.counter
    }
  }
}