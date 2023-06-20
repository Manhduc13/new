import { IJob, NewJob } from './job.model';

export const sampleWithRequiredData: IJob = {
  id: 70642,
};

export const sampleWithPartialData: IJob = {
  id: 21808,
  maxSalary: 76600,
};

export const sampleWithFullData: IJob = {
  id: 60388,
  jobTitle: 'Forward Intranet Representative',
  minSalary: 42513,
  maxSalary: 94268,
};

export const sampleWithNewData: NewJob = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
