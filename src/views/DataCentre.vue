<template>
  <div data-class="data-centre">
    <header>
      <section class="flex justify-between px-4 py-2">
        <div>实时天气</div>
        <div>{{ formatDate }}</div>
      </section>
    </header>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onBeforeUnmount } from 'vue';
import { useFormatDate, IFormatDate } from 'composables/useFormatData';
export default defineComponent({
  name: 'DataCentre',
  setup() {
    const { formatDate, setFormDate }: IFormatDate = useFormatDate(Date.now());
    let timer: number = 0;
    // 开启计时器
    onMounted(() => {
      timer = setInterval(() => {
        setFormDate(Date.now());
      }, 1000);
    });

    onBeforeUnmount(() => {
      clearInterval(timer);
    });

    return {
      formatDate,
    };
  },
});
</script>
