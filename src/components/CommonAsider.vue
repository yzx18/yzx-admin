<template>
  <div>
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="checkisCollapse"
      background-color="#0a0a0a"
      text-color="#fff"
      active-text-color="yellow"
      style="border-right: 0px;"
    >
      <h3>{{ checkisCollapse?"后台":"通用后台管理系统" }}</h3>
      <el-menu-item
        v-for="item in noChildren"
        :key="item.name"
        :index="item.name"
        @click="toComponet(item)"
      >
        <i :class="`el-icon-${item.icon}`"></i>
        <span slot="title">{{ item.label }}</span>
      </el-menu-item>
      <!-- 如果有多个就用el-submenu index是唯一标识-->
      <el-submenu
        v-for="item in haveChildren"
        :key="item.label"
        :index="item.label"
      >
        <template slot="title">
          <i :class="`el-icon-${item.icon}`"></i>
          <span slot="title">{{ item.label }}</span>
        </template>
        <el-menu-item-group
          v-for="subItem in item.children"
          :key="subItem.name"
        >
          <el-menu-item :index="subItem.name" @click="toComponet(subItem)">{{
            subItem.label
          }}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isCollapse: false,
      menuData: [
        {
          path: "/",
          name: "home",
          label: "首页",
          icon: "s-home",
          url: "/Home/Home",
        },
        {
          path: "/mall",
          name: "mall",
          label: "商品管理",
          icon: "goods",
          url: "/MallManage/MallManage",
        },
        {
          path: "/user",
          name: "user",
          label: "用户管理",
          icon: "user",
          url: "/UserManage/UserManage",
        },
        {
          label: "其他",
          icon: "location",
          children: [
            {
              path: "/page1",
              name: "page1",
              label: "页面1",
              icon: "setting",
              url: "/Other/PageOne",
            },
            {
              path: "/page2",
              name: "page2",
              label: "页面2",
              icon: "setting",
              url: "/Other/PageTwo",
            },
          ],
        },
      ],
    };
  },
  computed: {
    haveChildren() {
      return this.menuData.filter((item) => item.children);
    },
    noChildren() {
      console.log("我被调用了");
      console.log(this.menuData.filter((item) => !item.children));
      return this.menuData.filter((item) => !item.children);
    },
    checkisCollapse(){
     return this.$store.state.tab.isCollapse;
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },

    toComponet(item) {
      if (this.$route.path != item.url) {
        this.$router.push({
          path: item.url,
        });
      }
    },
  },
};
</script>

<style scoped lang="less">
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu {
  height: 100vh;
  h3 {
    color: #fff;
    background-color: black;
    text-align: center;
    font-size: 15px;
  }
}
</style>