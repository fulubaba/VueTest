<template>
  <div id="child2" @click="say">
    <el-row>子组件2</el-row>
    <el-row>父组件对子组件2说：</el-row>
    <el-row>{{msg}}</el-row>
  </div>
</template>

<script>
export default {
  // 父组件通过props属性传递进来的数据
  props: {
    msg: {
      type: String,
      default: () => {
        return ''
      }
    }
  },
  data () {
    return {
      childrenSay: '2, parent'
    }
  },

  methods: {
    // 子组件通过emit方法触发父组件中定义好的函数，从而将子组件中的数据传递给父组件
    say () {
      this.$emit('say', this.childrenSay)
    }
  }
}
</script>

<style>
#child2 {
  font-size: 20px;
  background-color: #5fb3fa;
}
</style>
