<template>
  <div>
    <div style="margin-bottom: 50px"></div>
    <el-row :gutter="20">
      <el-col :span="8"
        ><div class="grid-content bg-purple">
          <div>
            <el-card class="box-card">
              <div class="l-admin">
                <div
                  class="l-admin-content"
                  style="
                    border-bottom: solid 1px rgb(230, 230, 230);
                    padding-bottom: 20px;
                  "
                >
                  <div>
                    <el-avatar
                      size="large"
                      src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                    ></el-avatar>
                  </div>
                  <div>
                    <div>Admin</div>
                    <div>系统管理员</div>
                  </div>
                </div>
                <div class="l-admin-info" style="margin-top: 100px">
                  <div style="display: flex; flex-direction: row">
                    <div style="margin-right: 30px">上次登录时间:</div>
                    <div>2021-7-19</div>
                  </div>
                  <div
                    style="display: flex; flex-direction: row; margin-top: 10px"
                  >
                    <div style="margin-right: 30px">上次登录地点:</div>
                    <div>武汉</div>
                  </div>
                </div>
              </div>
            </el-card>
          </div>
          <div style="margin-top: 40px">
            <el-card class="box-card" style="height: 300px; overflow: auto">
              <div style="height: 300px">
                <el-table :data="tableData" border size="mini">
                  <el-table-column prop="date" label="日期"> </el-table-column>
                  <el-table-column prop="name" label="姓名"> </el-table-column>
                  <el-table-column prop="address" label="地址">
                  </el-table-column>
                  <el-table-column prop="id" label="id"> </el-table-column>
                  <el-table-column prop="age" label="年龄"> </el-table-column>
                  <el-table-column prop="isDelete" label="是否删除">
                  </el-table-column>
                </el-table>
              </div>
            </el-card>
          </div></div
      ></el-col>
      <el-col :span="16"
        ><div style="height: 340px">
          <div
            class="card"
            style="display: flex; flex-direction: row; height: 35%;px;"
          >
            <div style="width: 32%; height: 70%">
              <el-card style="height: 100%; display: flex; flex-direction: row;">
                <div><span class="el-icon-folder-checked"></span></div>
                <div style="display: flex; flex-direction: column">
                  <span>￥1234</span> <span>今日提交订单</span>
                </div>
              </el-card>
            </div>
            <div style="width: 32%; height: 70%">
              <el-card style="height: 100%">
                <div style="display: flex; flex-direction: row">
                  <div style="margin-right: 20px">
                    <span class="el-icon-folder-checked"></span>
                  </div>
                  <div style="display: flex; flex-direction: column">
                    <span>￥1234</span> <span>今日提交订单</span>
                  </div>
                </div>
              </el-card>
            </div>
            <div style="width: 32%; height: 70%">
              <el-card style="height: 100%">
                <div style="display: flex; flex-direction: row">
                  <div style="margin-right: 20px">
                    <span class="el-icon-folder-checked"></span>
                  </div>
                  <div style="display: flex; flex-direction: column">
                    <span>￥1234</span> <span>今日提交订单</span>
                  </div>
                </div>
              </el-card>
            </div>
          </div>
          <div
            class="card"
            style="display: flex; flex-direction: row; height: 50%"
          >
            <div style="width: 32%; height: 50%">
              <el-card style="height: 100%">
                <div style="display: flex; flex-direction: row">
                  <div style="margin-right: 20px">
                    <span class="el-icon-folder-checked"></span>
                  </div>
                  <div style="display: flex; flex-direction: column">
                    <span>￥1234</span> <span>今日提交订单</span>
                  </div>
                </div>
              </el-card>
            </div>
            <div style="width: 32%; height: 50%">
              <el-card style="height: 100%">
                <div style="display: flex; flex-direction: row">
                  <div style="margin-right: 20px">
                    <span class="el-icon-folder-checked"></span>
                  </div>
                  <div style="display: flex; flex-direction: column">
                    <span>￥1234</span> <span>今日提交订单</span>
                  </div>
                </div>
              </el-card>
            </div>
            <div style="width: 32%; height: 50%">
              <el-card style="height: 100%">
                <div style="display: flex; flex-direction: row">
                  <div style="margin-right: 20px">
                    <span class="el-icon-folder-checked"></span>
                  </div>
                  <div style="display: flex; flex-direction: column">
                    <span>￥1234</span> <span>今日提交订单</span>
                  </div>
                </div>
              </el-card>
            </div>
          </div>
        </div></el-col
      >
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          id: 1,
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          age: 18,
          isDelete: 0,
        },
        {
          id: 2,
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
          age: 18,
          isDelete: 0,
        },
        {
          id: 7,
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
          age: 18,
          isDelete: 0,
        },
        {
          id: 5,
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
          age: 18,
          isDelete: 0,
        },
        {
          id: 4,
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
          age: 18,
          isDelete: 0,
        },
        {
          id: 3,
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
          age: 18,
          isDelete: 0,
        },
        {
          id: 6,
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
          age: 18,
          isDelete: 0,
        },
      ],
    };
  },
};
</script>

<style scoped>
.l-admin {
  display: flex;
  flex-direction: column;
}
.l-admin-content {
  display: flex;
  flex-direction: row;
}
.l-admin-info {
}
.card div {
  margin-left: 20px;
}
</style>