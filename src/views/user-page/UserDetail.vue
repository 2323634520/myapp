<template>
    <div>
      <!-- 面包屑导航 -->
      <div class="breadcrumb-main">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item>用户管理</el-breadcrumb-item>
          <el-breadcrumb-item>用户详情</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
  
      <!-- 返回按钮 -->
      <div class="go-back-main">
        <span class="go-back-main-cursor" @click="handleClickGoBack">
          <i class="el-icon-back"></i>
          <span class="go-back-main-cursor-content">返回</span>
        </span>
      </div>
  
      <!-- 用户详情表单 -->
      <div class="form-main" v-loading="loading" element-loading-text="数据加载中..." element-loading-background="rgba(0, 0, 0, 0.7)">
        <el-form label-position="top" :model="form" :label-width="labelWidth" :disabled="true">
          <el-form-item label="姓名">
            <el-input v-model="form.Name"></el-input>
          </el-form-item>
          <el-form-item label="性别">
            <el-input v-model="form.Gender"></el-input>
          </el-form-item>
          <el-form-item label="电话">
            <el-input v-model="form.Phone"></el-input>
          </el-form-item>
          <el-form-item label="地址">
            <el-input v-model="form.Address"></el-input>
          </el-form-item>
          <el-form-item label="创建人">
            <el-input v-model="form.CreatedBy"></el-input>
          </el-form-item>
          <el-form-item label="创建时间">
            <el-input v-model="form.CreatedTime"></el-input>
          </el-form-item>
          <el-form-item label="最后修改人">
            <el-input v-model="form.LastModifiedBy"></el-input>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  export default {
    name: 'user-view',
    data() {
      return {
        form: {
          Name: '',
          Gender: '',
          Phone: '',
          Address: '',
          CreatedBy: '',
          CreatedTime: '',
          LastModifiedBy: '',
        },
        labelWidth: '100px', // 标签宽度
        loading: false, // 加载状态
      };
    },
    created() {
      this.fetchUserDetail();
    },
    methods: {
      // 返回上一页
      handleClickGoBack() {
        this.$router.go(-1);
      },
      // 获取用户详情
      async fetchUserDetail() {
        this.loading = true;
        const userId = this.$route.query.id; // 从 URL 获取用户 ID
  
        try {
          const response = await axios.get(`http://81.70.155.74:8083/User/GetUserByID`, {
            params: { id: userId },
            headers: { "a": 1 }
          });
  
          if (response.status === 200 && response.data.Success) {
            this.form = response.data.ReturnValue;
          } else {
            this.showError("数据加载失败");
          }
        } catch (error) {
          console.error('error', error);
          this.showError("请求数据失败");
        } finally {
          this.loading = false;
        }
      },
      // 显示错误消息
      showError(message) {
        this.$message.error({
          message,
          duration: 3000,
        });
      }
    }
  }
  </script>
  
  <style scoped lang="less">
  .breadcrumb-main {
    margin-bottom: 5px;
  }
  .go-back-main {
    background: #fff;
    padding: 10px;
    margin-bottom: 5px;
    .go-back-main-cursor {
      cursor: pointer;
      font-size: 20px;
      .el-icon-back {
        margin-right: 10px;
        font-weight: 600;
        color: #653b94;
      }
    }
  }
  .form-main {
    background: #fff;
    padding: 20px;
  }
  </style>
  