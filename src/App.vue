<template>
<router-view></router-view>
</template>

<script >
import router  from "@/router/router.js";
export default {
  beforeCreate() {
    router.push({path:'/home'})
  }
}
</script>
<style scoped>

</style>