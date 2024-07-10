<template>
<router-view></router-view>
</template>

<script >
import router  from "@/router/router.js";
export default {
  beforeCreate() {
    router.push({path:'/login'})
  },
  data(){
    return{
      imageShow: "src/assets/login-content-replace.png"
    }
  },
  methods:{

    toRegister(){
      console.log('register')
      router.push({name:'register'})
    }

  },
  components: {

  },
  props: {
    msg: String
  }

}
</script>
<style scoped>

</style>