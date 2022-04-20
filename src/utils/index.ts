import { nanoid } from 'nanoid';
import { ProductI } from '@/types';

export const getRandomId = (): string => nanoid();

export const getCachedProducts = (): Array<ProductI> | [] => {
  const savedProductList: string | null = localStorage.getItem('productList');

  if (!savedProductList) {
    return [];
  }

  return JSON.parse(savedProductList);
};

export const setProductOnCache = (list: Array<ProductI>): void => {
  localStorage.setItem('productList', JSON.stringify(list));
};

export default {
  getRandomId,
};
