<template>
    <div class="login-wrap">
    <el-form
      label-position="top"
      label-width="80px"
      :model="formData"
      class="login-form">
      <h2>用户登录</h2>
      <el-form-item label="用户名">
        <el-input v-model="formData.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="formData.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="handleLogin" type="primary" class="login-btn">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        username: '',
        password: ''
      }
    };
  },
  methods: {
    // 发送请求;传递数据;存储token;给提示;
    async handleLogin() {
      const response = await this.$http.post('login', this.formData);
      // 需要用到status,msg,token
      const {data: {token}, meta: {msg, status}} = response.data;
      if (status === 200) {
        // sessionStorage.setItem('token', token);
        this.$message.success(msg);
        // 跳转页面
        // this.$router.push('/');
      } else {
        this.$message.error(msg);
      }
    }
  }
};
</script>

<style scoped>
.login-wrap {
  background-color: #324152;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-wrap .login-form {
  background-color: #fff;
  width: 400px;
  padding: 30px;
  border-radius: 5px;
}

.login-wrap .login-form .login-btn {
  width: 100%;
}
</style>
