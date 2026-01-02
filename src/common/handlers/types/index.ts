export interface ISuccessResponse<T> {
  msg: string;
  success?: true;
  status: number | 200;
  data: T;
}

export interface IErrorResponse<T> {
  msg: string;
  success?: false;
  status: number | 400;
  error: T;
}
