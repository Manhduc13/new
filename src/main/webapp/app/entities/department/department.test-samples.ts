import { IDepartment, NewDepartment } from './department.model';

export const sampleWithRequiredData: IDepartment = {
  id: 97297,
  departmentName: 'Grocery finally whoever',
};

export const sampleWithPartialData: IDepartment = {
  id: 41654,
  departmentName: 'Industrial Electric Liaison',
};

export const sampleWithFullData: IDepartment = {
  id: 13744,
  departmentName: 'bus Chevrolet',
};

export const sampleWithNewData: NewDepartment = {
  departmentName: 'Bicycle Streamlined',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
