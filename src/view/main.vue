<template>
  <div>
    <el-container>
      <el-aside :style="{'width':(checkisCollapse==true?'width:200px':'width:0px')}"  >
        <Asider></Asider>
      </el-aside>
      <el-container>
        <el-header style="padding: 0"
          ><Commen_header></Commen_header
        ></el-header>
        <el-main><router-view></router-view></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Asider from "../components/CommonAsider.vue";
import Commen_header from "../components/CommonHeader.vue";
export default {
  data() {
    return {};
  },
  components: {
    Asider,
    Commen_header,
  },
  computed: {
    checkisCollapse() {
      return this.$store.state.tab.isCollapse;
    },
  },
  mounted() {},
  methods: {},
};
</script>

<style scoped>
.realCollapse {
  width: 200px;
}
.fakeCollapse {
  width:0px;
}
</style>