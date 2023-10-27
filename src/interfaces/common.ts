import { IGenericErrorMessage } from './error';

export type IGenericErrorResponse = {
  statusCode: number;
  message: string;
  errorMessages: IGenericErrorMessage[];
};

export type IGenericResponse<T> = {
  data: T;
};

export type INotFound = {
  success: false;
  message: string;
  errorMessages: IGenericErrorMessage[];
};
