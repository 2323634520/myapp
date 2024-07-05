<template>
    <div>
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
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="活动名称">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="活动名称">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="活动名称">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="活动名称">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="活动名称">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="活动名称">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
export default{
    name:'user-view',
    data(){
        return{
            form:{
                name:'123'
            }
        }
    },
    methods:{
        handleClickGoBack(){
            this.$router.go(-1)
        }
    }
}
</script>
<style scoped lang="less">
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
    background: #fff;
}
</style>