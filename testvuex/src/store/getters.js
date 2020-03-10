export default {
  somestu(state) {
      return state.students.filter(s => s.age>26)  //找出students中年龄大于26的学生
    },
    somestuLength(state,getters) {  //还可以传入getters参数,方便调用其他方法
      return getters.somestu.length  //求出students中年龄大于26的学生的个数
    },
    anystu(state) {
      // return function(age) {
      //   return state.students.filter(s => s.age>age)  //找出students中年龄大于age的学生
      // }   
      return age => state.students.filter(s => s.age>age)
    }
}