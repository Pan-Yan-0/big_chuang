<template>
  <div id="login_box" v-show="showLogin">
    <h2>LOGIN</h2>
    <div id="input_box">
      <input type="text" placeholder="请输入用户名">
    </div>
    <div class="input_box">
      <input type="password" placeholder="请输入密码">
    </div>
    <button class="loginButton" @click="handleSubmit">登录</button>
    <button class="registerButton">注册</button>
    <br>
  </div>
  <div id="register_box" v-show="showRegister">
    <h2>Register</h2>
    <div id="input_box">
      <input type="text" placeholder="请输入用户名">
    </div>
    <div class="input_box">
      <input type="password" placeholder="请输入密码">
    </div>
    <button class="loginButton">登录</button>
    <button class="registerButton">注册</button>
    <br>
  </div>
</template>

<script setup>
import {ref} from 'vue'

const username = ref('')
const password = ref('')
const showRegister = ref(false)
const showLogin = ref(true)
const handleSubmit = () => {
  // Add your login logic here
  console.log('Username:', username.value, 'Password:', password.value)
}
const x = () => {

}
</script>

<style>
body {
  background: url('https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_1280.jpg') no-repeat;
  background-size: 100% 130%;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0;
}

#login_box {
  width: 40vw;
  height: 400px;
  background-color: #00000060;
  text-align: center;
  border-radius: 10px;
  padding: 50px 50px;
}

h2 {
  color: #ffffff90;
  margin-top: 5%;
}

#input-box {
  margin-top: 5%;
}

span {
  color: #fff;
}

input {
  border: 0;
  width: 60%;
  font-size: 15px;
  color: #fff;
  background: transparent;
  border-bottom: 2px solid #fff;
  padding: 5px 10px;
  outline: none;
  margin-top: 10px;
}

.loginButton{
  margin-top: 50px;
  width: 60%;
  height: 30px;
  border-radius: 10px;
  border: 0;
  color: #fff;
  text-align: center;
  line-height: 30px;
  font-size: 15px;
  background-image: linear-gradient(to right, #30cfd0, #330867);
}
.registerButton {
  margin-top: 20px;
  width: 60%;
  height: 30px;
  border-radius: 10px;
  border: 0;
  color: #fff;
  text-align: center;
  line-height: 30px;
  font-size: 15px;
  background-image: linear-gradient(to right, #30cfd0, #330867);
}

#sign_up {
  margin-top: 45%;
  margin-left: 60%;
}

a {
  color: #b94648;
}
</style>
