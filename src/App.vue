<template>
<router-view></router-view>
</template>

<script >
import router  from "@/router/router.js";
export default {
  beforeCreate() {
    router.push({path:'/login'})
  }
}
</script>
<style scoped>

</style>