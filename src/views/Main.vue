<template>
  <div class="main">
    <el-container>
      <el-header>
        <common-header/>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <common-aside />
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import router from '@/router';
import CommonAside from '../components/CommonAside.vue';
import CommonHeader from '../components/CommonHeader.vue';
export default {
  data() {
    return {};
  },
  components: {
    router,
    CommonAside,
    CommonHeader
  }
}

</script>

<style scoped>
.el-header{
  padding: 0;
}
.el-aside {
  background-color: #D3DCE6;
  color: #fff;
}
.el-main {
  background-color: #E9EEF3;
  color: #333;
  padding: 10px;
}
.main >>>.el-container{
  height: 100%;
}
</style>