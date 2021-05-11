<template>
  <div>
    <p>Welcome admin222</p>
      <input v-model="aa" />
      <el-button type="primary"  @click="()=>{this.aa=Math.random()}" onclick="alert('修改aa')">修改</el-button>  

       <el-button @click="toDetail" type="primary">跳转详情</el-button> 
        
        <season-select v-on:season-select='seasonSelect'></season-select>
       
    <router-view></router-view>
  </div>
</template>

<script>
// 如果不指定后缀，则默认是那个文件夹下的index.vue
   import SeasonSelect from "@/components/seasonSelect";
export default {
  components: {
      SeasonSelect
  },
  mounted () {

  },
  created:function(){
    
  },
  activated:function(){
    if(this.$route.query.id == 'back'){
      
    }else{
      this.aa = '11'
    }
    
  },
  name:'Admin2',
  data(){
    return{
      aa:'11'
    }
  },
  // beforeRouteLeave(to, from, next){ // 列表页面跳转到 详情页时，设置需要缓存
  //   if(to.name=='admindetail'){
  //       to.meta.keepAlive = true  
  //     }else {
  //       to.meta.keepAlive = false
  //       // this.$destroy()
  //       }
  //       console.log("to",to)
  //          console.log("from",from)
  //   next()
  // },
  methods: {
    toDetail:function(){
         this.$router.push({
            path:'/admin/admindetail',
            query:{
                "detailId": 'detailId111'
            }
        })
    },
    seasonSelect:function(data){
      console.log(111,data)
    }
  }
  
  
}
</script>