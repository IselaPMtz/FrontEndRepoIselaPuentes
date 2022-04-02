<template>
  <div class="Home">
    <HeaderP />
    <HomeP />
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderP from "@/components/Header.vue";
import HomeP from '@/components/Home.vue'

export default {
  name: 'HomeView',
  components: {
    HomeP,    
    HeaderP
  }
}
</script>



