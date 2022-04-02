<template>
  <div class="Personalizar">
  <HeaderP /> 
  <PersonalizarP />
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderP from "@/components/Header.vue";
import PersonalizarP from '@/components/Personalizar.vue'


export default {
  name: 'PersonalizarView',
  components: {
    PersonalizarP,
    HeaderP    
  }
}
</script>

