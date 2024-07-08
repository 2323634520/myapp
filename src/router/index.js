// 1、创建router组件
// 2、将路由与组件进行映射
// 3、创建router实例
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    { 
        path:'/',
        name:'index',
        component:() => import('../views/Main.vue'),
        children:[
            {
                path:'/home',
                name:'home',
                component:() => import('../views/home-page/Home.vue'),
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
            {
                path:'/mail',
                name:'mail',
                component:() => import('../views/mail-page/Mail.vue'),
            },
            {
                path:'/other-page1',
                name:'other-page1',
                component:() => import('../views/other-page/Page1.vue'),
            },
            { 
                path:'/other-page2',
                name:'other-page2',
                component:() => import('../views/other-page/Page2.vue'),
            },
        ]
    },
    {
        path:'/login',
        name:'login',
        component:() => import('../views/login/Login.vue'),
    }
]

const router = new VueRouter({
    routes
})

router.beforeEach((to, from, next) => {
//    console.log('to',to)
//    if(to.name == 'index' && a == 1){
//     console.log('1')
//         next('/login')
//    }else{
        next()
//    }
});
export default router