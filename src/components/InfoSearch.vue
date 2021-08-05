<template>
  <div data-class="search">
    <h1 class="t-bg px-2">查询</h1>
    <section class="t-bg-p py-2">
      <section class="flex justify-around py-2 pt-0">
        <div class="flex">
          <label for="area" class="mr-3 w-24 text-right">区县</label>
          <input type="text" id="area" />
        </div>
        <div class="flex">
          <label for="address" class="mr-3 w-24 text-right">街道</label>
          <input type="text" id="address" />
        </div>
        <div class="flex">
          <label for="community" class="mr-3 w-24 text-right">社区</label>
          <input type="text" id="community" />
        </div>
        <div class="flex">
          <label for="housing" class="mr-3 w-24 text-right">小区</label>
          <input type="text" id="housing" />
        </div>
      </section>
      <section class="flex justify-around">
        <div class="flex">
          <label for="housenumber" class="mr-3 w-24 text-right">小区户数</label>
          <input type="text" id="housenumber" />
        </div>
        <div class="flex">
          <label for="company" class="mr-3 w-24 text-right">物业公司名称</label>
          <input type="text" id="company" />
        </div>
        <div class="flex">
          <label for="people" class="mr-3 w-24 text-right"
            >垃圾分类负责人</label
          >
          <input type="text" id="people" />
        </div>
        <div class="flex">
          <label for="addr" class="mr-3 w-24 text-right">地址</label>
          <input type="text" id="addr" />
        </div>
      </section>
      <section class="flex justify-center">
        <div><button class="mr-1.5">查询</button><button>清除</button></div>
      </section>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'SearchPanel',
  setup() {
    return {};
  },
});
</script>
