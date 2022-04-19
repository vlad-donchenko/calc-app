import { nanoid } from 'nanoid';
import { MathOperation } from '@/const';

export const getRandomId = (): string => nanoid();

export const getResultValueByOperation = (
  operation : string,
  firstValue: number,
  secondValue: number,
): number => {
  switch (operation) {
    case MathOperation.ADDITION:
      return firstValue + secondValue;
    case MathOperation.SUBTRACTION:
      return firstValue - secondValue;
    case MathOperation.MULTIPLICATION:
      return firstValue * secondValue;
    case MathOperation.DIVISION:
      return firstValue / secondValue;
    default:
      return 0;
  }
};

export default {
  getRandomId,
  getResultValueByOperation,
};
