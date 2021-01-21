<template>
  <el-row class="tac">
        <el-col :span="24">
          <el-menu
            :default-active="$route.path"
            class="el-menu-vertical-demo"
            router
            @open="handleOpen"
            @close="handleClose"
          >
            <div :key="index" v-for="(item, index) in routes">
              <!-- 多个子节点 -->
              <el-submenu
                :index="`${item.path}`"
                v-if="item.children && item.children.length > 1"
              >
                <template slot="title">
                  <span>{{ item.title }}</span>
                </template>

                <el-menu-item
                  :index="`${child.path}`"
                  :key="childIndex"
                  v-for="(child, childIndex) in item.children"
                  >{{ child.title }}</el-menu-item
                >
              </el-submenu>
              <!-- 只有一个子节点 -->
              <el-menu-item :index="`${item.redirect}`" v-else>
                <span slot="title">{{ item.title }}</span>
              </el-menu-item>
            </div>
          </el-menu>
        </el-col>
      </el-row>
</template>

<script>

export default {
  name: 'MenuItem',
  props: {
    routes: {
      type: Array,
      required: true
    }
  },
  // computed: {
  //   routes () {
  //     return this.$store.getters.routes
  //   }
  // },
  methods: {
    handleOpen (key, keyPath) {
      this.$emit('handleOpen',[key,keyPath]);
    },
    handleClose (key, keyPath) {
      this.$emit('handleClose',[key,keyPath]);
    }
  }
}
</script>
