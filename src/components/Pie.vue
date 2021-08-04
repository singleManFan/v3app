<template>
  <div data-class="pie" class="w-full h-full relative">
    <div class="text-primary absolute top-0">{{ name }}</div>
    <div data-class="chart" ref="el" class="w-full h-full"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
// import * as echarts from 'echarts';
import * as echarts from 'echarts/core';
import { PieChart } from 'echarts/charts';
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  VisualMapComponent,
} from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  PieChart,
  CanvasRenderer,
  VisualMapComponent,
]);
export default defineComponent({
  name: 'Pie',
  props: {
    name: {
      type: String,
      required: true,
    },
    option: {
      type: Object, // 自动推导出类型
      required: true,
    },
  },
  setup(props) {
    const el = ref<HTMLElement | null>(null);

    onMounted(() => {
      const dom = el.value as HTMLElement;
      const myChart = echarts.init(dom);

      myChart.setOption(props.option);
    });

    return {
      el,
      name: props.name,
    };
  },
});
</script>
