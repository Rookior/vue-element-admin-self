<template>
  <div>
    <p>Welcome {{msg}}</p>
    <p>{{detailId}}</p>
    <el-button @click="back" type="primary">返回</el-button>
   
  </div>
</template>

<script>


export default {
   
    created() {                              
            
            this.detailId =  this.$route.query.detailId;
                 
        },
  mounted () {

    
  },
 
  data () {
    return {
        id: null,
        msg:'admin detail'
    }
  },
//  beforeRouteLeave(to, from, next){ // 列表页面跳转到 详情页时，设置需要缓存
//     if(to.name=='admin2'){
//         to.meta.keepAlive = true  
//       }else {
//         to.meta.keepAlive = false
//         // this.$destroy()
//         }
//         console.log("to",to)
//            console.log("from",from)
//     next()
//   },
  methods: {
      back:function(){
        this.$router.push({
            path:'/admin/admin2',
            query:{
                "id": 'back'
            }
        })
      }
  },
   components: {
      
  },
}
</script>