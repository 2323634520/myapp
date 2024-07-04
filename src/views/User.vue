<template>
    <div>
        <div class="query-main">
            <div class="query-main-search">
                <div class="query-main-search-input">
                  <el-input placeholder="请输入用户姓名" v-model="querySearch" clearable size="medium"></el-input>
                </div>
                <div class="query-main-search-button">
                  <el-button type="primary" icon="el-icon-search" size="medium">搜索</el-button>
                  <el-button icon="el-icon-refresh" size="medium">重置</el-button>
                </div>
            </div>
            <div class="query-main-button">
              <el-button type="primary" icon="el-icon-view" size="medium">查看</el-button>
              <el-button type="primary" icon="el-icon-edit" size="medium">编辑</el-button>
              <el-button type="primary" icon="el-icon-plus" size="medium">新增</el-button>
              <el-button type="primary" icon="el-icon-delete" size="medium">删除</el-button>
            </div>
        </div>
        <div class="table-main">
          <el-table :data="tableData" height="700" style="width: 100%">
              <el-table-column fixed prop="Name" label="姓名"></el-table-column>
              <el-table-column  prop="Gender" label="性别"></el-table-column>
              <el-table-column  prop="Phone" label="电话"></el-table-column>
              <el-table-column  prop="Address" label="地址"></el-table-column>
              <el-table-column  prop="CreatedBy" label="创建人"></el-table-column>
              <el-table-column  prop="CreatedTime" label="创建时间"></el-table-column>
              <el-table-column  prop="LastModifiedBy" label="最后修改人"></el-table-column>
              <el-table-column fixed="right" prop="LastModifiedBy" label="操作">
                <template slot-scope="scope">
                  <el-button @click="handleClickView(scope.row)" type="text" size="small">查看</el-button>
                  <el-button @click="handleClickEdit(scope.row)" type="text" size="small">编辑</el-button>
                </template>
              </el-table-column>
          </el-table>
        </div>
        <div class="pagination-main">
          <el-pagination :current-page="currentPage4" :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400"
            @size-change="handleSizeChange" @current-change="handleCurrentChange">
          </el-pagination>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      querySearch:'', //搜索
      tableData: [
        {
          Name: '王小虎',
          Gender: '男',
          Phone: '15946209174',
          Address: '青岛',
          CreatedBy: '王瀚章',
          CreatedTime: '2024.04.04 14:14:14',
          LastModifiedBy: '王瀚章',
        },
        {
          Name: '1',
          Gender: '女',
          Phone: '110',
          Address: '青岛',
          CreatedBy: '王瀚章1',
          CreatedTime: '2024.04.04 14:14:13',
          LastModifiedBy: '王瀚章1',
        },
        {
          Name: '1',
          Gender: '女',
          Phone: '110',
          Address: '青岛',
          CreatedBy: '王瀚章1',
          CreatedTime: '2024.04.04 14:14:13',
          LastModifiedBy: '王瀚章1',
        },
      ], //表格数据
    };
  },
  mounted() {

  },
  methods: {
    //表格中点击查看
    handleClickView(item){

    },
    //表格中点击编辑
    handleClickEdit(item){

    },
    //分页器
    handleSizeChange(){

    },
    //分页器
    handleCurrentChange(){

    }
  }
};
</script>

<style scoped lang="less">
.query-main{
  display: flex;
  justify-content: space-between;
  .query-main-search{
    display: flex;
    justify-content: space-between;
    .query-main-search-input{
      width: 400px;
    }
    .query-main-search-button{
      margin-left: 30px;
    }
  }
}
.table-main{
  height: 100%;
}
</style>