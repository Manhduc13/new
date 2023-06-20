import dayjs from 'dayjs/esm';

import { IEmployee, NewEmployee } from './employee.model';

export const sampleWithRequiredData: IEmployee = {
  id: 28843,
};

export const sampleWithPartialData: IEmployee = {
  id: 98362,
  firstName: 'Elliott',
  lastName: 'Ratke',
  email: 'Adalberto.Kuhlman69@hotmail.com',
  hireDate: dayjs('2023-06-19T05:46'),
  salary: 29914,
};

export const sampleWithFullData: IEmployee = {
  id: 20986,
  firstName: 'Fiona',
  lastName: 'Gutmann',
  email: 'Sabina.Lang@yahoo.com',
  phoneNumber: 'Tactics wholly system',
  hireDate: dayjs('2023-06-19T22:02'),
  salary: 32300,
  commissionPct: 5052,
};

export const sampleWithNewData: NewEmployee = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
