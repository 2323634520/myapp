<template>
    <div class="header-container">
      <div class="l-content">
        <span class="icon">
          <i class="el-icon-pear"></i>
        </span>
        <span class="text">大冻梨123</span>
      </div>
      <div class="r-content">
        <el-dropdown>
          <span class="el-dropdown-link">
            <img class="user-head" src="https://img1.baidu.com/it/u=4288672918,3634316930&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1693414800&t=6b1c863086ac70b499a052878e6ddf41" alt="">
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item disabled>个人中心</el-dropdown-item>
            <el-dropdown-item divided>退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </template>
  
  <style lang="less" scoped>
  .header-container {
    background-color: #fff;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
  }
  
  .header-container .text {
    color: #00aeec;
    font-size: 24px;
    font-weight: 600;
  }
  
  .header-container .icon {
    color: #00aeec;
    font-size: 24px;
    margin-left: 24px;
    margin-right: 8px;
  }
  
  .header-container .r-content .user-head {
    width: 46px;
    height: 46px;
    border-radius: 50%;
  }
  </style>
  
  <script>
  export default {
    data() {
      return {};
    },
  };
  </script>
  