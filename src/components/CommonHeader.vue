<template>
  <div class="header-main" :class="{'header-main-bg':changeColor}">
    <div class="header-main-left">
      <i class="el-icon-pear header-main-left-icon"></i>
      <span class="header-main-left-name">大冻梨</span>
    </div>
    <div class="header-main-right" >
      <div class="header-main-right-change" @click="changeColor = !changeColor"></div>
      <img class="header-main-right-img" src="https://img1.baidu.com/it/u=4288672918,3634316930&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1693414800&t=6b1c863086ac70b499a052878e6ddf41" alt="">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      changeColor:false,
    };
  },
  methods:{
    handleClickChange(){
    }
  }
};
</script>
<style lang="less" scoped>
.header-main{
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background: linear-gradient(to right, #cd77c6 0% ,#3e247a 70% ,#653b94 100% );
  .header-main-left{
      color: #fff;
      font-size: 30px;
      font-weight: 600;
      .header-main-left-name{
        
      }
  }
  .header-main-right{
    display: flex;
    align-items: center;
    .header-main-right-change{
        width: 20px;
        height: 20px;
        background: #fff;
        border-radius: 50%;
    }
    .header-main-right-img{
      width: 40px;
      border-radius: 50%;
    }
  }
}
.header-main-bg{
  background: linear-gradient(to right, #00b0a6 0% ,#00619d 70% ,#00619d 100% );
}
</style>