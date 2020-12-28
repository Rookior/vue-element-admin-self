<template>
  <el-row>
    <!-- 页面菜单 -->
    <el-col :span="4">
      <menu-item></menu-item>
    </el-col>
    <!-- 页面主体 -->
    <el-col :span="20">
      <router-view></router-view>
    </el-col>
  </el-row>
</template>

<script>
import MenuItem from './MenuItem.vue'
export default {
  components: {
    MenuItem
  },
  data () {
    return {

    }
  },
  computed: {
    routes () {
      return this.$store.getters.routes
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>
