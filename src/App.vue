<template>
   <div id="app">    
       <router-view></router-view>
   </div>
</template>

<script>
export default {
   name: 'app',
}
</script>

<style lang="scss">
   @import 'assets/css/reset';
   #app{
       font-size: 15px;
   }
</style>