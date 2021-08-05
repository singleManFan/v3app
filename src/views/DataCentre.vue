<template>
  <div
    data-class="data-centre"
    class="h-full flex flex-col bg-black bg-opacity-30"
  >
    <section data-class="content" class="pt-1 px-2 flex-grow flex flex-col">
      <!-- 搜索区 -->
      <home-search></home-search>
      <!-- 热地图展示 -->
      <charts-with-map></charts-with-map>
      <!-- 底部柱状图 -->
      <section class="flex-grow flex">
        <bar class="flex-1"></bar>
        <bar class="flex-1"></bar>
      </section>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HomeSearch from 'components/HomeSearch.vue';
import ChartsWithMap from 'components/ChartsWithMap.vue';
import Bar from 'components/Bar.vue';

export default defineComponent({
  name: 'DataCentre',
  components: { HomeSearch, ChartsWithMap, Bar },
  setup() {
    return {};
  },
});
</script>
