<template>
  <div data-class="search" class="mt-4">
    <section class="flex h-full">
      <side-bar class="mr-4"></side-bar>
      <section class="w-8/12 h-full">
        <!-- 这里可分割为动态组件 -->
        <header class="t-bg px-2">设备台账</header>
        <section class="h-5/6 t-bg-p flex flex-col">
          <devices-search class="mb-2"></devices-search>
          <div class="px-4 flex-grow">
            <table-panel :tableData="tableData" class="w-4/5"></table-panel>
          </div>
        </section>
      </section>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import SideBar from 'components/SideBar.vue';
import DevicesSearch from 'components/DevicesSearch.vue';
import TablePanel from 'components/TablePanel.vue';
export default defineComponent({
  name: 'DeviceManage',
  components: { SideBar, DevicesSearch, TablePanel },
  setup() {
    // mokc
    const tableData = reactive<ITableData>({
      th: ['序号', '收集人', '负责区域', '设备ID', '电量状态'],
      data: [
        [
          {
            id: 1,
            value: '1',
          },
          {
            id: 1,
            value: '杨帆',
          },
          {
            id: 1,
            value: '红谷滩小区',
          },
          {
            id: 1,
            value: 'xd184114',
          },
          {
            id: 1,
            value: '90%',
          },
        ],
        [
          {
            id: 1,
            value: '1',
          },
          {
            id: 1,
            value: '杨帆',
          },
          {
            id: 1,
            value: '红谷滩小区',
          },
          {
            id: 1,
            value: 'xd184114',
          },
          {
            id: 1,
            value: '90%',
          },
        ],
        [
          {
            id: 1,
            value: '1',
          },
          {
            id: 1,
            value: '杨帆',
          },
          {
            id: 1,
            value: '红谷滩小区',
          },
          {
            id: 1,
            value: 'xd184114',
          },
          {
            id: 1,
            value: '90%',
          },
        ],
        [
          {
            id: 1,
            value: '1',
          },
          {
            id: 1,
            value: '杨帆',
          },
          {
            id: 1,
            value: '红谷滩小区',
          },
          {
            id: 1,
            value: 'xd184114',
          },
          {
            id: 1,
            value: '90%',
          },
        ],
        [
          {
            id: 1,
            value: '1',
          },
          {
            id: 1,
            value: '杨帆',
          },
          {
            id: 1,
            value: '红谷滩小区',
          },
          {
            id: 1,
            value: 'xd184114',
          },
          {
            id: 1,
            value: '90%',
          },
        ],
        [
          {
            id: 1,
            value: '1',
          },
          {
            id: 1,
            value: '杨帆',
          },
          {
            id: 1,
            value: '红谷滩小区',
          },
          {
            id: 1,
            value: 'xd184114',
          },
          {
            id: 1,
            value: '90%',
          },
        ],
        [
          {
            id: 1,
            value: '1',
          },
          {
            id: 1,
            value: '杨帆',
          },
          {
            id: 1,
            value: '红谷滩小区',
          },
          {
            id: 1,
            value: 'xd184114',
          },
          {
            id: 1,
            value: '90%',
          },
        ],
        [
          {
            id: 1,
            value: '1',
          },
          {
            id: 1,
            value: '杨帆',
          },
          {
            id: 1,
            value: '红谷滩小区',
          },
          {
            id: 1,
            value: 'xd184114',
          },
          {
            id: 1,
            value: '90%',
          },
        ],
        [
          {
            id: 1,
            value: '1',
          },
          {
            id: 1,
            value: '杨帆',
          },
          {
            id: 1,
            value: '红谷滩小区',
          },
          {
            id: 1,
            value: 'xd184114',
          },
          {
            id: 1,
            value: '90%',
          },
        ],
        [
          {
            id: 1,
            value: '1',
          },
          {
            id: 1,
            value: '杨帆',
          },
          {
            id: 1,
            value: '红谷滩小区',
          },
          {
            id: 1,
            value: 'xd184114',
          },
          {
            id: 1,
            value: '90%',
          },
        ],
        [
          {
            id: 1,
            value: '1',
          },
          {
            id: 1,
            value: '杨帆',
          },
          {
            id: 1,
            value: '红谷滩小区',
          },
          {
            id: 1,
            value: 'xd184114',
          },
          {
            id: 1,
            value: '90%',
          },
        ],
        [
          {
            id: 1,
            value: '1',
          },
          {
            id: 1,
            value: '杨帆',
          },
          {
            id: 1,
            value: '红谷滩小区',
          },
          {
            id: 1,
            value: 'xd184114',
          },
          {
            id: 1,
            value: '90%',
          },
        ],
        [
          {
            id: 1,
            value: '1',
          },
          {
            id: 1,
            value: '杨帆',
          },
          {
            id: 1,
            value: '红谷滩小区',
          },
          {
            id: 1,
            value: 'xd184114',
          },
          {
            id: 1,
            value: '90%',
          },
        ],
        [
          {
            id: 1,
            value: '1',
          },
          {
            id: 1,
            value: '杨帆',
          },
          {
            id: 1,
            value: '红谷滩小区',
          },
          {
            id: 1,
            value: 'xd184114',
          },
          {
            id: 1,
            value: '90%',
          },
        ],
        [
          {
            id: 1,
            value: '1',
          },
          {
            id: 1,
            value: '杨帆',
          },
          {
            id: 1,
            value: '红谷滩小区',
          },
          {
            id: 1,
            value: 'xd184114',
          },
          {
            id: 1,
            value: '90%',
          },
        ],
        [
          {
            id: 1,
            value: '1',
          },
          {
            id: 1,
            value: '杨帆',
          },
          {
            id: 1,
            value: '红谷滩小区',
          },
          {
            id: 1,
            value: 'xd184114',
          },
          {
            id: 1,
            value: '90%',
          },
        ],
        [
          {
            id: 1,
            value: '1',
          },
          {
            id: 1,
            value: '杨帆',
          },
          {
            id: 1,
            value: '红谷滩小区',
          },
          {
            id: 1,
            value: 'xd184114',
          },
          {
            id: 1,
            value: '90%',
          },
        ],
        [
          {
            id: 1,
            value: '1',
          },
          {
            id: 1,
            value: '杨帆',
          },
          {
            id: 1,
            value: '红谷滩小区',
          },
          {
            id: 1,
            value: 'xd184114',
          },
          {
            id: 1,
            value: '90%',
          },
        ],
        [
          {
            id: 1,
            value: '1',
          },
          {
            id: 1,
            value: '杨帆',
          },
          {
            id: 1,
            value: '红谷滩小区',
          },
          {
            id: 1,
            value: 'xd184114',
          },
          {
            id: 1,
            value: '90%',
          },
        ],
        [
          {
            id: 1,
            value: '1',
          },
          {
            id: 1,
            value: '杨帆',
          },
          {
            id: 1,
            value: '红谷滩小区',
          },
          {
            id: 1,
            value: 'xd184114',
          },
          {
            id: 1,
            value: '90%',
          },
        ],
        [
          {
            id: 1,
            value: '1',
          },
          {
            id: 1,
            value: '杨帆',
          },
          {
            id: 1,
            value: '红谷滩小区',
          },
          {
            id: 1,
            value: 'xd184114',
          },
          {
            id: 1,
            value: '90%',
          },
        ],
        [
          {
            id: 1,
            value: '1',
          },
          {
            id: 1,
            value: '杨帆',
          },
          {
            id: 1,
            value: '红谷滩小区',
          },
          {
            id: 1,
            value: 'xd184114',
          },
          {
            id: 1,
            value: '90%',
          },
        ],
        [
          {
            id: 1,
            value: '1',
          },
          {
            id: 1,
            value: '杨帆',
          },
          {
            id: 1,
            value: '杨帆',
          },
          {
            id: 1,
            value: 'xd184114',
          },
          {
            id: 1,
            value: '90%',
          },
        ],
        [
          {
            id: 1,
            value: '1',
          },
          {
            id: 1,
            value: '杨帆',
          },
          {
            id: 1,
            value: '杨帆',
          },
          {
            id: 1,
            value: 'xd184114',
          },
          {
            id: 1,
            value: '90%',
          },
        ],
        [
          {
            id: 1,
            value: '1',
          },
          {
            id: 1,
            value: '杨帆',
          },
          {
            id: 1,
            value: '杨帆',
          },
          {
            id: 1,
            value: 'xd184114',
          },
          {
            id: 1,
            value: '90%',
          },
        ],
        [
          {
            id: 1,
            value: '1',
          },
          {
            id: 1,
            value: '杨帆',
          },
          {
            id: 1,
            value: '杨帆',
          },
          {
            id: 1,
            value: 'xd184114',
          },
          {
            id: 1,
            value: '90%',
          },
        ],
        [
          {
            id: 1,
            value: '1',
          },
          {
            id: 1,
            value: '杨帆',
          },
          {
            id: 1,
            value: '杨帆',
          },
          {
            id: 1,
            value: 'xd184114',
          },
          {
            id: 1,
            value: '90%',
          },
        ],
        [
          {
            id: 1,
            value: '1',
          },
          {
            id: 1,
            value: '杨帆',
          },
          {
            id: 1,
            value: '杨帆',
          },
          {
            id: 1,
            value: 'xd184114',
          },
          {
            id: 1,
            value: '90%',
          },
        ],
        [
          {
            id: 1,
            value: '1',
          },
          {
            id: 1,
            value: '杨帆',
          },
          {
            id: 1,
            value: '杨帆',
          },
          {
            id: 1,
            value: 'xd184114',
          },
          {
            id: 1,
            value: '90%',
          },
        ],
        [
          {
            id: 1,
            value: '1',
          },
          {
            id: 1,
            value: '杨帆',
          },
          {
            id: 1,
            value: '杨帆',
          },
          {
            id: 1,
            value: 'xd184114',
          },
          {
            id: 1,
            value: '90%',
          },
        ],
        [
          {
            id: 1,
            value: '1',
          },
          {
            id: 1,
            value: '杨帆',
          },
          {
            id: 1,
            value: '杨帆',
          },
          {
            id: 1,
            value: 'xd184114',
          },
          {
            id: 1,
            value: '90%',
          },
        ],
        [
          {
            id: 1,
            value: '1',
          },
          {
            id: 1,
            value: '杨帆',
          },
          {
            id: 1,
            value: '杨帆',
          },
          {
            id: 1,
            value: 'xd184114',
          },
          {
            id: 1,
            value: '90%',
          },
        ],
        [
          {
            id: 1,
            value: '1',
          },
          {
            id: 1,
            value: '杨帆',
          },
          {
            id: 1,
            value: '杨帆',
          },
          {
            id: 1,
            value: 'xd184114',
          },
          {
            id: 1,
            value: '90%',
          },
        ],
        [
          {
            id: 1,
            value: '1',
          },
          {
            id: 1,
            value: '杨帆',
          },
          {
            id: 1,
            value: '杨帆',
          },
          {
            id: 1,
            value: 'xd184114',
          },
          {
            id: 1,
            value: '90%',
          },
        ],
        [
          {
            id: 1,
            value: '1',
          },
          {
            id: 1,
            value: '杨帆',
          },
          {
            id: 1,
            value: '杨帆',
          },
          {
            id: 1,
            value: 'xd184114',
          },
          {
            id: 1,
            value: '90%',
          },
        ],
        [
          {
            id: 1,
            value: '1',
          },
          {
            id: 1,
            value: '杨帆',
          },
          {
            id: 1,
            value: '杨帆',
          },
          {
            id: 1,
            value: 'xd184114',
          },
          {
            id: 1,
            value: '90%',
          },
        ],
        [
          {
            id: 1,
            value: '1',
          },
          {
            id: 1,
            value: '杨帆',
          },
          {
            id: 1,
            value: '杨帆',
          },
          {
            id: 1,
            value: 'xd184114',
          },
          {
            id: 1,
            value: '90%',
          },
        ],
        [
          {
            id: 1,
            value: '1',
          },
          {
            id: 1,
            value: '杨帆',
          },
          {
            id: 1,
            value: '杨帆',
          },
          {
            id: 1,
            value: 'xd184114',
          },
          {
            id: 1,
            value: '90%',
          },
        ],
        [
          {
            id: 1,
            value: '1',
          },
          {
            id: 1,
            value: '杨帆',
          },
          {
            id: 1,
            value: '杨帆',
          },
          {
            id: 1,
            value: 'xd184114',
          },
          {
            id: 1,
            value: '90%',
          },
        ],
        [
          {
            id: 1,
            value: '1',
          },
          {
            id: 1,
            value: '杨帆',
          },
          {
            id: 1,
            value: '杨帆',
          },
          {
            id: 1,
            value: 'xd184114',
          },
          {
            id: 1,
            value: '90%',
          },
        ],
        [
          {
            id: 1,
            value: '1',
          },
          {
            id: 1,
            value: '杨帆',
          },
          {
            id: 1,
            value: '杨帆',
          },
          {
            id: 1,
            value: 'xd184114',
          },
          {
            id: 1,
            value: '90%',
          },
        ],
        [
          {
            id: 1,
            value: '1',
          },
          {
            id: 1,
            value: '杨帆',
          },
          {
            id: 1,
            value: '杨帆',
          },
          {
            id: 1,
            value: 'xd184114',
          },
          {
            id: 1,
            value: '90%',
          },
        ],
        [
          {
            id: 1,
            value: '1',
          },
          {
            id: 1,
            value: '杨帆',
          },
          {
            id: 1,
            value: '杨帆',
          },
          {
            id: 1,
            value: 'xd184114',
          },
          {
            id: 1,
            value: '90%',
          },
        ],
        [
          {
            id: 1,
            value: '1',
          },
          {
            id: 1,
            value: '杨帆',
          },
          {
            id: 1,
            value: '这是最后一条数据',
          },
          {
            id: 1,
            value: 'xd184114',
          },
          {
            id: 1,
            value: '0%',
          },
        ],
      ],
    });
    return {
      tableData,
    };
  },
});
</script>
