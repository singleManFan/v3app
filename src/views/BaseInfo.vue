<template>
  <div data-class="real-time" class="px-2 flex flex-col">
    <search-panel class="mb-6"></search-panel>
    <table-panel class="flex-grow"></table-panel>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SearchPanel from 'components/SearchPanel.vue';
import TablePanel from 'components/TablePanel.vue';
export default defineComponent({
  name: 'RealTime',
  components: { TablePanel, SearchPanel },
  setup() {
    return {};
  },
});
</script>
