<template>
  <section data-class="search-bar" class="flex justify-between">
    <section class="flex">
      <div class="mr-1.5">
        总户数：<span class="text-primary">89.98万</span>
      </div>
      <div class="mr-1.5">
        参与户数：<span class="text-second">89.98万</span>
      </div>
      <div>垃圾总数：<span class="text-warn">89.98吨</span></div>
    </section>
    <section class="flex">
      <div class="mr-1.5">
        <label class="mr-1.5" for="start">开始时间</label
        ><input v-model="startTime" id="start" type="date" />
      </div>
      <div class="mr-1.5">
        <label class="mr-1.5" for="end">结束时间</label
        ><input v-model="endTime" id="end" type="date" />
      </div>
      <div><button @click="getChartsData">查询</button></div>
    </section>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useChartsData, IChartsData } from 'composables/useChartsData';

export default defineComponent({
  name: 'SearchBar',
  setup: () => {
    const { chartsData, startTime, endTime, getChartsData }: IChartsData =
      useChartsData();
    return {
      getChartsData,
      chartsData,
      startTime,
      endTime,
    };
  },
});
</script>
