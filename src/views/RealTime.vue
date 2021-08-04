<template>
  <div data-class="real-time" class="px-2 flex flex-col">
    <real-time-search class="mb-6"></real-time-search>
    <table-panel class="flex-grow"></table-panel>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import RealTimeSearch from 'components/RealTimeSearch.vue';
import TablePanel from 'components/TablePanel.vue';
export default defineComponent({
  name: 'RealTime',
  components: { TablePanel, RealTimeSearch },
  setup() {
    return {};
  },
});
</script>
