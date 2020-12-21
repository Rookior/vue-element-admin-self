<template>
<div>
    <p>Welcome home</p>
    <p><span class="font-qua">2020-12-21</span><span class="font-DIN">00:00:00</span></p>
    <button @click="test">测试token</button>
</div>
</template>

<script>

  export default {
      mounted(){
         
      },
      methods:{
          test(){
             
                this.$store.dispatch('test',{}).then(() => {
                
                }).catch(err => {
                    console.log(err); //登录失败提示错误
                });
          }

           
      },    
      components: {
      
    }
  }
</script>