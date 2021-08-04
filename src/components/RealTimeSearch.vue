<template>
  <div>
    <h1 class="t-bg px-2">查询</h1>
    <section class="t-bg-p py-2">
      <section class="flex justify-between px-2 py-2 pt-0">
        <div>
          <label for="area1" class="mr-3">区县</label>
          <input type="text" id="area1" />
        </div>
        <div>
          <label for="area2" class="mr-3">区县</label>
          <input type="text" id="area2" />
        </div>
        <div>
          <label for="area3" class="mr-3">区县</label>
          <input type="text" id="area3" />
        </div>
        <div>
          <label for="area4" class="mr-3">区县</label>
          <input type="text" id="area4" />
        </div>
        <div>
          <label for="area4" class="mr-3">楼号</label>
          <input type="text" id="area4" />
        </div>
        <div>
          <button>导出</button>
        </div>
      </section>
      <section class="flex px-2 justify-between">
        <div class="flex align-center">
          <label for="area1" class="mr-1">优</label>
          <input type="radio" />
        </div>
        <div class="flex align-center">
          <label for="area1" class="mr-1">良</label>
          <input type="radio" />
        </div>
        <div class="flex align-center">
          <label for="area1" class="mr-1">差</label>
          <input type="radio" />
        </div>
        <div>
          <label for="area2" class="mr-3">开始时间</label>
          <input type="text" id="area2" />
        </div>
        <div>
          <label for="area3" class="mr-3">结束时间</label>
          <input type="text" id="area3" />
        </div>
        <div>
          <button>打印</button>
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
  name: 'RealTimeSearch',
  setup() {
    return {};
  },
});
</script>
