<template>
  <canvas ref="canvas" class="absolute inset-0"></canvas>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import Play from './lib/play-bg';

export default defineComponent({
  name: 'StarrySky',
  setup: () => {
    const canvas = ref<any>(null);
    onMounted(() => {
      const canvasEl: HTMLCanvasElement = canvas.value;
      canvasEl.width = window.innerWidth;
      canvasEl.height = window.innerHeight;
      const ctx = canvasEl.getContext('2d') as CanvasRenderingContext2D;
      // 播放背景动画
      const play = new Play(ctx, 1);
      play.animation();
    });

    return {
      canvas,
    };
  },
});
</script>
