import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import User from '../views/user-page/User.vue'
import Main from '../views/Main.vue'
import Mail from '../views/Mail.vue'
import PageOne from '../views/PageOne.vue'
import PageTwo from '../views/PageTwo.vue'

// 1、创建router组件
// 2、将路由与组件进行映射
// 3、创建router实例
Vue.use(VueRouter)

const routes = [
    { 
        path:'/',
        name:'home',
        component:Main,
        children:[
            {
                path:'/home',
                name:'home',
                component: Home
            },
            { 
                path:'/user',
                name:'user',
                component:() => import('../views/user-page/User.vue'),
            },
            {
                path:'/user-view',
                name:'user-view',
                component:() => import('../views/user-page/UserDetail.vue'),
            },
            { path:'mail',component: Mail},
            { path:'page1',component: PageOne},
            { path:'page2',component: PageTwo},
        ]
    },
]

const router = new VueRouter({
    routes//(缩写)相当于routes:routes
})

export default router