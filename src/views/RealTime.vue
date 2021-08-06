<template>
  <div data-class="real-time" class="px-2 flex flex-col mt-1">
    <real-time-search class="mb-6"></real-time-search>
    <table-panel :tableData="tableData" class="flex-grow"></table-panel>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import RealTimeSearch from 'components/RealTimeSearch.vue';
import TablePanel from 'components/TablePanel.vue';
export default defineComponent({
  name: 'RealTime',
  components: { TablePanel, RealTimeSearch },
  setup() {
    // mock 数据
    const tableData = ref<ITableData>([]);

    tableData.value = dataConstructor();

    // 生成数据
    function dataConstructor(amount = 100) {
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
