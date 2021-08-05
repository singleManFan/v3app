<template>
  <div data-class="real-time" class="px-2 flex flex-col mt-1">
    <info-search class="mb-6"></info-search>
    <table-panel
      :tableData="tableData"
      :toolsBar="true"
      class="flex-grow"
    ></table-panel>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import InfoSearch from 'components/InfoSearch.vue';
import TablePanel from 'components/TablePanel.vue';
export default defineComponent({
  name: 'RealTime',
  components: { TablePanel, InfoSearch },
  setup() {
    // mock 数据
    const tableData = reactive<ITableData>({
      th: [
        '序号',
        '区县',
        '街道',
        '社区',
        '小区名称',
        '是否参与垃圾分类',
        '参与分类时间',
        '小区户数',
        '是否有物业公司',
        '物业公司名称',
        '物业负责人',
        '物业负责人电话',
        '具体地址',
        '小区状态',
      ],
      data: [
        [
          {
            id: 1,
            value: '1',
          },
          {
            id: 2,
            value: '红谷滩区',
          },
          {
            id: 3,
            value: '中山路105号',
          },
          {
            id: 4,
            value: 'A社区',
          },
          {
            id: 5,
            value: '蓝海湾',
          },
          {
            id: 6,
            value: '是',
          },
          {
            id: 7,
            value: '20120812',
          },
          {
            id: 8,
            value: '100',
          },
          {
            id: 9,
            value: '是',
          },
          {
            id: 10,
            value: '华东物业',
          },
          {
            id: 11,
            value: '杨凡',
          },
          {
            id: 12,
            value: '1840dddd478',
          },
          {
            id: 13,
            value: '华东',
          },
          {
            id: 14,
            value: '正常',
          },
        ],
        [
          {
            id: 1,
            value: '1',
          },
          {
            id: 2,
            value: '红谷滩区',
          },
          {
            id: 3,
            value: '中山路105号',
          },
          {
            id: 4,
            value: 'A社区',
          },
          {
            id: 5,
            value: '蓝海湾',
          },
          {
            id: 6,
            value: '是',
          },
          {
            id: 7,
            value: '20120812',
          },
          {
            id: 8,
            value: '100',
          },
          {
            id: 9,
            value: '是',
          },
          {
            id: 10,
            value: '华东物业',
          },
          {
            id: 11,
            value: '杨凡',
          },
          {
            id: 12,
            value: '1840dddd478',
          },
          {
            id: 13,
            value: '华东',
          },
          {
            id: 14,
            value: '正常',
          },
        ],
        [
          {
            id: 1,
            value: '1',
          },
          {
            id: 2,
            value: '红谷滩区',
          },
          {
            id: 3,
            value: '中山路105号',
          },
          {
            id: 4,
            value: 'A社区',
          },
          {
            id: 5,
            value: '蓝海湾',
          },
          {
            id: 6,
            value: '是',
          },
          {
            id: 7,
            value: '20120812',
          },
          {
            id: 8,
            value: '100',
          },
          {
            id: 9,
            value: '是',
          },
          {
            id: 10,
            value: '华东物业',
          },
          {
            id: 11,
            value: '杨凡',
          },
          {
            id: 12,
            value: '1840dddd478',
          },
          {
            id: 13,
            value: '华东',
          },
          {
            id: 14,
            value: '正常',
          },
        ],
        [
          {
            id: 1,
            value: '1',
          },
          {
            id: 2,
            value: '红谷滩区',
          },
          {
            id: 3,
            value: '中山路105号',
          },
          {
            id: 4,
            value: 'A社区',
          },
          {
            id: 5,
            value: '蓝海湾',
          },
          {
            id: 6,
            value: '是',
          },
          {
            id: 7,
            value: '20120812',
          },
          {
            id: 8,
            value: '100',
          },
          {
            id: 9,
            value: '是',
          },
          {
            id: 10,
            value: '华东物业',
          },
          {
            id: 11,
            value: '杨凡',
          },
          {
            id: 12,
            value: '1840dddd478',
          },
          {
            id: 13,
            value: '华东',
          },
          {
            id: 14,
            value: '正常',
          },
        ],
        [
          {
            id: 1,
            value: '1',
          },
          {
            id: 2,
            value: '红谷滩区',
          },
          {
            id: 3,
            value: '中山路105号',
          },
          {
            id: 4,
            value: 'A社区',
          },
          {
            id: 5,
            value: '蓝海湾',
          },
          {
            id: 6,
            value: '是',
          },
          {
            id: 7,
            value: '20120812',
          },
          {
            id: 8,
            value: '100',
          },
          {
            id: 9,
            value: '是',
          },
          {
            id: 10,
            value: '华东物业',
          },
          {
            id: 11,
            value: '杨凡',
          },
          {
            id: 12,
            value: '1840dddd478',
          },
          {
            id: 13,
            value: '华东',
          },
          {
            id: 14,
            value: '正常',
          },
        ],
        [
          {
            id: 1,
            value: '1',
          },
          {
            id: 2,
            value: '红谷滩区',
          },
          {
            id: 3,
            value: '中山路105号',
          },
          {
            id: 4,
            value: 'A社区',
          },
          {
            id: 5,
            value: '蓝海湾',
          },
          {
            id: 6,
            value: '是',
          },
          {
            id: 7,
            value: '20120812',
          },
          {
            id: 8,
            value: '100',
          },
          {
            id: 9,
            value: '是',
          },
          {
            id: 10,
            value: '华东物业',
          },
          {
            id: 11,
            value: '杨凡',
          },
          {
            id: 12,
            value: '1840dddd478',
          },
          {
            id: 13,
            value: '华东',
          },
          {
            id: 14,
            value: '正常',
          },
        ],
        [
          {
            id: 1,
            value: '1',
          },
          {
            id: 2,
            value: '红谷滩区',
          },
          {
            id: 3,
            value: '中山路105号',
          },
          {
            id: 4,
            value: 'A社区',
          },
          {
            id: 5,
            value: '蓝海湾',
          },
          {
            id: 6,
            value: '是',
          },
          {
            id: 7,
            value: '20120812',
          },
          {
            id: 8,
            value: '100',
          },
          {
            id: 9,
            value: '是',
          },
          {
            id: 10,
            value: '华东物业',
          },
          {
            id: 11,
            value: '杨凡',
          },
          {
            id: 12,
            value: '1840dddd478',
          },
          {
            id: 13,
            value: '华东',
          },
          {
            id: 14,
            value: '正常',
          },
        ],
        [
          {
            id: 1,
            value: '1',
          },
          {
            id: 2,
            value: '红谷滩区',
          },
          {
            id: 3,
            value: '中山路105号',
          },
          {
            id: 4,
            value: 'A社区',
          },
          {
            id: 5,
            value: '蓝海湾',
          },
          {
            id: 6,
            value: '是',
          },
          {
            id: 7,
            value: '20120812',
          },
          {
            id: 8,
            value: '100',
          },
          {
            id: 9,
            value: '是',
          },
          {
            id: 10,
            value: '华东物业',
          },
          {
            id: 11,
            value: '杨凡',
          },
          {
            id: 12,
            value: '1840dddd478',
          },
          {
            id: 13,
            value: '华东',
          },
          {
            id: 14,
            value: '正常',
          },
        ],
        [
          {
            id: 1,
            value: '1',
          },
          {
            id: 2,
            value: '红谷滩区',
          },
          {
            id: 3,
            value: '中山路105号',
          },
          {
            id: 4,
            value: 'A社区',
          },
          {
            id: 5,
            value: '蓝海湾',
          },
          {
            id: 6,
            value: '是',
          },
          {
            id: 7,
            value: '20120812',
          },
          {
            id: 8,
            value: '100',
          },
          {
            id: 9,
            value: '是',
          },
          {
            id: 10,
            value: '华东物业',
          },
          {
            id: 11,
            value: '杨凡',
          },
          {
            id: 12,
            value: '1840dddd478',
          },
          {
            id: 13,
            value: '华东',
          },
          {
            id: 14,
            value: '正常',
          },
        ],
        [
          {
            id: 1,
            value: '1',
          },
          {
            id: 2,
            value: '红谷滩区',
          },
          {
            id: 3,
            value: '中山路105号',
          },
          {
            id: 4,
            value: 'A社区',
          },
          {
            id: 5,
            value: '蓝海湾',
          },
          {
            id: 6,
            value: '是',
          },
          {
            id: 7,
            value: '20120812',
          },
          {
            id: 8,
            value: '100',
          },
          {
            id: 9,
            value: '是',
          },
          {
            id: 10,
            value: '华东物业',
          },
          {
            id: 11,
            value: '杨凡',
          },
          {
            id: 12,
            value: '1840dddd478',
          },
          {
            id: 13,
            value: '华东',
          },
          {
            id: 14,
            value: '正常',
          },
        ],
        [
          {
            id: 1,
            value: '1',
          },
          {
            id: 2,
            value: '红谷滩区',
          },
          {
            id: 3,
            value: '中山路105号',
          },
          {
            id: 4,
            value: 'A社区',
          },
          {
            id: 5,
            value: '蓝海湾',
          },
          {
            id: 6,
            value: '是',
          },
          {
            id: 7,
            value: '20120812',
          },
          {
            id: 8,
            value: '100',
          },
          {
            id: 9,
            value: '是',
          },
          {
            id: 10,
            value: '华东物业',
          },
          {
            id: 11,
            value: '杨凡',
          },
          {
            id: 12,
            value: '1840dddd478',
          },
          {
            id: 13,
            value: '华东',
          },
          {
            id: 14,
            value: '正常',
          },
        ],
        [
          {
            id: 1,
            value: '1',
          },
          {
            id: 2,
            value: '红谷滩区',
          },
          {
            id: 3,
            value: '中山路105号',
          },
          {
            id: 4,
            value: 'A社区',
          },
          {
            id: 5,
            value: '蓝海湾',
          },
          {
            id: 6,
            value: '是',
          },
          {
            id: 7,
            value: '20120812',
          },
          {
            id: 8,
            value: '100',
          },
          {
            id: 9,
            value: '是',
          },
          {
            id: 10,
            value: '华东物业',
          },
          {
            id: 11,
            value: '杨凡',
          },
          {
            id: 12,
            value: '1840dddd478',
          },
          {
            id: 13,
            value: '华东',
          },
          {
            id: 14,
            value: '正常',
          },
        ],
        [
          {
            id: 1,
            value: '1',
          },
          {
            id: 2,
            value: '红谷滩区',
          },
          {
            id: 3,
            value: '中山路105号',
          },
          {
            id: 4,
            value: 'A社区',
          },
          {
            id: 5,
            value: '蓝海湾',
          },
          {
            id: 6,
            value: '是',
          },
          {
            id: 7,
            value: '20120812',
          },
          {
            id: 8,
            value: '100',
          },
          {
            id: 9,
            value: '是',
          },
          {
            id: 10,
            value: '华东物业',
          },
          {
            id: 11,
            value: '杨凡',
          },
          {
            id: 12,
            value: '1840dddd478',
          },
          {
            id: 13,
            value: '华东',
          },
          {
            id: 14,
            value: '正常',
          },
        ],
        [
          {
            id: 1,
            value: '1',
          },
          {
            id: 2,
            value: '红谷滩区',
          },
          {
            id: 3,
            value: '中山路105号',
          },
          {
            id: 4,
            value: 'A社区',
          },
          {
            id: 5,
            value: '蓝海湾',
          },
          {
            id: 6,
            value: '是',
          },
          {
            id: 7,
            value: '20120812',
          },
          {
            id: 8,
            value: '100',
          },
          {
            id: 9,
            value: '是',
          },
          {
            id: 10,
            value: '华东物业',
          },
          {
            id: 11,
            value: '杨凡',
          },
          {
            id: 12,
            value: '1840dddd478',
          },
          {
            id: 13,
            value: '华东',
          },
          {
            id: 14,
            value: '正常',
          },
        ],
        [
          {
            id: 1,
            value: '1',
          },
          {
            id: 2,
            value: '红谷滩区',
          },
          {
            id: 3,
            value: '中山路105号',
          },
          {
            id: 4,
            value: 'A社区',
          },
          {
            id: 5,
            value: '蓝海湾',
          },
          {
            id: 6,
            value: '是',
          },
          {
            id: 7,
            value: '20120812',
          },
          {
            id: 8,
            value: '100',
          },
          {
            id: 9,
            value: '是',
          },
          {
            id: 10,
            value: '华东物业',
          },
          {
            id: 11,
            value: '杨凡',
          },
          {
            id: 12,
            value: '1840dddd478',
          },
          {
            id: 13,
            value: '华东',
          },
          {
            id: 14,
            value: '正常',
          },
        ],
        [
          {
            id: 1,
            value: '1',
          },
          {
            id: 2,
            value: '红谷滩区',
          },
          {
            id: 3,
            value: '中山路105号',
          },
          {
            id: 4,
            value: 'A社区',
          },
          {
            id: 5,
            value: '蓝海湾',
          },
          {
            id: 6,
            value: '是',
          },
          {
            id: 7,
            value: '20120812',
          },
          {
            id: 8,
            value: '100',
          },
          {
            id: 9,
            value: '是',
          },
          {
            id: 10,
            value: '华东物业',
          },
          {
            id: 11,
            value: '杨凡',
          },
          {
            id: 12,
            value: '1840dddd478',
          },
          {
            id: 13,
            value: '华东',
          },
          {
            id: 14,
            value: '正常',
          },
        ],
        [
          {
            id: 1,
            value: '1',
          },
          {
            id: 2,
            value: '红谷滩区',
          },
          {
            id: 3,
            value: '中山路105号',
          },
          {
            id: 4,
            value: 'A社区',
          },
          {
            id: 5,
            value: '蓝海湾',
          },
          {
            id: 6,
            value: '是',
          },
          {
            id: 7,
            value: '20120812',
          },
          {
            id: 8,
            value: '100',
          },
          {
            id: 9,
            value: '是',
          },
          {
            id: 10,
            value: '华东物业',
          },
          {
            id: 11,
            value: '杨凡',
          },
          {
            id: 12,
            value: '1840dddd478',
          },
          {
            id: 13,
            value: '华东',
          },
          {
            id: 14,
            value: '正常',
          },
        ],
        [
          {
            id: 1,
            value: '1',
          },
          {
            id: 2,
            value: '红谷滩区',
          },
          {
            id: 3,
            value: '中山路105号',
          },
          {
            id: 4,
            value: 'A社区',
          },
          {
            id: 5,
            value: '蓝海湾',
          },
          {
            id: 6,
            value: '是',
          },
          {
            id: 7,
            value: '20120812',
          },
          {
            id: 8,
            value: '100',
          },
          {
            id: 9,
            value: '是',
          },
          {
            id: 10,
            value: '华东物业',
          },
          {
            id: 11,
            value: '杨凡',
          },
          {
            id: 12,
            value: '1840dddd478',
          },
          {
            id: 13,
            value: '华东',
          },
          {
            id: 14,
            value: '正常',
          },
        ],
        [
          {
            id: 1,
            value: '1',
          },
          {
            id: 2,
            value: '红谷滩区',
          },
          {
            id: 3,
            value: '中山路105号',
          },
          {
            id: 4,
            value: 'A社区',
          },
          {
            id: 5,
            value: '蓝海湾',
          },
          {
            id: 6,
            value: '是',
          },
          {
            id: 7,
            value: '20120812',
          },
          {
            id: 8,
            value: '100',
          },
          {
            id: 9,
            value: '是',
          },
          {
            id: 10,
            value: '华东物业',
          },
          {
            id: 11,
            value: '杨凡',
          },
          {
            id: 12,
            value: '1840dddd478',
          },
          {
            id: 13,
            value: '华东',
          },
          {
            id: 14,
            value: '正常',
          },
        ],
        [
          {
            id: 1,
            value: '1',
          },
          {
            id: 2,
            value: '红谷滩区',
          },
          {
            id: 3,
            value: '中山路105号',
          },
          {
            id: 4,
            value: 'A社区',
          },
          {
            id: 5,
            value: '蓝海湾',
          },
          {
            id: 6,
            value: '是',
          },
          {
            id: 7,
            value: '20120812',
          },
          {
            id: 8,
            value: '100',
          },
          {
            id: 9,
            value: '是',
          },
          {
            id: 10,
            value: '华东物业',
          },
          {
            id: 11,
            value: '杨凡',
          },
          {
            id: 12,
            value: '1840dddd478',
          },
          {
            id: 13,
            value: '华东',
          },
          {
            id: 14,
            value: '正常',
          },
        ],
        [
          {
            id: 1,
            value: '1',
          },
          {
            id: 2,
            value: '红谷滩区',
          },
          {
            id: 3,
            value: '中山路105号',
          },
          {
            id: 4,
            value: 'A社区',
          },
          {
            id: 5,
            value: '蓝海湾',
          },
          {
            id: 6,
            value: '是',
          },
          {
            id: 7,
            value: '20120812',
          },
          {
            id: 8,
            value: '100',
          },
          {
            id: 9,
            value: '是',
          },
          {
            id: 10,
            value: '华东物业',
          },
          {
            id: 11,
            value: '杨凡',
          },
          {
            id: 12,
            value: '1840dddd478',
          },
          {
            id: 13,
            value: '华东',
          },
          {
            id: 14,
            value: '正常',
          },
        ],
        [
          {
            id: 1,
            value: '1',
          },
          {
            id: 2,
            value: '红谷滩区',
          },
          {
            id: 3,
            value: '中山路105号',
          },
          {
            id: 4,
            value: 'A社区',
          },
          {
            id: 5,
            value: '蓝海湾',
          },
          {
            id: 6,
            value: '是',
          },
          {
            id: 7,
            value: '20120812',
          },
          {
            id: 8,
            value: '100',
          },
          {
            id: 9,
            value: '是',
          },
          {
            id: 10,
            value: '华东物业',
          },
          {
            id: 11,
            value: '杨凡',
          },
          {
            id: 12,
            value: '1840dddd478',
          },
          {
            id: 13,
            value: '华东',
          },
          {
            id: 14,
            value: '正常',
          },
        ],
        [
          {
            id: 1,
            value: '1',
          },
          {
            id: 2,
            value: '红谷滩区',
          },
          {
            id: 3,
            value: '中山路105号',
          },
          {
            id: 4,
            value: 'A社区',
          },
          {
            id: 5,
            value: '蓝海湾',
          },
          {
            id: 6,
            value: '是',
          },
          {
            id: 7,
            value: '20120812',
          },
          {
            id: 8,
            value: '100',
          },
          {
            id: 9,
            value: '是',
          },
          {
            id: 10,
            value: '华东物业',
          },
          {
            id: 11,
            value: '杨凡',
          },
          {
            id: 12,
            value: '1840dddd478',
          },
          {
            id: 13,
            value: '华东',
          },
          {
            id: 14,
            value: '正常',
          },
        ],
        [
          {
            id: 1,
            value: '1',
          },
          {
            id: 2,
            value: '红谷滩区',
          },
          {
            id: 3,
            value: '中山路105号',
          },
          {
            id: 4,
            value: 'A社区',
          },
          {
            id: 5,
            value: '蓝海湾',
          },
          {
            id: 6,
            value: '是',
          },
          {
            id: 7,
            value: '20120812',
          },
          {
            id: 8,
            value: '100',
          },
          {
            id: 9,
            value: '是',
          },
          {
            id: 10,
            value: '华东物业',
          },
          {
            id: 11,
            value: '杨凡',
          },
          {
            id: 12,
            value: '1840dddd478',
          },
          {
            id: 13,
            value: '华东',
          },
          {
            id: 14,
            value: '正常',
          },
        ],
        [
          {
            id: 1,
            value: '1',
          },
          {
            id: 2,
            value: '红谷滩区',
          },
          {
            id: 3,
            value: '中山路105号',
          },
          {
            id: 4,
            value: 'A社区',
          },
          {
            id: 5,
            value: '蓝海湾',
          },
          {
            id: 6,
            value: '是',
          },
          {
            id: 7,
            value: '20120812',
          },
          {
            id: 8,
            value: '100',
          },
          {
            id: 9,
            value: '是',
          },
          {
            id: 10,
            value: '华东物业',
          },
          {
            id: 11,
            value: '杨凡',
          },
          {
            id: 12,
            value: '1840dddd478',
          },
          {
            id: 13,
            value: '华东',
          },
          {
            id: 14,
            value: '正常',
          },
        ],
        [
          {
            id: 1,
            value: '1',
          },
          {
            id: 2,
            value: '红谷滩区',
          },
          {
            id: 3,
            value: '中山路105号',
          },
          {
            id: 4,
            value: 'A社区',
          },
          {
            id: 5,
            value: '蓝海湾',
          },
          {
            id: 6,
            value: '是',
          },
          {
            id: 7,
            value: '20120812',
          },
          {
            id: 8,
            value: '100',
          },
          {
            id: 9,
            value: '是',
          },
          {
            id: 10,
            value: '华东物业',
          },
          {
            id: 11,
            value: '杨凡',
          },
          {
            id: 12,
            value: '1840dddd478',
          },
          {
            id: 13,
            value: '华东',
          },
          {
            id: 14,
            value: '正常',
          },
        ],
        [
          {
            id: 1,
            value: '1',
          },
          {
            id: 2,
            value: '红谷滩区',
          },
          {
            id: 3,
            value: '中山路105号',
          },
          {
            id: 4,
            value: 'A社区',
          },
          {
            id: 5,
            value: '蓝海湾',
          },
          {
            id: 6,
            value: '是',
          },
          {
            id: 7,
            value: '20120812',
          },
          {
            id: 8,
            value: '100',
          },
          {
            id: 9,
            value: '是',
          },
          {
            id: 10,
            value: '华东物业',
          },
          {
            id: 11,
            value: '杨凡',
          },
          {
            id: 12,
            value: '1840dddd478',
          },
          {
            id: 13,
            value: '华东',
          },
          {
            id: 14,
            value: '正常',
          },
        ],
        [
          {
            id: 1,
            value: '1',
          },
          {
            id: 2,
            value: '红谷滩区',
          },
          {
            id: 3,
            value: '中山路105号',
          },
          {
            id: 4,
            value: 'A社区',
          },
          {
            id: 5,
            value: '蓝海湾',
          },
          {
            id: 6,
            value: '是',
          },
          {
            id: 7,
            value: '20120812',
          },
          {
            id: 8,
            value: '100',
          },
          {
            id: 9,
            value: '是',
          },
          {
            id: 10,
            value: '华东物业',
          },
          {
            id: 11,
            value: '杨凡',
          },
          {
            id: 12,
            value: '1840dddd478',
          },
          {
            id: 13,
            value: '华东',
          },
          {
            id: 14,
            value: '正常',
          },
        ],
        [
          {
            id: 1,
            value: '1',
          },
          {
            id: 2,
            value: '红谷滩区',
          },
          {
            id: 3,
            value: '中山路105号',
          },
          {
            id: 4,
            value: 'A社区',
          },
          {
            id: 5,
            value: '蓝海湾',
          },
          {
            id: 6,
            value: '是',
          },
          {
            id: 7,
            value: '20120812',
          },
          {
            id: 8,
            value: '100',
          },
          {
            id: 9,
            value: '是',
          },
          {
            id: 10,
            value: '华东物业',
          },
          {
            id: 11,
            value: '杨凡',
          },
          {
            id: 12,
            value: '1840dddd478',
          },
          {
            id: 13,
            value: '华东',
          },
          {
            id: 14,
            value: '正常',
          },
        ],
        [
          {
            id: 1,
            value: '1',
          },
          {
            id: 2,
            value: '红谷滩区',
          },
          {
            id: 3,
            value: '中山路105号',
          },
          {
            id: 4,
            value: 'A社区',
          },
          {
            id: 5,
            value: '蓝海湾',
          },
          {
            id: 6,
            value: '是',
          },
          {
            id: 7,
            value: '20120812',
          },
          {
            id: 8,
            value: '100',
          },
          {
            id: 9,
            value: '是',
          },
          {
            id: 10,
            value: '华东物业',
          },
          {
            id: 11,
            value: '杨凡',
          },
          {
            id: 12,
            value: '1840dddd478',
          },
          {
            id: 13,
            value: '华东',
          },
          {
            id: 14,
            value: '正常',
          },
        ],
        [
          {
            id: 1,
            value: '1',
          },
          {
            id: 2,
            value: '红谷滩区',
          },
          {
            id: 3,
            value: '中山路105号',
          },
          {
            id: 4,
            value: 'A社区',
          },
          {
            id: 5,
            value: '蓝海湾',
          },
          {
            id: 6,
            value: '是',
          },
          {
            id: 7,
            value: '20120812',
          },
          {
            id: 8,
            value: '100',
          },
          {
            id: 9,
            value: '是',
          },
          {
            id: 10,
            value: '华东物业',
          },
          {
            id: 11,
            value: '杨凡',
          },
          {
            id: 12,
            value: '1840dddd478',
          },
          {
            id: 13,
            value: '华东',
          },
          {
            id: 14,
            value: '正常',
          },
        ],
        [
          {
            id: 1,
            value: '1',
          },
          {
            id: 2,
            value: '红谷滩区',
          },
          {
            id: 3,
            value: '中山路105号',
          },
          {
            id: 4,
            value: 'A社区',
          },
          {
            id: 5,
            value: '蓝海湾',
          },
          {
            id: 6,
            value: '是',
          },
          {
            id: 7,
            value: '20120812',
          },
          {
            id: 8,
            value: '100',
          },
          {
            id: 9,
            value: '是',
          },
          {
            id: 10,
            value: '华东物业',
          },
          {
            id: 11,
            value: '杨凡',
          },
          {
            id: 12,
            value: '1840dddd478',
          },
          {
            id: 13,
            value: '华东',
          },
          {
            id: 14,
            value: '正常',
          },
        ],
        [
          {
            id: 1,
            value: '1',
          },
          {
            id: 2,
            value: '红谷滩区',
          },
          {
            id: 3,
            value: '中山路105号',
          },
          {
            id: 4,
            value: 'A社区',
          },
          {
            id: 5,
            value: '蓝海湾',
          },
          {
            id: 6,
            value: '是',
          },
          {
            id: 7,
            value: '20120812',
          },
          {
            id: 8,
            value: '100',
          },
          {
            id: 9,
            value: '是',
          },
          {
            id: 10,
            value: '华东物业',
          },
          {
            id: 11,
            value: '杨凡',
          },
          {
            id: 12,
            value: '1840dddd478',
          },
          {
            id: 13,
            value: '华东',
          },
          {
            id: 14,
            value: '正常',
          },
        ],
        [
          {
            id: 1,
            value: '1',
          },
          {
            id: 2,
            value: '红谷滩区',
          },
          {
            id: 3,
            value: '中山路105号',
          },
          {
            id: 4,
            value: 'A社区',
          },
          {
            id: 5,
            value: '蓝海湾',
          },
          {
            id: 6,
            value: '是',
          },
          {
            id: 7,
            value: '20120812',
          },
          {
            id: 8,
            value: '100',
          },
          {
            id: 9,
            value: '是',
          },
          {
            id: 10,
            value: '华东物业',
          },
          {
            id: 11,
            value: '杨凡',
          },
          {
            id: 12,
            value: '1840dddd478',
          },
          {
            id: 13,
            value: '华东',
          },
          {
            id: 14,
            value: '正常',
          },
        ],
        [
          {
            id: 1,
            value: '2',
          },
          {
            id: 2,
            value: '红谷滩区',
          },
          {
            id: 3,
            value: '中山路105号',
          },
          {
            id: 4,
            value: 'A社区',
          },
          {
            id: 5,
            value: '蓝海湾',
          },
          {
            id: 6,
            value: '是',
          },
          {
            id: 7,
            value: '20120812',
          },
          {
            id: 8,
            value: '100',
          },
          {
            id: 9,
            value: '是',
          },
          {
            id: 10,
            value: '华东物业',
          },
          {
            id: 11,
            value: '杨凡',
          },
          {
            id: 12,
            value: '1840dddd478',
          },
          {
            id: 13,
            value: '华东',
          },
          {
            id: 14,
            value: '正常',
          },
        ],
        [
          {
            id: 1,
            value: '3',
          },
          {
            id: 2,
            value: '红谷滩区',
          },
          {
            id: 3,
            value: '中山路105号',
          },
          {
            id: 4,
            value: 'A社区',
          },
          {
            id: 5,
            value: '蓝海湾',
          },
          {
            id: 6,
            value: '是',
          },
          {
            id: 7,
            value: '20120812',
          },
          {
            id: 8,
            value: '100',
          },
          {
            id: 9,
            value: '是',
          },
          {
            id: 10,
            value: '华东物业',
          },
          {
            id: 11,
            value: '杨凡',
          },
          {
            id: 12,
            value: '1840dddd478',
          },
          {
            id: 13,
            value: '华东',
          },
          {
            id: 14,
            value: '正常',
          },
        ],
        [
          {
            id: 1,
            value: '4',
          },
          {
            id: 2,
            value: '红谷滩区',
          },
          {
            id: 3,
            value: '中山路105号',
          },
          {
            id: 4,
            value: 'A社区',
          },
          {
            id: 5,
            value: '蓝海湾',
          },
          {
            id: 6,
            value: '是',
          },
          {
            id: 7,
            value: '20120812',
          },
          {
            id: 8,
            value: '100',
          },
          {
            id: 9,
            value: '是',
          },
          {
            id: 10,
            value: '华东物业',
          },
          {
            id: 11,
            value: '杨凡',
          },
          {
            id: 12,
            value: '1840dddd478',
          },
          {
            id: 13,
            value: '华东',
          },
          {
            id: 14,
            value: '正常',
          },
        ],
        [
          {
            id: 1,
            value: '5',
          },
          {
            id: 2,
            value: '红谷滩区',
          },
          {
            id: 3,
            value: '中山路105号',
          },
          {
            id: 4,
            value: 'A社区',
          },
          {
            id: 5,
            value: '蓝海湾',
          },
          {
            id: 6,
            value: '是',
          },
          {
            id: 7,
            value: '20120812',
          },
          {
            id: 8,
            value: '100',
          },
          {
            id: 9,
            value: '是',
          },
          {
            id: 10,
            value: '华东物业',
          },
          {
            id: 11,
            value: '杨凡',
          },
          {
            id: 12,
            value: '1840dddd478',
          },
          {
            id: 13,
            value: '华东',
          },
          {
            id: 14,
            value: '正常',
          },
        ],
        [
          {
            id: 1,
            value: '6',
          },
          {
            id: 2,
            value: '红谷滩区',
          },
          {
            id: 3,
            value: '中山路105号',
          },
          {
            id: 4,
            value: 'A社区',
          },
          {
            id: 5,
            value: '蓝海湾',
          },
          {
            id: 6,
            value: '是',
          },
          {
            id: 7,
            value: '20120812',
          },
          {
            id: 8,
            value: '100',
          },
          {
            id: 9,
            value: '是',
          },
          {
            id: 10,
            value: '华东物业',
          },
          {
            id: 11,
            value: '杨凡',
          },
          {
            id: 12,
            value: '1840dddd478',
          },
          {
            id: 13,
            value: '华东',
          },
          {
            id: 14,
            value: '正常',
          },
        ],
        [
          {
            id: 1,
            value: '7',
          },
          {
            id: 2,
            value: '红谷滩区',
          },
          {
            id: 3,
            value: '中山路105号',
          },
          {
            id: 4,
            value: 'A社区',
          },
          {
            id: 5,
            value: '蓝海湾',
          },
          {
            id: 6,
            value: '是',
          },
          {
            id: 7,
            value: '20120812',
          },
          {
            id: 8,
            value: '100',
          },
          {
            id: 9,
            value: '是',
          },
          {
            id: 10,
            value: '华东物业',
          },
          {
            id: 11,
            value: '杨凡',
          },
          {
            id: 12,
            value: '1840dddd478',
          },
          {
            id: 13,
            value: '华东',
          },
          {
            id: 14,
            value: '正常',
          },
        ],
        [
          {
            id: 1,
            value: '8',
          },
          {
            id: 2,
            value: '红谷滩区',
          },
          {
            id: 3,
            value: '中山路105号',
          },
          {
            id: 4,
            value: 'A社区',
          },
          {
            id: 5,
            value: '蓝海湾',
          },
          {
            id: 6,
            value: '是',
          },
          {
            id: 7,
            value: '20120812',
          },
          {
            id: 8,
            value: '100',
          },
          {
            id: 9,
            value: '是',
          },
          {
            id: 10,
            value: '华东物业',
          },
          {
            id: 11,
            value: '杨凡',
          },
          {
            id: 12,
            value: '1840dddd478',
          },
          {
            id: 13,
            value: '华东',
          },
          {
            id: 14,
            value: '正常',
          },
        ],
        [
          {
            id: 1,
            value: '9',
          },
          {
            id: 2,
            value: '红谷滩区',
          },
          {
            id: 3,
            value: '中山路105号',
          },
          {
            id: 4,
            value: 'A社区',
          },
          {
            id: 5,
            value: '蓝海湾',
          },
          {
            id: 6,
            value: '是',
          },
          {
            id: 7,
            value: '20120812',
          },
          {
            id: 8,
            value: '100',
          },
          {
            id: 9,
            value: '是',
          },
          {
            id: 10,
            value: '华东物业',
          },
          {
            id: 11,
            value: '杨凡',
          },
          {
            id: 12,
            value: '1840dddd478',
          },
          {
            id: 13,
            value: '华东',
          },
          {
            id: 14,
            value: '正常',
          },
        ],
        [
          {
            id: 1,
            value: '10',
          },
          {
            id: 2,
            value: '红谷滩区',
          },
          {
            id: 3,
            value: '中山路105号',
          },
          {
            id: 4,
            value: 'A社区',
          },
          {
            id: 5,
            value: '蓝海湾',
          },
          {
            id: 6,
            value: '是',
          },
          {
            id: 7,
            value: '20120812',
          },
          {
            id: 8,
            value: '100',
          },
          {
            id: 9,
            value: '是',
          },
          {
            id: 10,
            value: '华东物业',
          },
          {
            id: 11,
            value: '杨凡',
          },
          {
            id: 12,
            value: '1840dddd478',
          },
          {
            id: 13,
            value: '华东',
          },
          {
            id: 14,
            value: '正常',
          },
        ],
        [
          {
            id: 1,
            value: '11',
          },
          {
            id: 2,
            value: '红谷滩区',
          },
          {
            id: 3,
            value: '中山路105号',
          },
          {
            id: 4,
            value: 'A社区',
          },
          {
            id: 5,
            value: '蓝海湾',
          },
          {
            id: 6,
            value: '是',
          },
          {
            id: 7,
            value: '20120812',
          },
          {
            id: 8,
            value: '100',
          },
          {
            id: 9,
            value: '是',
          },
          {
            id: 10,
            value: '华东物业',
          },
          {
            id: 11,
            value: '杨凡',
          },
          {
            id: 12,
            value: '1840dddd478',
          },
          {
            id: 13,
            value: '华东',
          },
          {
            id: 14,
            value: '正常',
          },
        ],
        [
          {
            id: 1,
            value: '12',
          },
          {
            id: 2,
            value: '红谷滩区',
          },
          {
            id: 3,
            value: '中山路105号',
          },
          {
            id: 4,
            value: 'A社区',
          },
          {
            id: 5,
            value: '蓝海湾',
          },
          {
            id: 6,
            value: '是',
          },
          {
            id: 7,
            value: '20120812',
          },
          {
            id: 8,
            value: '100',
          },
          {
            id: 9,
            value: '是',
          },
          {
            id: 10,
            value: '华东物业',
          },
          {
            id: 11,
            value: '杨凡',
          },
          {
            id: 12,
            value: '1840dddd478',
          },
          {
            id: 13,
            value: '华东',
          },
          {
            id: 14,
            value: '正常',
          },
        ],
        [
          {
            id: 1,
            value: '13',
          },
          {
            id: 2,
            value: '红谷滩区',
          },
          {
            id: 3,
            value: '中山路105号',
          },
          {
            id: 4,
            value: 'A社区',
          },
          {
            id: 5,
            value: '蓝海湾',
          },
          {
            id: 6,
            value: '是',
          },
          {
            id: 7,
            value: '20120812',
          },
          {
            id: 8,
            value: '100',
          },
          {
            id: 9,
            value: '是',
          },
          {
            id: 10,
            value: '华东物业',
          },
          {
            id: 11,
            value: '杨凡',
          },
          {
            id: 12,
            value: '1840dddd478',
          },
          {
            id: 13,
            value: '华东',
          },
          {
            id: 14,
            value: '正常',
          },
        ],
        [
          {
            id: 1,
            value: '14',
          },
          {
            id: 2,
            value: '红谷滩区',
          },
          {
            id: 3,
            value: '中山路105号',
          },
          {
            id: 4,
            value: 'A社区',
          },
          {
            id: 5,
            value: '蓝海湾',
          },
          {
            id: 6,
            value: '是',
          },
          {
            id: 7,
            value: '20120812',
          },
          {
            id: 8,
            value: '100',
          },
          {
            id: 9,
            value: '是',
          },
          {
            id: 10,
            value: '华东物业',
          },
          {
            id: 11,
            value: '杨凡',
          },
          {
            id: 12,
            value: '1840dddd478',
          },
          {
            id: 13,
            value: '华东',
          },
          {
            id: 14,
            value: '正常',
          },
        ],
        [
          {
            id: 1,
            value: '15',
          },
          {
            id: 2,
            value: '红谷滩区',
          },
          {
            id: 3,
            value: '中山路105号',
          },
          {
            id: 4,
            value: 'A社区',
          },
          {
            id: 5,
            value: '蓝海湾',
          },
          {
            id: 6,
            value: '是',
          },
          {
            id: 7,
            value: '20120812',
          },
          {
            id: 8,
            value: '100',
          },
          {
            id: 9,
            value: '是',
          },
          {
            id: 10,
            value: '华东物业',
          },
          {
            id: 11,
            value: '杨凡',
          },
          {
            id: 12,
            value: '1840dddd478',
          },
          {
            id: 13,
            value: '华东',
          },
          {
            id: 14,
            value: '正常',
          },
        ],
        [
          {
            id: 1,
            value: '16',
          },
          {
            id: 2,
            value: '红谷滩区',
          },
          {
            id: 3,
            value: '中山路105号',
          },
          {
            id: 4,
            value: 'A社区',
          },
          {
            id: 5,
            value: '蓝海湾',
          },
          {
            id: 6,
            value: '是',
          },
          {
            id: 7,
            value: '20120812',
          },
          {
            id: 8,
            value: '100',
          },
          {
            id: 9,
            value: '是',
          },
          {
            id: 10,
            value: '华东物业',
          },
          {
            id: 11,
            value: '杨凡',
          },
          {
            id: 12,
            value: '1840dddd478',
          },
          {
            id: 13,
            value: '华东',
          },
          {
            id: 14,
            value: '正常',
          },
        ],
        [
          {
            id: 1,
            value: '17',
          },
          {
            id: 2,
            value: '红谷滩区',
          },
          {
            id: 3,
            value: '中山路105号',
          },
          {
            id: 4,
            value: 'A社区',
          },
          {
            id: 5,
            value: '蓝海湾',
          },
          {
            id: 6,
            value: '是',
          },
          {
            id: 7,
            value: '20120812',
          },
          {
            id: 8,
            value: '100',
          },
          {
            id: 9,
            value: '是',
          },
          {
            id: 10,
            value: '华东物业',
          },
          {
            id: 11,
            value: '杨凡',
          },
          {
            id: 12,
            value: '1840dddd478',
          },
          {
            id: 13,
            value: '华东',
          },
          {
            id: 14,
            value: '正常',
          },
        ],
        [
          {
            id: 1,
            value: '1',
          },
          {
            id: 2,
            value: '红谷滩区',
          },
          {
            id: 3,
            value: '中山路105号',
          },
          {
            id: 4,
            value: 'A社区',
          },
          {
            id: 5,
            value: '蓝海湾',
          },
          {
            id: 6,
            value: '是',
          },
          {
            id: 7,
            value: '20120812',
          },
          {
            id: 8,
            value: '100',
          },
          {
            id: 9,
            value: '是',
          },
          {
            id: 10,
            value: '华东物业',
          },
          {
            id: 11,
            value: '杨凡',
          },
          {
            id: 12,
            value: '1840dddd478',
          },
          {
            id: 13,
            value: '华东',
          },
          {
            id: 14,
            value: '正常',
          },
        ],
        [
          {
            id: 1,
            value: '1',
          },
          {
            id: 2,
            value: '红谷滩区',
          },
          {
            id: 3,
            value: '中山路105号',
          },
          {
            id: 4,
            value: 'A社区',
          },
          {
            id: 5,
            value: '蓝海湾',
          },
          {
            id: 6,
            value: '是',
          },
          {
            id: 7,
            value: '20120812',
          },
          {
            id: 8,
            value: '100',
          },
          {
            id: 9,
            value: '是',
          },
          {
            id: 10,
            value: '华东物业',
          },
          {
            id: 11,
            value: '杨凡',
          },
          {
            id: 12,
            value: '1840dddd478',
          },
          {
            id: 13,
            value: '华东',
          },
          {
            id: 14,
            value: '正常',
          },
        ],
        [
          {
            id: 1,
            value: '1',
          },
          {
            id: 2,
            value: '红谷滩区',
          },
          {
            id: 3,
            value: '中山路105号',
          },
          {
            id: 4,
            value: 'A社区',
          },
          {
            id: 5,
            value: '蓝海湾',
          },
          {
            id: 6,
            value: '是',
          },
          {
            id: 7,
            value: '20120812',
          },
          {
            id: 8,
            value: '100',
          },
          {
            id: 9,
            value: '是',
          },
          {
            id: 10,
            value: '华东物业',
          },
          {
            id: 11,
            value: '杨凡',
          },
          {
            id: 12,
            value: '1840dddd478',
          },
          {
            id: 13,
            value: '华东',
          },
          {
            id: 14,
            value: '正常',
          },
        ],
        [
          {
            id: 1,
            value: '18',
          },
          {
            id: 2,
            value: '红谷滩区',
          },
          {
            id: 3,
            value: '中山路105号',
          },
          {
            id: 4,
            value: 'A社区',
          },
          {
            id: 5,
            value: '蓝海湾',
          },
          {
            id: 6,
            value: '是',
          },
          {
            id: 7,
            value: '20120812',
          },
          {
            id: 8,
            value: '100',
          },
          {
            id: 9,
            value: '是',
          },
          {
            id: 10,
            value: '华东物业',
          },
          {
            id: 11,
            value: '我是最后一条数据',
          },
          {
            id: 12,
            value: '1840dddd478',
          },
          {
            id: 13,
            value: '华东',
          },
          {
            id: 14,
            value: '正常',
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
