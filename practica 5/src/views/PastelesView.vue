<template>
  <div class="Pasteles">
  <HeaderP /> 
  <PastelesP />
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderP from "@/components/Header.vue";
import PastelesP from '@/components/Pasteles.vue'

export default {
  name: 'PastelesView',
  components: {
    PastelesP,
    HeaderP
  }
}
</script>

