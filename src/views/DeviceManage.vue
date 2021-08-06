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
            <table-panel :tableData="tableData" class="h-full"></table-panel>
          </div>
        </section>
      </section>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import SideBar from 'components/SideBar.vue';
import DevicesSearch from 'components/DevicesSearch.vue';
import TablePanel from 'components/TablePanel.vue';
export default defineComponent({
  name: 'DeviceManage',
  components: { SideBar, DevicesSearch, TablePanel },
  setup() {
    // mock 数据
    const tableData = ref<ITableData>([]);

    tableData.value = dataConstructor();

    // 生成数据
    function dataConstructor(amount = 200) {
      let constructedArr = [];
      // 1000行
      for (let i = 0; i < Number(amount); i++) {
        const temp = [];
        for (let j = 0; j < 7; j++) {
          temp.push({
            value: `${randomColor()}`,
            id: Math.random() * 100 + i + j,
          });
        }
        constructedArr.push(temp);
      }
      constructedArr.unshift([
        {
          id: 1,
          value: '我是表头11111111',
        },
        {
          id: 1,
          value: '我是表头22332323',
        },
        {
          id: 1,
          value: '我是表头3424213213',
        },
        {
          id: 1,
          value: '我是表头4421312312',
        },
        {
          id: 1,
          value: '我是表头54123213',
        },
        {
          id: 1,
          value: '我是表头64123123',
        },
        {
          id: 1,
          value: '我是表头741313',
        },
      ]);
      return constructedArr;
    }

    function randomColor() {
      return Math.floor(Math.random() * 16777215).toString(16);
    }
    return {
      tableData,
    };
  },
});
</script>
