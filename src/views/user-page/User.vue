<template>
    <div class="main">
        <div class="breadcrumb-main">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>用户管理</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="query-main">
            <div class="query-main-search">
                <div class="query-main-search-input">
                  <el-input placeholder="请输入用户姓名" v-model.trim="queryData.name" clearable size="medium"></el-input>
                </div>
                <div class="query-main-search-button">
                  <el-button type="primary" icon="el-icon-search" size="medium" @click="handleClickSearch">搜索</el-button>
                  <el-button icon="el-icon-refresh" size="medium" @click="handleClickReset">重置</el-button>
                </div>
            </div>
            <div class="query-main-button">
              <el-button type="primary" icon="el-icon-view" size="medium" @click="handleClickView">查看</el-button>
              <el-button type="primary" icon="el-icon-edit" size="medium">编辑</el-button>
              <el-button type="primary" icon="el-icon-plus" size="medium">新增</el-button>
              <el-button type="primary" icon="el-icon-delete" size="medium">删除</el-button>
            </div>
        </div>
        <div class="table-main">
          <el-table :data="tableData" height="680" style="width: 100%" border highlight-current-row @current-change="handleGetRowData">
              <el-table-column  fixed type="index" label="序号" width="50" align="center" :index="indexMethod"></el-table-column>
              <el-table-column  prop="Name" label="姓名"></el-table-column>
              <el-table-column  prop="Gender" label="性别"></el-table-column>
              <el-table-column  prop="Phone" label="电话"></el-table-column>
              <el-table-column  prop="Address" label="地址"></el-table-column>
              <el-table-column  prop="CreatedBy" label="创建人"></el-table-column>
              <el-table-column  prop="CreatedTime" label="创建时间"></el-table-column>
              <el-table-column  prop="LastModifiedBy" label="最后修改人"></el-table-column>
          </el-table>
        </div>
        <div class="pagination-main">
          <el-pagination :page-sizes="[10, 20, 30, 40]"  layout="total, sizes, prev, pager, next, jumper" :total="queryData.total"
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
      tableData: [], //表格数据
      queryData:{
        total:20,   //总数
        page:1,   //当前页数
        rows:10,   //每页条数
        name:'',    //搜索框
      },
      rowData:{}
    };
  },
  mounted() {
    this.getAllUsersList();
  },
  methods: {
    //重新编辑序号列
    indexMethod(index){
      return (Number(index) + 1) + (Number(this.queryData.page) - 1)*this.queryData.rows
    },
    //点击任意一行数据获取
    handleGetRowData(data){
      this.rowData = data
    },
    //表格中点击查看
    handleClickView(){
      if(this.rowData.ID){
        this.$router.push({
          path:'/user-view',
          query:{
            id : this.rowData.ID
          }
        })
      }else{
        this.$message({
          message:'请选择一条数据',
          type:'info',
          offset:5
        });
      }
      
    },
    //表格中点击编辑
    handleClickEdit(item){

    },
    //点击搜索
    handleClickSearch(){
      this.getAllUsersList()
    },
    //点击重置
    handleClickReset(){
      this.queryData.name = ''
      this.getAllUsersList()
    },
    //分页器改变每页条数
    handleSizeChange(rows){
      this.queryData.rows = rows
      this.getAllUsersList()
    },
    //分页器改变当前页数
    handleCurrentChange(page){
      this.queryData.page = page
      this.getAllUsersList()
    },
    //请求接口
    getAllUsersList(){
      axios({
        url:  "http://81.70.155.74:8083/User/GetAllUsersList",
        method: "post",
        headers:  {"a":1},
        data: {
          Name: this.queryData.name, 
          Page: this.queryData.page, 
          Rows: this.queryData.rows,
        }
      }).then((response) => {
        if(response.status == 200 && response.data.Success){
          this.tableData = response.data.ReturnValue.rows
          this.queryData.total = response.data.ReturnValue.total
        }
      }).catch((error) => {
        console.log('error',error);
      });
    }
  }
};
</script>

<style scoped lang="less">
.main{
  display: flex;
  flex-direction: column;
}
.breadcrumb-main{
  margin-bottom: 5px;
}
.query-main{
  display: flex;
  justify-content: space-between;
  padding:20px 10px 20px;
  background: #fff;
  margin-bottom: 5px;
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
  padding: 10px;
  background: #fff;
}
.pagination-main{
  text-align: right;
  background: #fff;
  padding-bottom: 10px;
}
</style>