<template>
  <div data-class="real-time" class="px-2 flex flex-col mt-1">
    <real-time-search class="mb-6"></real-time-search>
    <table-panel :tableData="tableData" class="flex-grow"></table-panel>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import RealTimeSearch from 'components/RealTimeSearch.vue';
import TablePanel from 'components/TablePanel.vue';
export default defineComponent({
  name: 'RealTime',
  components: { TablePanel, RealTimeSearch },
  setup() {
    // mock
    const tableData = reactive<ITableData>({
      th: [
        '序号',
        '区域',
        '街道',
        '社区',
        '小区',
        '楼号',
        '户主',
        '垃圾类型',
        '重量(KG)',
        '优',
        '良',
        '中',
        '差',
        '评价分',
        '积分',
        '照片',
        '上报人',
        '时间',
        '操作',
      ],
      data: [
        [
          {
            id: 0,
            value: '1',
          },
          {
            id: 1,
            value: '红谷滩区',
          },
          {
            id: 2,
            value: '中山路105号',
          },
          {
            id: 3,
            value: '富农社区',
          },
          {
            id: 4,
            value: '蓝海湾',
          },
          {
            id: 5,
            value: '10',
          },
          {
            id: 6,
            value: '杨帆',
          },
          {
            id: 6,
            value: '厨余垃圾',
          },

          {
            id: 6,
            value: '200',
          },
          {
            id: 6,
            value: '优',
          },
          {
            id: 6,
            value: '',
          },
          {
            id: 6,
            value: '',
          },
          {
            id: 6,
            value: '',
          },
          {
            id: 6,
            value: '10',
          },
          {
            id: 6,
            value: '8',
          },
          {
            id: 6,
            value: '无照片',
          },
          {
            id: 6,
            value: '杨帆',
          },
          {
            id: 6,
            value: '20210805',
          },
          {
            id: 6,
            value: '修改',
          },
        ],
        [
          {
            id: 0,
            value: '2',
          },
          {
            id: 1,
            value: '红谷滩区',
          },
          {
            id: 2,
            value: '中山路105号',
          },
          {
            id: 3,
            value: '富农社区',
          },
          {
            id: 4,
            value: '蓝海湾',
          },
          {
            id: 5,
            value: '10',
          },
          {
            id: 6,
            value: '杨帆',
          },
          {
            id: 6,
            value: '厨余垃圾',
          },

          {
            id: 6,
            value: '200',
          },
          {
            id: 6,
            value: '优',
          },
          {
            id: 6,
            value: '',
          },
          {
            id: 6,
            value: '',
          },
          {
            id: 6,
            value: '',
          },
          {
            id: 6,
            value: '10',
          },
          {
            id: 6,
            value: '8',
          },
          {
            id: 6,
            value: '无照片',
          },
          {
            id: 6,
            value: '杨帆',
          },
          {
            id: 6,
            value: '20210805',
          },
          {
            id: 6,
            value: '修改',
          },
        ],
        [
          {
            id: 0,
            value: '3',
          },
          {
            id: 1,
            value: '红谷滩区',
          },
          {
            id: 2,
            value: '中山路105号',
          },
          {
            id: 3,
            value: '富农社区',
          },
          {
            id: 4,
            value: '蓝海湾',
          },
          {
            id: 5,
            value: '10',
          },
          {
            id: 6,
            value: '杨帆',
          },
          {
            id: 6,
            value: '厨余垃圾',
          },

          {
            id: 6,
            value: '200',
          },
          {
            id: 6,
            value: '优',
          },
          {
            id: 6,
            value: '',
          },
          {
            id: 6,
            value: '',
          },
          {
            id: 6,
            value: '',
          },
          {
            id: 6,
            value: '10',
          },
          {
            id: 6,
            value: '8',
          },
          {
            id: 6,
            value: '无照片',
          },
          {
            id: 6,
            value: '杨帆',
          },
          {
            id: 6,
            value: '20210805',
          },
          {
            id: 6,
            value: '修改',
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
