<script setup>

</script>

<template>
  <button class="pa">
    <span> <slot name="title"> </slot> </span>
    <span> <slot name="content"> </slot> </span>
    <svg t="1720513646248" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4883" width="32" height="32"><path d="M915.2 280.4l-165-8-9.6-107.6c-2-22.6-22.2-38.4-45.8-36.6L103 176.8c-23.6 2-40.6 21-38.8 43.4l42.4 471.6c2 22.6 22.4 38.4 45.8 36.6l30-2.4-4.8 91.6c-1.2 25.2 18.4 45.6 44.8 47L882.6 896c26.4 1.2 48.2-17.2 49.6-42.4L960 327c1.2-25-18.6-45.4-44.8-46.6z m-709.8 10.6l-14.2 269.6L156.2 610 124 254v-2c2-10 8.8-18 19.2-18.8l522-42.8c10.4-0.8 19.4 6 21 15.8 0 0.4 0.6 0.4 0.6 0.8 0 0.2 0.6 0.4 0.6 0.8l5.4 61.6-438-21c-26.4-0.8-48.2 17.6-49.4 42.6z m668 473.8l-169.6-199-74.8 68.6-138.4-161.6-245.4 261.4L266 336v-0.8c2-10.8 12.4-18.6 23.8-18l582.4 28c11.6 0.6 20.6 9.4 20.8 20.4 0 0.4 0.6 0.6 0.6 1l-20.2 398.2z" p-id="4884" fill="#ffffff"></path><path d="M768 512c35.2 0 64-28.8 64-64s-28.6-64-64-64c-35.2 0-64 28.6-64 64s28.6 64 64 64z" p-id="4885" fill="#ffffff"></path></svg>
  </button>
</template>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
.pa{
    width: 100%;
    height: 70px;
    position: relative;
    background-color: rgba(82, 95, 110, 0.555);
    color: aliceblue;
    border: 0;
    border-bottom: 2px solid #999;
}

pa ::-webkit-scrollbar-track{
    background: #111
}

.pa span{
    display: block;
    position: absolute;
    float: left;
}
.pa :nth-child(1){
    top: 0;
    left: 50px;
    font-size: large;
}
.pa :nth-child(2){
    left: 50px;
}

.pa svg{
    position: absolute;
    float: left;
    top: 20%;
    left: 10px;
}


</style>
