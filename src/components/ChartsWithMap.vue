<template>
  <section data-class="chats-with-map" class="pt-1">
    <pie></pie>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Pie from './Pie.vue';
export default defineComponent({
  name: 'ChrtsWithMap',
  components: { Pie },
  setup() {
    return {};
  },
});
</script>
