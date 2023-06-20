import { ILocation, NewLocation } from './location.model';

export const sampleWithRequiredData: ILocation = {
  id: 63098,
};

export const sampleWithPartialData: ILocation = {
  id: 55618,
};

export const sampleWithFullData: ILocation = {
  id: 55234,
  streetAddress: 'roar Oganesson',
  postalCode: 'Music Dysprosium Bicycle',
  city: 'Casperfield',
  stateProvince: 'alongside',
};

export const sampleWithNewData: NewLocation = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
