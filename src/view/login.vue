<script >

import router from "@/router/router.js";

export default {
  data(){
    return{
      username : '',
      password : '',
      imageShow: "src/assets/login-content-replace.png"
    }
  },
  methods:{
    /*
    * @TODO
    * */
    handleSubmit(){
      console.log('Username:', this.username.value, 'Password:', this.password.value)
    },
    toRegister(){
      router.push({name:'register'})
    },

  },
}
</script>

<template>
  <div class="father-contain">
    <div class="container">
      <div class="image-section">
        <img :src="imageShow" alt="Illustration">
      </div>
      <div class="form-section">
        <h1>基于空间Co-location模式挖掘算法系统</h1>
        <form>
          <div class="form-group">
            <label for="username">用户名</label>
            <input type="text" id="username" name="username" placeholder="请输入员工用户名" required>
          </div>
          <div class="form-group">
            <label for="password">密码</label>
            <input type="password" id="password" name="password" placeholder="请输入密码" required>
          </div>
          <div class="form-group">
            <button type="submit" v-on:click="handleSubmit()">登录</button>
            <button type="button" class="cancel" @click="toRegister()">注册</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.father-contain {
  background: url('../assets/login-background.png') no-repeat;
  background-size: 100% 130%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  max-width: 900px;
  width: 100%;
}
.image-section {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.image-section img {
  max-width: 100%;
  border-radius: 10px;
}
.form-section {
  flex: 1;
  padding: 20px;
}
.form-section h1 {
  font-size: 24px;
  margin-bottom: 20px;
}
.form-group {
  margin-bottom: 15px;
}
.form-group label {
  display: block;
  margin-bottom: 5px;
}
.form-group input {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
}
.form-group button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 16px;
}
.form-group button.cancel {
  background-color: #6c757d;
  margin-top: 10px;
}
</style>