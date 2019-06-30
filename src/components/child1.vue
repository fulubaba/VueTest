<template>
  <div id="child1" @click="say">
    <el-row>子组件1</el-row>
    <el-row>父组件对子组件1说：</el-row>
    <el-row>{{msgg}}</el-row>
  </div>
</template>

<script>
export default {
  // 父组件通过props属性传递进来的数据
  props: {
    msgg: {
      type: String,
      default: () => {
        return ''
      }
    }
  },
  data () {
    return {
      childrenSay: '1, parent'
    }
  },

  methods: {
    // 子组件通过emit方法触发父组件中定义好的函数，从而将子组件中的数据传递给父组件
    say () {
      var m = this.msgg
      m = m.substr(0, m.length - 1)
      this.$emit('say', m)
    }
  }
}
</script>

<style>
#child1 {
  font-size: 20px;
  background-color: #9dcff9;
}
</style>
