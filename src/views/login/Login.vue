<template>
    <div class="main">
        <div class="query">
            <!-- <div class="query-content">
                123
            </div> -->
            <div class="query-main">
                    <el-form :model="queryForm" :rules="rules" ref="queryForm">
                        <el-form-item label="手机号" prop="username">
                            <el-input v-model.trim="queryForm.username" clearable></el-input>
                        </el-form-item>
                        <el-form-item label="密码" prop="password">
                            <el-input v-model.trim="queryForm.password" type="password" clearable></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="submitForm('queryForm')" class="login-button" :loading="buttonLoading">立即创建</el-button>
                        </el-form-item>
                    </el-form>
            </div>
        </div>
    </div>

    <!-- <el-form-item>
                            <el-button type="primary" @click="getSecureData">通过Token调取接口</el-button>
                        </el-form-item> -->
</template>
<script>
import axios from 'axios';
export default{
    data(){
        return{
            queryForm:{
                username:"3216549870",
                password:"admin",
            },
            Token:'',
            result:'',
            rules:{
                username:[
                    { required: true, message: '请输入手机号', trigger: 'blur' },
                ],
                password:[
                    { required: true, message: '请输入密码', trigger: 'blur' },
                ]
            },
            buttonLoading:false
        }
    },
    mounted(){

    },
    methods:{
        submitForm(formName){
            this.buttonLoading = true
            this.$refs[formName].validate((valid) => {
                if (valid) {
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
                            this.$router.push({
                                path:'/home'
                            })

                        }else{
                            this.buttonLoading = false
                            this.$message({
                                duration: 1000,
                                message: '登录失败，账号或密码错误',
                                type: 'error'
                            });
                        }
                    }).catch((err) => {
                        this.$message({
                            duration: 1000,
                            message: '登录失败，账号或密码错误',
                            type: 'error'
                        });
                        this.buttonLoading = false
                    })
                } else {
                    this.buttonLoading = false
                    return false;
                }
            });
            
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
<style scoped lang="less">
.main{
    overflow: hidden;
}
.query{
    display: flex;
    margin: 100px auto;
    width: 800px;
    
    .query-content{
        flex: 1;
        //background: skyblue;
    }
    .query-main{
        background-color: rgba(red, green, blue, 0.5);
        flex: 1;
        min-height: 500px;
        .login-button{
            width: 100%;
            margin-top: 50px;
        }
        .el-form-item{
            margin-bottom: 10px;
        }
    }
    .query-main::before{
        opacity:0.4;
        border-radius: 20px;
        background: url("@/assets/login-input-bg.png") no-repeat;
        background-size: 100% 100%;
    }
}
</style>