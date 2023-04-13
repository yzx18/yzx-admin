<template>
  <div>
    <div class="header">
      <div class="l-content">
        <el-button
          icon="el-icon-menu"
          size="small"
          @click="changeMenu"

        ></el-button>
        <span class="l-title">首页</span>
      </div>

      <div class="l-avatar">
        <el-dropdown :hide-on-click="false">
          <span class="el-dropdown-link">
            <el-avatar
              src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
            ></el-avatar>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item>退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    changeMenu() {
      console.log(this.$store)
      this.$store.commit('tab/changeCollaps')
    },
  },
};
</script>

<style scoped lang="less">
.header {
  height: 60px;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .l-content {
    padding-left: 20px;
    .l-title {
      padding-left: 10px;
      color: aliceblue;
    }
  }
}

.l-avatar {
    margin-right: 20px;
  .el-dropdown-link {
    cursor: pointer;
    color: #409eff;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
}
</style>