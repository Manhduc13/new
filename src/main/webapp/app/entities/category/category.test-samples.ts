import { ICategory, NewCategory } from './category.model';

export const sampleWithRequiredData: ICategory = {
  id: 54459,
  name: 'from bandwidth',
};

export const sampleWithPartialData: ICategory = {
  id: 90022,
  name: 'calculate',
};

export const sampleWithFullData: ICategory = {
  id: 48345,
  name: 'Compatible',
  description: 'Porsche',
};

export const sampleWithNewData: NewCategory = {
  name: 'Belarus undershoot',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
