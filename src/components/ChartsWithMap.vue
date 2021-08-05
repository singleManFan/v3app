<template>
  <section data-class="chats-with-map" class="pt-1 flex justify-between">
    <!-- 左边饼图 -->
    <section data-class="left-bin">
      <div style="width: 30vh; height: 30vh">
        <pie :name="name" :option="option"></pie>
      </div>
      <div style="width: 30vh; height: 30vh">
        <pie :name="name" :option="option"></pie>
      </div>
    </section>
    <!-- 热力地图 -->
    <section data-lcass="heatmap" class="flex-grow pr-10">
      <div
        ref="root"
        class="relative"
        id="container"
        style="width: 100%; height: 54vh"
      ></div>
    </section>
    <!-- 右边饼图 -->
    <section data-class="right-bin">
      <div style="width: 30vh; height: 30vh">
        <pie :name="name" :option="option"></pie>
      </div>
      <div style="width: 30vh; height: 30vh">
        <pie :name="name" :option="option"></pie>
      </div>
    </section>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { fetchTracksData } from 'utils';
import * as echarts from 'echarts/core';
import Pie from './Pie.vue';
// 按需引入
import {
  ScatterChart,
  ScatterSeriesOption,
  EffectScatterChart,
  EffectScatterSeriesOption,
  HeatmapChart,
} from 'echarts/charts';
import { TooltipComponent, TitleComponentOption } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
// @ts-ignore
import 'echarts-extension-amap';
import {
  install as AMapComponent,
  AMapComponentOption,
} from 'echarts-extension-amap/export';

// 引入高德地图官方提供的 2.0 类型定义文件
import '@amap/amap-jsapi-types';

// 组装所需的 option type
type ECOption = echarts.ComposeOption<
  ScatterSeriesOption | EffectScatterSeriesOption | TitleComponentOption
  // 合并高德地图的地图初始配置项 AMap.MapOptions 到 AMapComponentOption
> &
  AMapComponentOption<AMap.MapOptions>;

// 注册渲染器、组件和图表
echarts.use([
  HeatmapChart,
  CanvasRenderer,
  TooltipComponent,
  // @ts-ignore
  AMapComponent,
  ScatterChart,
  EffectScatterChart,
]);

// 数据来源于百度，仅供参考 https://cdn.jsdelivr.net/gh/apache/echarts-examples/public/data/asset/data/hangzhou-tracks.json

// 定义 热力图 ECharts option
const option: ECOption = {
  // 加载 amap 组件
  amap: {
    // 3D模式，无论你使用的是1.x版本还是2.x版本，都建议开启此项以获得更好的渲染体验
    viewMode: '3D',
    // 高德地图中心经纬度
    center: [120.098776, 30.226665],
    // 高德地图缩放
    zoom: 13,
    // 启用resize
    // resizeEnable: true,
    // 自定义地图样式主题
    mapStyle: 'amap://styles/darkblue',
    // 移动过程中实时渲染 默认为true 如数据量较大 建议置为false
    renderOnMoving: true,
    // ECharts 图层的 zIndex 默认 2000
    // 从 v1.9.0 起 此配置项已被弃用 请使用 `echartsLayerInteractive` 代替
    echartsLayerZIndex: 2019,
    // 设置 ECharts 图层是否可交互 默认为 true
    // 设置为 false 可实现高德地图自身图层交互
    // 此配置项从 v1.9.0 起开始支持
    echartsLayerInteractive: true,
    // 是否启用大数据模式 默认为 false
    // 此配置项从 v1.9.0 起开始支持
    largeMode: false,
    // 说明：如果想要添加卫星、路网等图层
    // 暂时先不要使用layers配置，因为存在Bug
    // 建议使用amap.add的方式，使用方式参见最下方代码
  },
  visualMap: {
    show: false,
    right: 20,
    min: 0,
    max: 5,
    seriesIndex: 0,
    calculable: true,
    inRange: {
      color: ['blue', 'blue', 'green', 'yellow', 'red'],
    },
  },
  animation: false,
  series: [
    {
      // @ts-ignore
      type: 'heatmap',
      // 使用高德地图坐标系
      coordinateSystem: 'amap',
      data: [],
      pointSize: 5,
      blurSize: 6,
    },
  ],
};

export default defineComponent({
  name: 'ChrtsWithMap',
  components: { Pie },
  setup() {
    const root = ref<HTMLElement | null>(null);
    const ROOT_PATH =
      'https://cdn.jsdelivr.net/gh/apache/echarts-examples/public';

    onMounted(() => {
      const dom = root.value as HTMLElement;
      // 初始化 chart
      const myChart = echarts.init(dom);
      // 请求热力图数据
      fetchTracksData({
        serverURL: ROOT_PATH,
      }).then((data: any) => {
        // 转换数据
        const points = [].concat.apply(
          [],
          data.map(function (track: any) {
            return track.map(function (seg: any) {
              return seg.coord.concat([1]);
            });
          })
        );
        // @ts-ignore
        option.series[0].data = points;
        myChart.setOption(option);
        // 获取 ECharts 高德地图组件
        // @ts-ignore
        var amapComponent = myChart.getModel().getComponent('amap');
        // 获取高德地图实例，使用高德地图自带的控件
        var amap = amapComponent.getAMap();
        // 添加控件 和高德地图API用法相同
        // @ts-ignore
        amap.addControl(new AMap.Scale());
        // @ts-ignore
        amap.addControl(new AMap.ToolBar());
        // 添加图层
        // var satelliteLayer = new AMap.TileLayer.Satellite();
        // var roadNetLayer = new AMap.TileLayer.RoadNet();
        // amap.add([satelliteLayer, roadNetLayer]);
        //  添加一个 Marker
        // amap.add(new AMap.Marker({
        //   position: [115, 35]
        // }));
        // 禁用 ECharts 图层交互，从而使高德地图图层可以点击交互
        // amapComponent.setEChartsLayerInteractive(false);
      });
    });
    return {
      root,
      // 饼图标题
      name: '占有率',
      // 饼图数据
      option: {
        tooltip: {
          trigger: 'item',
          position: ['50%', '50%'],
        },

        visualMap: {
          show: false,
          min: 80,
          max: 600,
          inRange: {
            colorLightness: [0, 1],
          },
        },
        series: [
          {
            type: 'pie',
            radius: '95%',
            center: ['50%', '50%'],
            data: [
              { value: 335, name: '占有率1' },
              { value: 310, name: '占有率2' },
              { value: 274, name: '占有率3' },
              { value: 235, name: '占有率4' },
              { value: 400, name: '占有率5' },
            ].sort(function (a, b) {
              return a.value - b.value;
            }),
            roseType: 'radius',
            label: {
              show: false,
              color: '#3876cd',
            },
            labelLine: {
              show: false,
              // lineStyle: {
              //   color: 'rgba(255, 255, 255, 0.3)',
              // },
              // smooth: 0.2,
              // length: 10,
              // length2: 20,
            },
            itemStyle: {
              color: '#3876cd',
              shadowBlur: 200,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },

            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function () {
              return Math.random() * 200;
            },
          },
        ],
      },
    };
  },
});
</script>
