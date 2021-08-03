<template>
  <div class="h-screen bg-blue-pattern"></div>
  <!-- 背景动画 -->
  <starry-sky></starry-sky>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import StarrySky from 'components/StarrySky.vue';

export default defineComponent({
  name: 'App',
  components: { StarrySky },
});
</script>
