<template>
  <header class="border-primary border-b px-2">
    <section class="flex justify-between pt-1">
      <section class="pb-1 flex justify-end">
        <div class="text-xs text-primary t-shape bg-opacity-20">
          <router-link to="/">数据中心</router-link>
        </div>
        <div class="text-xs text-primary t-shape bg-opacity-20">
          <router-link to="/real-time">实时监控</router-link>
        </div>
        <div class="text-xs text-primary t-shape bg-opacity-20">
          <router-link to="/base-info">基础信息</router-link>
        </div>
        <div class="text-xs text-primary t-shape bg-opacity-20">设备管理</div>
      </section>
      <div>{{ formatDate }}</div>
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
