import dayjs from 'dayjs/esm';

import { Language } from 'app/entities/enumerations/language.model';

import { IJobHistory, NewJobHistory } from './job-history.model';

export const sampleWithRequiredData: IJobHistory = {
  id: 38613,
};

export const sampleWithPartialData: IJobHistory = {
  id: 21913,
  startDate: dayjs('2023-06-19T14:10'),
};

export const sampleWithFullData: IJobHistory = {
  id: 35928,
  startDate: dayjs('2023-06-19T09:16'),
  endDate: dayjs('2023-06-19T07:08'),
  language: 'ENGLISH',
};

export const sampleWithNewData: NewJobHistory = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
