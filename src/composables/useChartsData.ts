import { Ref, ref, onMounted } from 'vue';
export type ChartsDataRef = Ref<Array<any>>;
export type TimeRef = Ref<string>;

const chartsData = ref<Array<any>>([]);
const startTime = ref<string>('');
const endTime = ref<string>('');

export interface IChartsData {
  chartsData: ChartsDataRef;
  startTime: TimeRef;
  endTime: TimeRef;
  getChartsData: (event: MouseEvent) => any;
}

export const useChartsData = (): IChartsData => {
  const getChartsData = (): void => {
    console.log(startTime.value, endTime.value);
    // mock数据
    chartsData.value = [];
  };

  onMounted(getChartsData);

  return {
    chartsData,
    startTime,
    endTime,
    getChartsData,
  };
};
