<template>
  <div id="xwtg">
    <el-image
      style="width: 100%; height: 260px"
      :src="require('../../assets/images/xwtg.jpg')"
      fit="fill"></el-image>
    <div class="menu_container">
      <div style="width: 1200px; margin: 0 auto;">
        <el-menu :default-active="$route.path" mode="horizontal" router
                 active-text-color="#236BB9">
          <el-menu-item index="/eduNews">教学新闻</el-menu-item>
          <el-menu-item index="/notice">通知公告</el-menu-item>
          <el-menu-item index="/events">活动日历</el-menu-item>
        </el-menu>
      </div>
    </div>
    <div style="background-color: #f5f5f5;">
      <div style="width: 1200px; margin: 0 auto;">
        <router-view>
        </router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewsAnn',
  data () {
    return {
      activeName: 'first'
    }
  },
  created () {
    console.log(this.$route)
  },
  methods: {
    handleClick (tab, event) {
      console.log('hello')
    }
  }
}
</script>

<style lang="less">
  #xwtg{
    .el-menu.el-menu--horizontal{
      border: none;
    }
    .el-menu-item{
      min-width: 80px;
      margin-right: 20px;
    }
    .el-menu--horizontal>.el-menu-item{
      height: 40px;
      line-height: 30px;
    }
    .menu_container{
      padding-top: 10px;
      width: 100%;
      box-shadow: 0 5px 10px -5px #bebebe;
      background-color: #fff;
      position: relative
    }
  }
</style>
