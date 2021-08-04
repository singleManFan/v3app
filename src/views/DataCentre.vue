<template>
  <div
    data-class="data-centre"
    class="h-screen flex flex-col bg-black bg-opacity-30"
  >
    <!-- 头部区域 -->
    <section data-class="header">
      <header-bar></header-bar>
    </section>
    <!-- 内容区 -->
    <section data-class="content" class="pt-1 px-2 flex-grow flex flex-col">
      <!-- 搜索区 -->
      <search-bar></search-bar>
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
import HeaderBar from 'components/HeaderBar.vue';
import SearchBar from 'components/SearchBar.vue';
import ChartsWithMap from 'components/ChartsWithMap.vue';
import Bar from 'components/Bar.vue';

export default defineComponent({
  name: 'DataCentre',
  components: { SearchBar, HeaderBar, ChartsWithMap, Bar },
  setup() {
    return {};
  },
});
</script>
