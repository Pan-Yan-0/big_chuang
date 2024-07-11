<script setup>
function updateUserName(e) {
    let next = e.target.nextSibling;
    next.style.display = "block"
    let input = next.querySelector("input");
    username=e.target.innerText;
    input.value =  username
    input.focus();
    e.target.style.display = "none"
}
var username="",mail="";

function saveUserName() {

}

function updateMail(e){
    let next = e.target.nextSibling;
    next.style.display = "block"
    let input = next.querySelector("input");
    mail=e.target.innerText;
    input.value =  mail
    input.focus();
    e.target.style.display = "none"
}

function saveMail(){
   
}
function cancelUpdateUserName(){

}
function cancelUpdateMail(){
    
}
</script>

<template>
    <h2 style="margin-left: 10px;">用户基本信息</h2>
    <div class="user-info">

        <div class="info-item">
            <label for="avatar">头像:</label><br>
            <img id="avatar" src="../assets/cityNight.jpeg" alt="Avatar" @click="updateHeader">
        </div>


        <div class="info-item">


            <label for="userName">用户名:</label>
            <p @click="updateUserName">JohnDoe</p>
            <div>
                <input type="text" id="userNameInput">
                <button @click="saveUserName">保存</button>
                <button @click="cancelUpdateUserName">取消</button>
            </div>

        </div>
        <div class="info-item">
            <label for="email">邮箱:</label>
            <p id="email" @click="updateMail">john.doe@example.com</p>
            <div>
                <input type="text" id="mailInput">
                <button @click="saveMail">保存</button>
                <button @click="cancelUpdateMail">取消</button>
            </div>
        </div>
        <div class="info-item">
            <label for="password">密码:</label>
            <p>*********</p>
            <button><span >修改密码</span></button>
        </div>

        
    </div>
</template>

<style scoped>
.sidebar h1 {
    font-size: 18px;
    text-align: center;
    margin-top: 10px;
}

.menu {
    list-style: none;
    padding: 0;
}

.menu li {
    margin: 15px 0;
    cursor: pointer;
}

.menu li span {
    margin-left: 5px;
    font-size: 14px;
}

.menu li.active {
    background-color: #d8d8d8;
}

.main-content {
    flex: 1;
    padding: 20px;
    background-color: #fff;
}

.main-content h2 {
    font-size: 24px;
}

.header {
    background-color: #3c3c3c;
    color: #fff;
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
    align-items: center;
}

.header h1 {
    font-size: 24px;
    margin: 0;
}

.header .nav {
    display: flex;
    gap: 20px;
}

.header .nav a {
    color: #fff;
    text-decoration: none;
    font-size: 14px;
}

.header .nav a:hover {
    text-decoration: underline;
}

.user-info {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.user-info .info-item {
    display: flex;
    text-align: left;
    justify-content: flex-start;
    align-items: center;
    width: 98%;
    height: 80px;
    background-color: #f9f9f9;
    padding: 10px;
    margin-top: 10px;
    margin-left: 10px;
    border-radius: 5px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);

}

.user-info .info-item label {
    font-weight: bold;
    font-size: larger;
}

.user-info .info-item p {
    margin: 10px 50px 0;
    font-size: large;
}

.info-item button {
    background-color: transparent;
    border: none;
    font-size: large;
    margin-left: 25px;
    border-bottom: 1px solid #000;
    padding: 10px;
}

.info-item>div {
    display: none;
}

.info-item input {
    margin-left: 20px;
    border: none;
    font-size: large;
    border-bottom: 1px solid #000;
}

.info-item input:focus {
    outline: none;
}

.info-item img{
    margin-left: 50px;
    height: 70px;
    width: 70px;
    border-radius: 50%;
}
</style>