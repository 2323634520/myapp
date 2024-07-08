<template>
    <div>
        <el-form>
            <el-form-item label="账号">
                <el-input v-model="queryForm.username"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="queryForm.password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="login">立即创建</el-button>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="getSecureData">通过Token调取接口</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
import axios from 'axios';
import { sgApi } from '../../api/sgApi'
export default{
    data(){
        return{
            queryForm:{
                username:"3216549870",
                password:"admin",
            },
            Token:'',
            result:''
        }
    },
    mounted(){

    },
    methods:{
        login(){
            axios({
                url:'http://81.70.155.74:8083/User/Login',
                method:'post',
                params:{
                    PassWord:this.queryForm.password,
                    Phone:this.queryForm.username,
                }
            }).then((res) => {
                if(res.status == 200 && res.data.Success){
                    document.cookie = "whzToken="+res.data.ReturnValue.token
                    this.$message({
                        duration: 1000,
                        message: '登录成功',
                        type: 'success'
                    });
                    setTimeout(()=>{
                        this.$router.push({
                            path:'/home'
                        })
                    },1000)
                }
               
            }).catch((err) => {
                console.log('err',err)
            })
        },
        getSecureData(){
            document.cookie.split('; ').forEach((item)=>{
                console.log(item)
                if(item.split('=')[0] == 'whzToken'){
                    this.Token = item.split('=')[1]
                }
            })

            axios({
                url:'http://81.70.155.74:8083/User/GetSecureData',
                method:'get',
                headers:{
                    Authorization: 'Bearer ' + this.Token
                },
                data:{}
            }).then((res) => {
                console.log('res',res)
            }).catch((err) => {
                console.log('err',err)
            })
        },
    }
}
</script>