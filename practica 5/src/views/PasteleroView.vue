<template>
  <div class="Pastelero">
  <HeaderP /> 
  <PasteleroP />
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderP from "@/components/Header.vue";
import PasteleroP from '@/components/Pastelero.vue';

export default {
  name: 'PastelesView',
  components: {
    PasteleroP,
    HeaderP
  }
}
</script>

