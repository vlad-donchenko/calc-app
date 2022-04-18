import { nanoid } from 'nanoid';

export const getRandomId = (): string => nanoid();

export default {
  getRandomId,
};
