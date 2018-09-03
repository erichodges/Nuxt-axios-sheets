<template>
  <div class="div-with-background">
    <ToolbarIndex/>          
    <nuxt/>
  </div>
</template>

<script>
import ToolbarIndex from "~/components/ToolbarIndex.vue";

export default {
  components: {
    ToolbarIndex
  }
};
</script>


<style>
.div-with-background {
  height: 100vh; 
  background-image: url('~/static/images/575839.jpg');      
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}

</style>

