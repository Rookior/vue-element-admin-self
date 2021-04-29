<template>
  <div>
    <p>Welcome admin222</p>
      <input v-model="aa" />
      <el-button type="primary"  @click="()=>{this.aa=Math.random()}" onclick="alert('修改aa')">修改</el-button>    
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  mounted () {

  },
  name:'Admin2',
  data(){
    return{
      aa:'11'
    }
  },
  methods: {

  },
  components: {

  }
}
</script>