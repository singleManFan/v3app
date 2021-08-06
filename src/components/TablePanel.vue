<template>
  <div data-class="table-panel" class="h-full mb-4 flex flex-col">
    <header class="t-bg px-2" v-if="toolsBar">
      <button class="mr-1.5">新增</button>
      <button>导出</button>
    </header>
    <section ref="root" style="background: red" class="flex-grow"></section>
    <virtual-scroll-table
      v-if="virtualScrolHeight"
      :toolsBar="toolsBar"
      :data="tableData"
      :height="virtualScrolHeight"
      :pageMode="false"
    ></virtual-scroll-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, PropType, computed } from 'vue';
import VirtualScrollTable from 'components/VirtualScrollTable.vue';

export default defineComponent({
  name: 'TablePanel',
  components: { VirtualScrollTable },
  props: {
    toolsBar: {
      type: Boolean,
      default: false,
    },
    tableData: {
      type: Object as PropType<ITableData>,
      required: true,
    },
  },
  setup(props) {
    const root = ref<HTMLElement | null>(null);
    const virtualScrolHeight = ref<number>(0);
    onMounted(() => {
      const virtualArea = root.value as HTMLElement;
      const { height } = getComputedStyle(virtualArea);
      virtualScrolHeight.value = parseInt(height);
      virtualArea.remove();
    });

    return {
      root,
      props,
      virtualScrolHeight,
    };
  },
});
</script>
