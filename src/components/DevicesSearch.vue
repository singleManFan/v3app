<template>
  <div data-class="search h-full">
    <div class="mb-2 flex px-4 justify-between">
      <div>
        <label class="mr-3" for="department">部门</label
        ><input id="department" type="text" />
      </div>
      <div>
        <label class="mr-3" for="area">区域</label
        ><input id="area" type="text" />
      </div>
      <div>
        <label class="mr-3" for="power">电量</label
        ><input id="power" type="text" />
      </div>
      <div><button>查询</button></div>
    </div>
    <div class="px-4 w-60 flex justify-between">
      <button>添加设备</button>
      <button>修改设备</button>
      <button>删除设备</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'DevicesSearch',
  setup() {
    return {};
  },
});
</script>
