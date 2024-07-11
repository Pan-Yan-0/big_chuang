<script setup>
import upload from '../components/upload.vue';
import about from "../components/about.vue"
import history from '../components/history.vue';
import me from "../components/me.vue";
import ruleGenertion from "../components/ruleGeneration.vue"
import UploadShow from '../components/uploadShow.vue';

</script>

<script>


export default {
  mounted() {
    const token = this.$route.query.token;
    this.token = token
  },
  data() {
    return {
      showPageIndex: 0,
      token:''
    };
  },
  methods: {
    uploadFunction() {

    }
  }
}
</script>

<template>
  <div style="display: flex;">
    <div class="sidebar">
      <ul class="menu">
        <li :class="{'active':showPageIndex==0}" @click="showPageIndex=0"><strong>首页</strong> <span>>></span></li>
        <li :class="{'active':showPageIndex==1}" @click="showPageIndex=1;"><strong>数据挖掘</strong> <span>>></span>
        </li>
        <li :class="{'active':showPageIndex==2}" @click="showPageIndex=2;"><strong>挖掘历史</strong> <span>>></span>
        </li>
        <li :class="{'active':showPageIndex==3}" @click="showPageIndex=3;"><strong>我的</strong> <span>>></span></li>
        <li :class="{'active':showPageIndex==5}" @click="showPageIndex=5;"><strong>规则生成</strong> <span>>></span>
        </li>
        <li :class="{'active':showPageIndex==4}" @click="showPageIndex=4;"><strong>关于我们</strong> <span>>></span>
        </li>
      </ul>
    </div>
    <div class="main-content">
      <div class="header"><h1 style="text-align: center;">基于序列模式挖掘的空间同位模式挖掘系统</h1></div>
      <div class="home0" v-show="showPageIndex==0"></div>
      <upload v-show="showPageIndex==1 &&!uploadFlag" @click="uploadFunction"></upload>
      <UploadShow></UploadShow>
      <history v-show="showPageIndex==2"></history>
      <me v-if="showPageIndex==3"></me>
      <ruleGenertion v-if="showPageIndex==5"></ruleGenertion>
      <about v-if="showPageIndex==4"></about>
    </div>
  </div>
</template>

<style scoped>
.menu {
  padding-top: 42px;
}

.sidebar {
  width: 15vw;
}

.sidebar li {
  height: 50px;
  align-items: center;
  text-align: center;
  line-height: 50px;
}

.active {
  background-color: rgba(21, 109, 29, 0.61);
}

.main-content {
  width: 80vw;
}
</style>

<script>

</script>
