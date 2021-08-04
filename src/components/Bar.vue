<template>
  <div data-class="bar" class="w-full h-full relative">
    <h2 class="text-center absolute text-primary -top-6 w-full">
      厨余垃圾月统计
    </h2>
    <div ref="root" class="w-full h-full"></div>
    <div
      class="text-center w-full absolute text-primary bottom-4 justify-center"
    >
      <div class="lump">单位（KG）</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
// import * as echarts from 'echarts';
import * as echarts from 'echarts/core';
import { BarChart } from 'echarts/charts';
import {
  TooltipComponent,
  GridComponent,
  LegendComponent,
  DatasetComponent,
} from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
echarts.use([
  TooltipComponent,
  GridComponent,
  BarChart,
  LegendComponent,
  DatasetComponent,
  CanvasRenderer,
]);
export default defineComponent({
  name: 'Bar',
  setup() {
    // 模板索引
    const root = ref<HTMLElement | null>(null);

    onMounted(() => {
      const dom = root.value as HTMLElement;
      const myChart = echarts.init(dom);

      let option;

      let dataAxis = [
        '点',
        '击',
        '柱',
        '子',
        '或',
        '者',
        '两',
        '指',
        '在',
        '触',
        '屏',
        '上',
        '滑',
        '动',
        '能',
        '够',
        '自',
        '动',
        '缩',
        '放',
      ];
      var data = [
        220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122,
        133, 334, 198, 123, 125, 220,
      ];

      option = {
        grid: {
          top: '5%',
          right: '5%',
          bottom: '26%',
          left: '5%',
        },
        xAxis: {
          data: dataAxis,
          axisLabel: {
            // inside: true,
            textStyle: {
              color: '#fff',
            },
          },
          axisTick: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          z: 10,
        },
        yAxis: {
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            textStyle: {
              color: '#fff',
            },
          },
        },
        dataZoom: [
          {
            type: 'inside',
          },
        ],
        series: [
          {
            type: 'bar',
            showBackground: true,
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: '#3876cd' },
                { offset: 0.5, color: '#45b4e7' },
                { offset: 1, color: '#54ffff' },
              ]),
            },
            emphasis: {
              itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: '#2378f7' },
                  { offset: 0.7, color: '#2378f7' },
                  { offset: 1, color: '#83bff6' },
                ]),
              },
            },
            data: data,
          },
        ],
      };

      myChart.setOption(option);
    });

    return {
      root,
    };
  },
});
</script>
