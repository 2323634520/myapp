<template>
    <div class="menu-wrapper">
      <el-menu 
        default-active="1-4-1" 
        class="el-menu-vertical-demo" 
        :collapse="isCollapse"
        background-color="#ffffff"
        text-color="#707070"
        active-text-color="#ffd04b"
      >
        <el-menu-item 
          @click="clickMenu(item)" 
          v-for="item in hasChildren" 
          :key="item.name" 
          :index="item.name"
        >
          <i :class="`el-icon-${item.icon}`"></i>
          <span slot="title">{{item.label}}</span>
        </el-menu-item>
  
        <el-submenu 
          v-for="item in noChildren" 
          :key="item.label" 
          :index="item.label"
        >
          <template slot="title">
            <i :class="`el-icon-${item.icon}`"></i>
            <span slot="title">{{ item.label }}</span>
          </template>
          <el-menu-item-group v-for="subItem in item.children" :key="subItem.path">
            <el-menu-item @click="clickMenu(subItem)" :index="subItem.path">{{ subItem.label }}</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </div>
  </template>
  
  <style lang="less" scoped>
  .menu-wrapper {
    height: 100%;
    overflow: hidden;
  }
  
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    height: 100%;
  }
  
  .el-menu {
    height: 100%;
  }
  </style>
  
  <script>
  export default {
    data() {
      return {
        isCollapse: false,
        menuData: [
          {
            path: '/home',
            name: 'home',
            label: '首页介绍',
            icon: 's-home',
            url: 'Home/Home'
          },
          {
            path: '/user',
            name: 'user',
            label: '用户管理',
            icon: 'user',
            url: 'UserManage/UserManage'
          },
          {
            path: '/mail',
            name: 'mail',
            label: '知识笔记',
            icon: 'edit-outline',
            url: 'MailManage/MailManage'
          },
          {
            label:'其他内容',
            icon:"location",
            children:[
              {
                path: '/page1',
                name: 'page1',
                label: 'A界面',
                icon: 'setting',
                url: 'Other/PageOne'
              },
              {
                path: '/page2',
                name: 'page2',
                label: 'B界面',
                icon: 'setting',
                url: 'Other/PageTwo'
              },
            ]
          }
        ]
      };
    },
    methods: {
      clickMenu(item){
        if(this.$route.path !== item.path && !(this.$route.path === '/home' && (item.path === '/'))) {
          this.$router.push(item.path);
        }
      },
    },
    computed: {
      noChildren() {
        return this.menuData.filter(item => item.children)
      },
      hasChildren() {
        return this.menuData.filter(item => !item.children)
      }
    },
  }
  </script>
  