import dayjs from 'dayjs/esm';

import { IProduct, NewProduct } from './product.model';

export const sampleWithRequiredData: IProduct = {
  id: 9397,
  name: 'Omani',
  description: 'Tala Berkshire web',
  price: 9189,
  quantity: 80811,
  createdAt: dayjs('2023-06-15T18:14'),
  updatedAt: dayjs('2023-06-15T14:31'),
};

export const sampleWithPartialData: IProduct = {
  id: 71244,
  name: 'male Bicycle red',
  description: 'gregarious',
  price: 36187,
  quantity: 16467,
  createdAt: dayjs('2023-06-16T02:19'),
  updatedAt: dayjs('2023-06-15T14:51'),
};

export const sampleWithFullData: IProduct = {
  id: 1517,
  name: 'Integration',
  description: 'Assurance',
  price: 33627,
  quantity: 87015,
  createdAt: dayjs('2023-06-15T06:31'),
  updatedAt: dayjs('2023-06-15T06:26'),
};

export const sampleWithNewData: NewProduct = {
  name: 'Jewelery Germanium',
  description: 'Sleek',
  price: 1765,
  quantity: 98879,
  createdAt: dayjs('2023-06-16T01:20'),
  updatedAt: dayjs('2023-06-15T14:12'),
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
