<template>
  <div data-class="data-centre">
    <!-- 头部区域 -->
    <section data-class="header">
      <header-bar></header-bar>
    </section>
    <!-- 内容区 -->
    <section data-class="content" class="pt-1 px-2">
      <!-- 搜索区 -->
      <search-bar></search-bar>
      <!-- 地图展示 -->
      <charts-with-map></charts-with-map>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeaderBar from 'components/HeaderBar.vue';
import SearchBar from 'components/SearchBar.vue';
import ChartsWithMap from 'components/ChartsWithMap.vue';

export default defineComponent({
  name: 'DataCentre',
  components: { SearchBar, HeaderBar, ChartsWithMap },
  setup() {
    return {};
  },
});
</script>
