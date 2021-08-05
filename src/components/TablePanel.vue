<template>
  <div data-class="table-panel" class="h-full flex flex-col">
    <header class="t-bg px-2" v-if="toolsBar">
      <button class="mr-1.5">新增</button>
      <button>导出</button>
    </header>
    <section
      :style="scrollHeight"
      ref="root"
      :class="{ scroll: isScroll }"
      class="flex-grow mb-4"
    >
      <table ref="table" class="w-full t-bg-p box-border text-center">
        <tbody>
          <tr :class="{ 't-th-bg': !toolsBar }">
            <th v-for="tile in tableData.th" :key="tile">{{ tile }}</th>
          </tr>
          <!-- 渲染表格行 -->
          <template v-for="(i, index) in tableData.data.length" :key="i">
            <tr>
              <td v-for="tile in tableData.data[index]" :key="tile.id">
                {{ tile.value }}
              </td>
            </tr>
          </template>
        </tbody>
      </table>
    </section>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  onMounted,
  reactive,
  PropType,
  computed,
} from 'vue';

import VirtualListScroll from './VirtualListScroll.vue';

export default defineComponent({
  name: 'TablePanel',
  compontents: { VirtualListScroll },
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
    const rows = computed(
      () => props.tableData.data.length / props.tableData.th.length
    );

    const table = ref<HTMLElement | null>(null);
    const root = ref<HTMLElement | null>(null);
    // 是否滚动
    const isScroll = ref<boolean>(false);
    const scrollHeight = reactive<ScrollH>({
      height: '0px',
    });
    onMounted(() => {
      const tableEl = table.value as HTMLElement;
      const el = root.value as HTMLElement;
      // 滚动区域
      const { height } = getComputedStyle(el);
      // 表格当前高度
      const { height: Theight } = getComputedStyle(tableEl);
      // 表格高度大于滚动区域时设置滚动,类型转换
      isScroll.value = parseInt(Theight) > parseInt(height);
      // 设置滚动区域的高度
      scrollHeight.height = height;
    });
    return {
      table,
      root,
      scrollHeight,
      props,
      rows,
      isScroll,
    };
  },
});
</script>
