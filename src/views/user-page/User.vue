<template>
  <div>
    <div class="breadcrumb-main">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div :style="{ background: currentColor }" class="main" v-loading="loading" element-loading-text="数据加载中..."
      element-loading-background="rgba(0, 0, 0, 0.7)">
      <div class="query-main">
        <div class="query-main-search">
          <div class="query-main-search-input">
            <el-input placeholder="请输入用户姓名" v-model.trim="queryData.name" clearable size="medium"></el-input>
          </div>
          <div class="query-main-search-button">
            <el-button type="primary" :style="{ backgroundColor: buttonColor, color: '#fff', border: 'none' }"
              icon="el-icon-search" size="medium" @click="handleClickSearch">搜索</el-button>
            <el-button :style="{ backgroundColor: buttonColor, color: '#fff', border: 'none' }" icon="el-icon-refresh"
              size="medium" @click="handleClickReset">重置</el-button>
          </div>
        </div>
        <div class="query-main-button">
          <el-button :style="{ backgroundColor: buttonColor, color: '#fff', border: 'none' }" type="primary"
            icon="el-icon-view" size="medium" @click="handleClickView">查看</el-button>
          <el-button :style="{ backgroundColor: buttonColor, color: '#fff', border: 'none' }" type="primary"
            icon="el-icon-edit" size="medium" @click="handleClickEdit">编辑</el-button>
          <el-button :style="{ backgroundColor: buttonColor, color: '#fff', border: 'none' }" type="primary"
            icon="el-icon-plus" size="medium">新增</el-button>
          <el-button :style="{ backgroundColor: buttonColor, color: '#fff', border: 'none' }" type="primary"
            icon="el-icon-delete" size="medium">删除</el-button>
        </div>
      </div>
      <div class="devide-main-table">
      </div>
      <div class="table-main">
        <el-table :data="tableData" height="700" style="width: 100%" border highlight-current-row
          @current-change="handleGetRowData">
          <el-table-column fixed type="index" label="序号" width="50" align="center"></el-table-column>
          <el-table-column prop="Code" label="编号"></el-table-column>
          <el-table-column prop="Name" label="姓名"></el-table-column>
          <el-table-column prop="Gender" label="性别"></el-table-column>
          <el-table-column prop="Phone" label="电话"></el-table-column>
          <el-table-column prop="Address" label="地址"></el-table-column>
          <el-table-column prop="CreatedBy" label="创建人"></el-table-column>
          <el-table-column prop="CreatedTime" label="创建时间"></el-table-column>
          <el-table-column prop="LastModifiedBy" label="最后修改人"></el-table-column>
        </el-table>
      </div>
      <div class="pagination-main">
        <el-pagination :page-sizes="[10, 20, 30, 40]" layout="total, sizes, prev, pager, next, jumper"
          :total="queryData.total" @size-change="handleSizeChange"
          @current-change="handleCurrentChange"></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      tableData: [], // 表格数据
      queryData: {
        total: 0,    // 总数
        page: 1,     // 当前页数
        rows: 10,    // 每页条数
        name: '',    // 搜索框
      },
      rowData: {},
      loading: false, // 加载状态
      colorOptions: [
        '#cd77c6', '#3e247a', '#653b94',
        '#00b0a6', '#00619d', '#009688',
        '#ff9800', '#ff5722', '#795548',
      ],
      currentColor: '',
    };
  },
  computed: {
    buttonColor() {
      return this.currentColor; // 按钮颜色跟随色卡主题色变化
    },
  },
  mounted() {
    this.getAllUsersList();
    // 从 localStorage 中读取保存的颜色
    const savedColor = localStorage.getItem('headerColor');
    if (savedColor) {
      this.currentColor = savedColor;
    } else {
      this.currentColor = this.colorOptions[0]; // 设置默认颜色
    }
    this.$root.$on('updateThemeColor', (color) => {
      this.currentColor = color;
      // 可以在这里调用相关方法或重新获取数据等
    });
  },
  methods: {
    // 获取表格数据
    async getAllUsersList() {
      this.loading = true; // 开启加载中状态
      try {
        const response = await axios.post("http://81.70.155.74:8083/User/GetAllUsersList", {
          Name: this.queryData.name,
          Page: this.queryData.page,
          Rows: this.queryData.rows,
        }, {
          headers: { "a": 1 },
        });

        if (response.status === 200 && response.data.Success) {
          this.tableData = response.data.ReturnValue.rows;
          this.queryData.total = response.data.ReturnValue.total;
        } else {
          this.showError("数据加载失败");
        }
      } catch (error) {
        console.error('error', error);
        this.showError("请求数据失败");
      } finally {
        this.loading = false; // 关闭加载中状态
      }
    },
    // 显示错误消息
    showError(message) {
      this.$message.error({
        message,
        duration: 3000,
      });
    },
    handleGetRowData(data) {
      this.rowData = data;
    },
    handleClickView() {
      if (this.rowData.ID) {
        this.$router.push({
          path: '/user-view',
          query: { id: this.rowData.ID },
        });
      } else {
        this.$message({
          message: '请选择一条数据',
          type: 'info',
          offset: 5,
        });
      }
    },
    handleClickEdit() {
      if (this.rowData.ID) {
        this.$router.push({
          path: '/user-edit',
          query: { id: this.rowData.ID },
        });
      } else {
        this.$message({
          message: '请选择一条数据',
          type: 'info',
          offset: 5,
        });
      }
    },
    handleClickSearch() {
      this.queryData.page = 1; // 重置到第一页
      this.getAllUsersList();
    },
    handleClickReset() {
      this.queryData.name = '';
      this.handleClickSearch();
    },
    handleSizeChange(rows) {
      this.queryData.rows = rows;
      this.getAllUsersList();
    },
    handleCurrentChange(page) {
      this.queryData.page = page;
      this.getAllUsersList();
    },
  },
};
</script>

<style scoped lang="less">
.main {
  display: flex;
  flex-direction: column;
}
.breadcrumb-main {
  margin-bottom: 5px;
}
.query-main {
  display: flex;
  justify-content: space-between;
  padding: 20px 10px;
  background: #fff; /* 保持背景色为白色 */
}

.query-main-search {
  display: flex;
  justify-content: space-between;

  .query-main-search-input {
    width: 400px;
  }

  .query-main-search-button {
    margin-left: 30px;
  }
}
.table-main {
  height: 100%;
  padding: 10px;
  background: #fff; /* 表格区域背景色也保持白色 */
}

.devide-main-table {
  height: 5px;
  background: #E9EEF3; /* 分割线区域背景色 */
}

.pagination-main {
  text-align: right;
  background: #fff; /* 分页区域背景色保持白色 */
  padding-bottom: 10px;
}
</style>
