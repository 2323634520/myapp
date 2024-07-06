<template>
  <div :style="{ background: currentColor }" class="header-main">
    <div class="header-main-left">
      <i class="el-icon-pear header-main-left-icon"></i>
      <span class="header-main-left-name">大冻梨</span>
      <div class="color-grid">
        <div
          v-for="color in colorOptions"
          :key="color"
          :style="{ backgroundColor: color }"
          @click="handleColorChange(color)"
          class="color-box"
        ></div>
      </div>
    </div>
    <div class="header-main-right">
      <img
        class="header-main-right-img"
        src="https://img1.baidu.com/it/u=4288672918,3634316930&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1693414800&t=6b1c863086ac70b499a052878e6ddf41"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colorOptions: [
        '#cd77c6', '#3e247a', '#653b94',
        '#00b0a6', '#00619d', '#009688',
        '#ff9800', '#ff5722', '#795548',
      ],
      currentColor: '',
    };
  },
  mounted() {
    // 从 localStorage 中读取保存的颜色
    const savedColor = localStorage.getItem('headerColor');
    if (savedColor) {
      this.currentColor = savedColor;
    } else {
      this.currentColor = this.colorOptions[0]; // 设置默认颜色
    }
    // 监听全局事件，更新颜色
    this.$root.$on('updateThemeColor', (color) => {
      this.currentColor = color;
    });
  },
  methods: {
    handleColorChange(color) {
      this.currentColor = color;
      // 保存到 localStorage
      localStorage.setItem('headerColor', color);
      // 触发全局事件，通知其他组件更新颜色
      this.$root.$emit('updateThemeColor', color);
    },
  },
};
</script>

<style lang="less" scoped>
.header-main {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  color: #fff;
  font-size: 30px;
  font-weight: 600;
}
.header-main-left {
  display: flex;
  align-items: center;
  .header-main-left-name {
    margin-left: 10px;
    margin-right: 10px; /* 添加一个右边距用于色卡之间的空间 */
  }
  .color-grid {
    display: grid;
    grid-template-columns: repeat(3, 15px);
    grid-template-rows: repeat(3, 15px);
    grid-gap: 2px;
  }
  .color-box {
    width: 15px;
    height: 15px;
    cursor: pointer;
    border-radius: 3px;
    border: 1px solid transparent;
    transition: border-color 0.2s;
    &:hover {
      border-color: #fff;
    }
  }
}
.header-main-right {
  display: flex;
  align-items: center;
  .header-main-right-img {
    width: 40px;
    border-radius: 50%;
  }
}
</style>
