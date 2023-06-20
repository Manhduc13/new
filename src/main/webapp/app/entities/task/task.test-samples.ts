import { ITask, NewTask } from './task.model';

export const sampleWithRequiredData: ITask = {
  id: 79115,
};

export const sampleWithPartialData: ITask = {
  id: 16523,
  title: 'Cyclocross',
};

export const sampleWithFullData: ITask = {
  id: 20874,
  title: 'Hybrid Jazz',
  description: 'Plain',
};

export const sampleWithNewData: NewTask = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
