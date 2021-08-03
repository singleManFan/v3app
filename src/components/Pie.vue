<template>
  <div data-class="pie" ref="el" style="width: 100px; height: 100px"></div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import * as echarts from 'echarts';
export default defineComponent({
  name: 'Pie',
  setup() {
    const el = ref<HTMLElement | null>(null);

    onMounted(() => {
      const dom = el.value as HTMLElement;
      const myChart = echarts.init(dom);

      myChart.setOption({
        title: {
          text: 'ECharts 入门示例',
        },
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20],
          },
        ],
      });
    });

    return {
      el,
    };
  },
});
</script>
