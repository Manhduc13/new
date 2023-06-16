import dayjs from 'dayjs/esm';
import { ICategory } from 'app/entities/category/category.model';

export interface IProduct {
  id: number;
  name?: string | null;
  description?: string | null;
  price?: number | null;
  quantity?: number | null;
  createdAt?: dayjs.Dayjs | null;
  updatedAt?: dayjs.Dayjs | null;
  category?: Pick<ICategory, 'id' | 'name'> | null;
}

export type NewProduct = Omit<IProduct, 'id'> & { id: null };
