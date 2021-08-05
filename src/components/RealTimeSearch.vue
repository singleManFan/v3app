<template>
  <div data-class="search">
    <h1 class="t-bg px-2">查询</h1>
    <section class="t-bg-p py-2">
      <section class="flex justify-between px-2 py-2 pt-0">
        <div>
          <label for="area" class="mr-3">区域</label>
          <input type="text" id="area" />
        </div>
        <div>
          <label for="address" class="mr-3">街道</label>
          <input type="text" id="address" />
        </div>
        <div>
          <label for="community" class="mr-3">社区</label>
          <input type="text" id="community" />
        </div>
        <div>
          <label for="housing" class="mr-3">小区</label>
          <input type="text" id="housing" />
        </div>
        <div>
          <label for="building" class="mr-3">楼号</label>
          <input type="number" id="building" />
        </div>
        <div>
          <button>导出</button>
        </div>
      </section>
      <section class="flex px-2 justify-between">
        <div class="flex align-center">
          <div class="flex align-center mr-4">
            <label for="a" class="mr-1">优</label>
            <input id="a" type="radio" name="level" />
          </div>
          <div class="flex align-center mr-4">
            <label for="b" class="mr-1">良</label>
            <input id="b" type="radio" name="level" />
          </div>
          <div class="flex align-center mr-4">
            <label for="c" class="mr-1">中</label>
            <input id="c" type="radio" name="level" />
          </div>
          <div class="flex align-center mr-4">
            <label for="d" class="mr-1">差</label>
            <input id="d" type="radio" name="level" />
          </div>
        </div>
        <div class="flex">
          <div class="mr-4">
            <label for="start" class="mr-3">开始时间</label>
            <input type="date" id="start" />
          </div>
          <div>
            <label for="end" class="mr-3">结束时间</label>
            <input type="date" id="end" />
          </div>
        </div>
        <div>
          <button class="mr-2">查询</button>
          <button>打印</button>
        </div>
      </section>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'RealTimeSearch',
  setup() {
    return {};
  },
});
</script>
