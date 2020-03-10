export default {
  aupdateInfo(context,payload) {
    return new Promise((resolve,reject) => {
      setTimeout(() => {
      context.commit("updateInfo")  //此处的context指的是store对象，commit将updateInfo提交到store的mutations
      console.log(payload)

      resolve("11111")  //异步请求成功后的回调
    },1000)
    })     
  }
}