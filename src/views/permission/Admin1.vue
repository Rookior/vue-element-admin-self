<template>
  <div>
    <p>Welcome admin111</p>
    <el-select v-model="value1" placeholder="请选择">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
  

  
    <router-view></router-view>
  </div>
</template>

<script>


export default {
   
  mounted () {

    setInterval(() => {
      //模拟接口开始时重置option
      this.options = [];
      //如果不清楚的话label不会更新
      //this.value1 = ""

      //接口返回更新option
      setTimeout(() => {
        this.options = [{
          value: "选项" + Math.random(),
          label: '黄金糕33' + Math.random(),
        }, {
          value: "选项" + Math.random(),
          label: '双皮奶44' + Math.random(),
        }, {
          value: "选项" + Math.random(),
          label: '蚵仔煎55' + Math.random(),
        }, {
          value: "选项" + Math.random(),
          label: '龙须面66' + Math.random(),
        }, {
          value: "选项" + Math.random(),
          label: '北京烤鸭77' + Math.random(),
        }]
        this.value1 =  this.options[0].value
      }, 200)
    }, 2000)
  },
 
  data () {
    return {
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value1: "选项1",
    }
  },
  methods: {

  },
   components: {
      
  },
}
</script>