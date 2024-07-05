<template>
    <div class="user-detail-main">
        <div class="breadcrumb-main">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>用户管理</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="go-back-main">
            <span class="go-back-main-cursor" @click="handleClickGoBack">
                <i class="el-icon-back"></i>
                <span class="go-back-main-cursor-content">返回</span>
            </span>
        </div>
        <div class="form-main">
            <el-form label-position="top">
                <el-form-item label="活动名称">
                    <el-input v-model="form.Name" disabled></el-input>
                </el-form-item>
                <el-form-item label="活动名称">
                    <el-input v-model="form.name" disabled></el-input>
                </el-form-item>
                <el-form-item label="活动名称">
                    <el-input v-model="form.name" disabled></el-input>
                </el-form-item>
                <el-form-item label="活动名称">
                    <el-input v-model="form.name" disabled></el-input>
                </el-form-item>
                <el-form-item label="活动名称">
                    <el-input v-model="form.name" disabled></el-input>
                </el-form-item>
                <el-form-item label="活动名称">
                    <el-input v-model="form.name" disabled></el-input>
                </el-form-item>
                <el-form-item label="活动名称">
                    <el-input v-model="form.name" disabled></el-input>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
import axios from "axios";
export default{
    name:'user-view',
    data(){
        return{
            form:{}
        }
    },
    mounted(){
        this.getUserByID()
    },
    methods:{
        //返回按钮
        handleClickGoBack(){
            this.$router.go(-1)
        },
        //获取用户详情数据
        getUserByID(){
            axios({
                url:  "http://81.70.155.74:8083/User/GetUserByID",
                method: "get",
                params: {
                    id:this.$route.query.id
                }
            }).then((response) => {
                console.log('response',response);
                if(response.status == 200 && response.data.Success){
                    this.form = response.data.ReturnValue
                }
            }).catch((error) => {
                console.log('error',error);
            });
        }
    }
}
</script>
<style scoped lang="less">
.user-detail-main{
    display: flex;
    flex-direction: column;
    height: 100%;
}
.breadcrumb-main{
    margin-bottom: 5px;
}
.go-back-main{
    background: #fff;
    padding: 10px;
    margin-bottom: 5px;
    .go-back-main-cursor{
        cursor: pointer;
        font-size: 20px;
        .el-icon-back{
            margin-right: 10px;
            font-weight: 600;
            color: #653b94;
        }
    }
}
.form-main{
    height: auto;
    background: #fff;
    flex: 1;
    .el-form{
        margin: 0 auto;
        width: 500px;
        .el-form-item{
            margin-bottom:10px;
            
        }
    }
}
</style>