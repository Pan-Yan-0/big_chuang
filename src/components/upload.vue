<script setup>


</script>

<script>


export default {
    data() {
        return {
            min_prev: 0,
            min_span: 0,
            min_window: 0,
            R: 0,
            noFileUploadFlag:true,
            chooseFileFlag:false,
        }
    },
    methods:{
        chooseFile(){
            document.querySelector("#choosedFile").click()
        },
        fileChooseChange(e){
            let files=e.target.files;
            console.log(e)
            console.log(e.target);
            console.log(files);
            this.chooseFileFlag=(files&&files[0])
        },
        getResult(){
            if(!chooseFileFlag){alert("请先选择文件");return}
            else if(this.min_prev==0&&min_span==0&&min_window==0&&R==0){
               if( confirm("似乎没有调整参数，要继续吗？")){
                console.log("发送请求");
               }
            }
        }
    }
}
</script>

<template>
    <div class="pap" v-show="false">
        <div class="pa" v-show="noFileUploadFlag">
            <div class="son">
                <span class="tipTitle">数据挖掘</span>
                <br>
                <span class="tips">上传txt文本文件,获取结果</span>
                <br>
                <button @click="chooseFile">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="currentColor"
                                d="M12.75 13.81v7.44a.75.75 0 1 1-1.5 0v-7.4L9.49 15.6a.75.75 0 1 1-1.06-1.06l2.35-2.36c.68-.68 1.8-.68 2.48 0l2.35 2.36a.75.75 0 1 1-1.06 1.06l-1.8-1.8zM9 18v1.5H6.75v-.01A5.63 5.63 0 0 1 5.01 8.66a6 6 0 0 1 11.94-.4 5.63 5.63 0 0 1 .3 11.23v.01H15V18h1.88a4.12 4.12 0 1 0-1.5-7.97A4.51 4.51 0 0 0 11 4.5a4.5 4.5 0 0 0-4.43 5.29 4.13 4.13 0 0 0 .68 8.2V18H9z">
                            </path>
                        </svg>
                        <span>选择文件</span>
                    </span>
                </button>
            </div>
        </div>
        <div class="pa paNnext" v-show=" !noFileUploadFlag">
            <div class="showImageLeft">
                <img src="../assets/cityNight.jpeg" alt="">
                <h3>结果</h3>
            </div>
            <div class="showStrRight">
                <textarea name="" id="" readonly>
                </textarea>
                <h5>输出</h5>
            </div>


        </div>

        <div class="buttomBar">
            <div class="abcd">
                    <table >
                    <input type="file" style="display: none;" id="choosedFile" accept="text/plain" @change="fileChooseChange">
                    <tr>
                        <td><span>最小参与率</span></td>
                        <td><span>最大时间跨度</span></td>
                        <td><span>最大窗口阈值</span></td>
                        <td><span>距离阈值</span></td>
                    </tr>
                    <tr>
                        <td><input type="range" min="0" max="100" value="0" v-model="min_prev"> </td>
                        <td> <input type="number" v-model="min_span"> <span></span><br></td>
                        <td><input type="number" v-model="min_window"> </td>
                        <td><input type="number" v-model="R"> </td>
                    </tr>
                    <tr>
                        <td><span>{{ min_prev / 100 }}</span></td>
                        <td><span>{{ min_span }}</span><br></td>
                        <td><span>{{ min_window }}</span></td>
                        <td><span>{{ R }}</span></td>
                    </tr>
                        
                </table>

                <span> {{ chooseFileFlag?"文件已选择":"未选择文件" }} </span><br>
                <span style="align-items: center; line-height: 100%;" class="bottomButtons">
                    <button @click="chooseFile" v-show="! noFileUploadFlag">选择新文件</button>
                    <button @click="getResult">获取结果</button>
                </span>

            </div>
        </div>
    </div>
</template>

<style scoped>
span {
    color: aliceblue;
}

button {
    background-color: transparent;
    margin-top: 70px;
    width: 200px;
    height: 40px;
    background-color: #fefefe22;
}

button img {
    display: inline-block;
    height: 100%;
}

button span {
    font-size: x-large;
}

.tipTitle {
    font-size: 80px;
    position: relative;
}

.pa {
    align-items: center;
    text-align: center;
    width: 100%;
    height: 70vh;
    overflow: hidden;
    background-color: transparent;
    background: url(../assets/blueEarth.jpg);
    background-size: 100%;
}

.son {
    width: 800px;
    height: 100%;
    background-color: rgba(16, 26, 70, 0.233);
    display: inline-block;
    position: relative;
    border-radius: 3%;
    align-items: center;
    padding-top: 150px;
}

.buttomBar {
    width: 100%;
    text-align: center;
    font-size: x-large;
}

.buttomBar span {
    color: green;
}

.abcd table {
    width: 100%;
    margin-left: 20px;
}

.abcd table input {
    width: 200px;
    height: 30px;
    font-size: x-large;
    text-align: left;
    padding-left: 10px;
}

.paNnext {
    background: none;
    background-color: transparent;
    position: relative;
}

.paNnext button {
    bottom: 0;
    position: absolute;
}

.paNnext .showImageLeft{
    width: 50%;
    height: 100%;
    background-color: transparent;
    padding: 10px;
    padding-top: 150px;
    overflow: hidden;
    align-items: center;
    position: absolute;
}


.paNnext .showImageLeft img{
    max-height: 80%;
    max-width: 80%;
}


.bottomButtons button{
    margin-left: 30px;
    margin-right: 30px;
    margin-top: 20px;
}

.showStrRight{
    background-color: transparent;
    width: 50%;
    height: 100%;
    float: left;
    position: absolute;
    left: 50%;
}
.showStrRight textarea{
   width: 80%;
   height: 80%;
   top: 10%;
   position: relative;
   resize: none;
}

</style>
