<template>
  <div id='parent'>
    <button @click='changeDistance'>commit changeDistance</button>
    <el-row class='row-bg'>父组件</el-row>
    <el-row class='row-bg'>
      <el-input
        v-model='input'
        placeholder='Please input'
        suffix-icon='el-icon-star-on'>
      </el-input>
    </el-row>
    <el-row class='row-bg'></el-row>
    <el-row :gutter='20' class='row-bg'>
      <el-col :span='12'>
        <children1 :msgg=input @say='parentSay' class='children'></children1>
      </el-col>
      <el-col :span='12'>
        <children2 :msg=input @say='parentSay' class='children'></children2>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Child1 from './child1.vue'
import Child2 from './child2.vue'
export default {
  name: 'parent',
  data () {
    return {
      input: 'test',
      msg1: 'hello, child1',
      msg2: 'hello, child2'
    }
  },
  computed: {
    watchTest () {
      return this.$store.state.distance
    }
  },
  watch: {
    watchTest: function (a, b) {
      console.log('$S$ Before: ' + a)
      console.log('$S$ After:  ' + b)
    }
  },
  props: {
    // input: Number
  },
  methods: {
    // 参数就是子组件传递出来的数据
    parentSay (msg) {
      // console.log(msg) // hello, parent
      this.input = msg
    },
    changeDistance () {
      this.$store.commit({
        type: 'changeDistance'
      })
    }
  },
  // 引入子组件
  components: {
    children1: Child1,
    children2: Child2
  }
}
</script>

<style>
#parent {
  font-size: 30px;
  background-color: #2197fb;
}
.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}
.children {
  border-radius: 4px;
  min-height: 70px;
}
.row-bg {
  padding: 10px 0;
}
.el-input {
  width: 230px;
}
</style>
