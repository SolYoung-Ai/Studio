// EXPORTS: IFaqItem, FAQ_ITEMS
import type { Bi } from '@/i18n';
import { FAQS } from '@/data/services';

export interface IFaqItem {
  q: Bi;
  a: Bi;
}

export const FAQ_ITEMS: IFaqItem[] = FAQS;
