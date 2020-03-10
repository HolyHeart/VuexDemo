export default {
  addtion(state) {
    state.counter++
  },
  subtion(state) {
    state.counter--
  },
  // addCount(state,count) {
  //   state.counter+=count
  // },
  addCount(state,payload) {
    state.counter+=payload.count
  },
  addStu(state,stu) {
    state.students.push(stu)
  },
  updateInfo(state) {
    state.info.name = "kerry"  //修改state中已经初始化好的info中的属性满足响应式(响应式指的是页面和state中的数据同步)
    // state.info["address"] = "shanghai"  //如果对对象单独进行添加属性操作，则无法实现响应式，但如果和修改属性一起使用，则可以实现响应式
    // Vue.set(state.info,"address","shanghai") //如果对对象或者数组单独进行添加操作可以使用set方法，实现响应式
    // delete state.info.age  //此方式删除对象属性无法实现响应式
    // Vue.delete(state.info,"age")  //此方式删除对象属性可以实现响应式

    // setTimeout(() => {  //进行异步操作时，devtools插件无法捕捉到vuex中的状态信息，
    //   // 其实页面和state中的数据都改掉了。所以不要在mutations中进行异步操作，可以在actions中使用
    //   state.info.name = "kerry"
    // },1000)
  }
}