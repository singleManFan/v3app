<template>
  <header class="border-primary border-b">
    <section class="flex justify-between px-2 pt-1">
      <div>实时天气</div>
      <div>{{ formatDate }}</div>
    </section>
    <section class="pb-1">
      <h1 class="text-center text-primary">数据中心</h1>
    </section>
  </header>
</template>

<script lang="ts">
import { defineComponent, onMounted, onBeforeUnmount } from 'vue';
import { useFormatDate, IFormatDate } from 'composables/useFormatData';

export default defineComponent({
  name: 'SearchBar',
  setup() {
    const { formatDate, setFormDate }: IFormatDate = useFormatDate(Date.now());
    let timer: number = 0;
    // 开启计时器
    onMounted(() => {
      timer = setInterval(() => {
        setFormDate(Date.now());
      }, 1000);
    });
    // 清楚定时器
    onBeforeUnmount(() => {
      clearInterval(timer);
    });

    return {
      formatDate,
    };
  },
});
</script>
