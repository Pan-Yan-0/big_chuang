<script>
import router from "@/router/router.js";

export default {
  data() {
    return {
      imageShow: "src/assets/login-content-replace.png",
      email: '',
      username: '',
      code: '',
      password: '',
      repeatPassword: ''

    };
  },
  methods: {
    returnLogin() {
      console.log("return login")
      this.$router.push({name: 'login'})
    },
    async sendEmail() {
      /*
      * @TODO
      * */
      if (this.email === '') {
        alert('请输入邮箱');
        return;
      }
      const url = 'http://47.93.42.122:8888/user/SendMail';
      const requestData = {
        toUserMail: this.email,
        where: 'regist'
      };
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(requestData)
        });
        if (!response.ok) {
          console.log('Error:', response.statusText)
        }
        const responseData = await response.json();
        console.log(responseData);
      } catch (error) {
        console.error('Error:', error);
      }
    },
    async regist() {
      /*
      * @TODO
      * */
      const url = 'http://47.93.42.122:8888/user/register';
      const requestData = {
        nickName: this.username,
        email: this.email,
        code: this.code,
        password: this.password
      };
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(requestData)
        });
        if (!response.ok) {
          console.log('Error:', response.statusText)
        }
        const responseData = await response.json();
        console.log(responseData);
      } catch (error) {
        console.error('Error:', error);
      }
    }
  }
}

</script>

<template>
  <div class="father-contain">
    <div class="container">
      <div class="image-section">
        <img :src="imageShow" alt="Illustration">
      </div>
      <div class="form-section">
        <h2>基于空间Co-location模式挖掘算法系统 - 注册</h2>
        <form @submit.prevent="regist">
          <div class="form-group-text">
            <label for="username">用户名</label>
            <input type="text" id="username" name="username" placeholder="请输入用户名" v-model="username" required>
          </div>
          <div class="form-group-text">
            <label for="email">邮箱</label>
            <input type="text" id="email" name="email" placeholder="请输入邮箱" v-model="email" required>
          </div>
          <div class="form-group-text">
            <label for="code">验证码</label>
            <input style="width: 52%" type="text" id="code" name="code" placeholder="请输入验证码" v-model="code"
                   required>
            <button @click="sendEmail"
                    style="font-size: 13px;padding: 10px;background-color: #007bff;color: white;border: none;">发送验证码
            </button>
          </div>
          <div class="form-group-text">
            <label for="password">密码</label>
            <input type="password" id="password" name="password" placeholder="请输入密码" v-model="password" required>
          </div>
          <div class="form-group-text">
            <label for="password">重复密码</label>
            <input type="password" id="repeatPassword" name="repeatPassword" placeholder="请输入重复密码"
                   v-model="repeatPassword" required>
          </div>
          <div class="form-group">
            <button type="submit" @click="regist()">注册</button>
            <button type="button" class="cancel" @click="returnLogin()">返回登陆</button>
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

.form-section h2 {
  font-size: 20px;
  margin-bottom: 20px;

}

.form-group-text {
  margin-bottom: 15px;
  display: flex;
  flex-direction: inherit;
  justify-content: space-between;
  align-items: center;
}

.form-group {
  margin-bottom: 15px;
}

.form-group-text label {
  margin-bottom: 5px;
  display: block;
}

.form-group-text input {
  padding: 10px;
  width: 80%;
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