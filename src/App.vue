<template>
  <!-- 全屏控件 -->
  <div class="h-screen bg-blue-pattern text-white text-xs">
    <!-- 控件渲染区 -->
    <div class="relative z-10">
      <data-centre></data-centre>
    </div>
    <!-- 背景动画 -->
    <starry-sky></starry-sky>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import StarrySky from 'components/StarrySky.vue';
import DataCentre from 'views/DataCentre.vue';

export default defineComponent({
  name: 'App',
  components: { StarrySky, DataCentre },
});
</script>
