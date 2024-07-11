<script setup>


    
</script>

<script>

export default{
        data(){
            return {
                showFlag:true,
            }
        },
        methods:{
            yes(){
                console.log("yes")
            }
        }
    };

</script>


<template>
  <div class="pa" v-if="showFlag">
    <div class="son">
        <div class="title"><span>规则生成</span></div>
        <div class="content"><span>共选中了 <slot></slot> 个文件，是否进行规则生成？ </span></div>
        <div class="btnDiv" @click="yes"><button>是，立即生成</button><button @click="showFlag=false">暂时不生成</button></div>
    </div>    
  </div>
</template>

<style scoped>
.pa{
    width: 85%;
    height: 100%;
    background-color:#0006;
    overflow: hidden;
    position: absolute;
    text-align: center;
    line-height: 100%;
    float: left;
    top: 0;
}
.son{
    display: inline-block;
    width: 500px;
    height: 300px;
    background-color: rgb(204, 205, 247);
    align-items: center;
    top: 50%;  
    left: 50%;  
    position: absolute;
    transform: translate(-50%, -50%);  
    border-radius: 5%;
}

button{
    width: 200px;
    height: 40px;
    position: relative;
    bottom: -240px;
    margin-left: 20px;
    margin-right: 20px;
    background-color: aquamarine;
}
.title{
    font-size: 50px;
    font-weight: 700;
    color: rgb(135, 157, 255);
}
.content{
    margin-top: 50px;
    font-size: x-large;
}

</style>
