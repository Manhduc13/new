import { IRegion, NewRegion } from './region.model';

export const sampleWithRequiredData: IRegion = {
  id: 64709,
};

export const sampleWithPartialData: IRegion = {
  id: 4599,
};

export const sampleWithFullData: IRegion = {
  id: 95107,
  regionName: 'grey',
};

export const sampleWithNewData: NewRegion = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
