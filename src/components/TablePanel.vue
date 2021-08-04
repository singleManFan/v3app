<template>
  <div data-class="table-panel" class="h-full flex flex-col">
    <header class="t-bg px-2">
      <button class="mr-1.5">新增</button>
      <button>导出</button>
    </header>
    <section
      style="height: 58.79845070422535vh"
      class="flex-grow h-full scroll mb-4 wireframe"
    >
      <table class="w-full box-border wireframe text-center">
        <tbody>
          <tr>
            <th>表头</th>
            <th>表头</th>
            <th>表头</th>
            <th>表头</th>
            <th>表头</th>
            <th>表头</th>
            <th>表头</th>
            <th>表头</th>
            <th>表头</th>
            <th>表头</th>
            <th>表头</th>
            <th>表头</th>
            <th>表头</th>
            <th>表头</th>
            <th>表头</th>
            <th>表头</th>
          </tr>
          <template v-for="i in 100" :key="i">
            <tr>
              <td>单元格</td>
              <td>单元格</td>
              <td>单元格</td>
              <td>单元格</td>
              <td>单元格</td>
              <td>单元格</td>
              <td>单元格</td>
              <td>单元格</td>
              <td>单元格</td>
              <td>单元格</td>
              <td>单元格</td>
              <td>单元格</td>
              <td>单元格</td>
              <td>单元格</td>
              <td>单元格</td>
              <td>单元格</td>
            </tr>
          </template>
        </tbody>
      </table>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'TablePanel',
  setup() {
    return {};
  },
});
</script>