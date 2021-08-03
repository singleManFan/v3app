import { Ref, ref, onMounted } from 'vue';
import { transformDate } from 'utils';

export type FormatDateRef = Ref<string | null>;

const formatDate = ref<string | null>(null);

export interface IFormatDate {
  formatDate: FormatDateRef;
  setFormDate: (timestamp: number) => any;
}

export const useFormatDate = (timestamp: number): IFormatDate => {
  const setFormDate = (timestamp: number): void => {
    formatDate.value = transformDate(timestamp);
  };

  onMounted(() => {
    setFormDate(timestamp);
  });

  return {
    formatDate,
    setFormDate,
  };
};
