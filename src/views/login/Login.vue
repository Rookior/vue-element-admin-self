<template>
  <div class="login_Wrap">
    <h2 class="tc">系统登录</h2>
    <el-input v-model="userName" placeholder="admin"></el-input>
    <el-input v-model="password" placeholder="123456"></el-input>
    <el-button type="primary" @click="login">登录</el-button>
  </div>
</template>

<script>

export default {
  data () {
    return {
      userName: 'admin',
      password: '123456'
    }
  },
  methods: {

    login () {
      this.$store.dispatch('LoginByUsername', { userName: this.userName, password: this.password }).then((res) => {
        this.$router.push(this.$route.query.redirect || '/'); //登录成功之后回到重定向前的页面 或者 首页
        //this.$router.push({ path: '/' }); 
      }).catch(err => {
        console.log(err); //登录失败提示错误
      });

    }
  },
  components: {

  }
}
</script>
<style lang="scss" scoped>
.login_Wrap {
  width: 60%;
  margin: 0 auto;
  padding-top: 5%;
  .el-input {
    margin: 20px 0;
  }
}
</style>