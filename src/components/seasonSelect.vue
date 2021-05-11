<template>
  <div>
    <mark
      style="
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, 0);
        z-index: 999;
      "
      v-show="showSeason"
      @click.stop="showSeason = false"
    ></mark>
    <el-input
      placeholder="请选择季度"
      v-model="showValue"
      style="width: 138px"
      @focus="showSeason = true"
    >
      <i slot="prefix" class="el-input__icon el-icon-date"></i>
    </el-input>
    <el-card
      class="box-card"
      style="
        width: 322px;
        padding: 0 3px 20px;
        margin-top: 10px;
        position: fixed;
        z-index: 9999;
      "
      v-show="showSeason"
    >
      <div
        slot="header"
        class="clearfix"
        style="text-align: center; padding: 0"
      >
        <button
          type="button"
          aria-label="前一年"
          class="el-picker-panel__icon-btn el-date-picker__prev-btn el-icon-d-arrow-left"
          @click="prev"
        ></button>
        <span role="button" class="el-date-picker__header-label"
          >{{ year }}年</span
        >
        <button
          type="button"
          aria-label="后一年"
          @click="next"
          class="el-picker-panel__icon-btn el-date-picker__next-btn el-icon-d-arrow-right"
        ></button>
      </div>
      <div class="select-item-wrap" style="text-align: center">
        <el-button
          type="text"
          size="medium"
          class="select-item" v-bind:class="{ current: season == '1' }"       
          @click="selectSeason(1)"
          >第一季度</el-button
        >
        <el-button
          type="text"
          size="medium"
          class="select-item"       
          @click="selectSeason(2)" v-bind:class="{ current: season == '2' }"   
          >第二季度</el-button
        >
      </div>
      <div class="select-item-wrap" style="text-align: center">
        <el-button
          type="text"
          size="medium"
          class="select-item"         
          @click="selectSeason(3)" v-bind:class="{ current: season == '3' }"   
          >第三季度</el-button
        >
        <el-button
          type="text"
          size="medium"
          class="select-item"        
          @click="selectSeason(4)" v-bind:class="{ current: season == '4' }"   
          >第四季度</el-button
        >
      </div>  
    </el-card>
  </div>
</template>
<script>
/**
 * @file:  View 组件 季节选择控件
 * @author: v_zhuchun
 * @date: 2019-05-23
 * @description: UI组件  可选择季节
 * @api: valueArr : 季度value defalut['01-03', '04-06', '07-09', '10-12'] 默认值待设置
 */
export default {
  name: 'season-select',
  props: {
   
  },
  data () {
    return {
      showSeason: false,  //是否显示季选择器
      season: '',         //选择器值
      year: new Date().getFullYear(),  //选择器年
      showValue: ''                    //选择器显示值
    }
  },
  created () {
   
  },
  watch: {
      
  },
  methods: {
    prev () {
      this.year = this.year * 1 - 1
    },
    next () {
      this.year = this.year * 1 + 1
    },
    selectSeason (i) {
      this.season = i 
      this.showSeason = false
      this.showValue = `${this.year}年${this.season}季度`
      this.$emit('season-select',this.showValue)
    }
  }
}
</script>

<style scoped>
.el-card{
    background: #203248;
    color: #ddd;
    border-color: #6286a8;
}
.el-picker-panel__icon-btn{
    color: #ccc;
    font-size: 12px;
}
.el-date-picker__header-label{
    color: #ddd;
    font-size: 16px;
    font-weight: 500;
    padding: 0 5px;
    line-height: 22px;
    text-align: center;
    cursor: pointer;
}
.el-card.box-card ::v-deep .el-card__header {
    margin: 12px 12px 0;
    padding: 0 0 12px;
    border-bottom-color: #6286a8;
}
.select-item-wrap{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.select-item{
    width: 40%;
    color: #ddd;
    font-size: 12px;
}
.select-item.current{
    color: #409EFF;
}

</style>
