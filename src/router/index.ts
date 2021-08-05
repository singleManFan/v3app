import { createRouter, createWebHashHistory } from 'vue-router';

// 数据中心
const DataCentre = () =>
  import(/* webpackChunkName: "data-centre" */ 'views/DataCentre.vue');

// 实时监控
const RealTime = () =>
  import(/* webpackChunkName: "real-time" */ 'views/RealTime.vue');

// 基础信息
const BaseInfo = () =>
  import(/* webpackChunkName: "base-info" */ 'views/BaseInfo.vue');

// 设备管理
const DeviceManage = () =>
  import(/* webpackChunkName: "device-manage" */ 'views/DeviceManage.vue');

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: DataCentre },
    { path: '/real-time', component: RealTime },
    { path: '/base-info', component: BaseInfo },
    { path: '/device-manage', component: DeviceManage }
  ],
});
