import { ICountry, NewCountry } from './country.model';

export const sampleWithRequiredData: ICountry = {
  id: 40165,
};

export const sampleWithPartialData: ICountry = {
  id: 4978,
};

export const sampleWithFullData: ICountry = {
  id: 85261,
  countryName: 'till Modern',
};

export const sampleWithNewData: NewCountry = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
