import {
  ApplyBasicCreateCasting,
  DeepPartial,
  PopulateOption,
  PopulateOptions,
  ProjectionFields,
  QueryFilter,
  QueryOptions,
  Require_id,
  Types,
  UpdateQuery,
} from "mongoose";

export type TDB_ID = Types.ObjectId;

export interface IDoc {
  _id?: TDB_ID;
  createdAt?: Date;
  updatedAt?: Date;
}

export type TDataBaseDocument<T> = DeepPartial<
  ApplyBasicCreateCasting<Require_id<T>>
>;

export type TFind<T> = {
  filter: QueryFilter<T>;
  projection?: ProjectionFields<T>;
  options?: QueryOptions<T>;
  populate?: PopulateOptions | PopulateOption;
};

export type TFindOne<T> = TFind<T>;

export type TFindById<T> = {
  _id: TDB_ID | string;
  projection?: ProjectionFields<T>;
  options?: QueryOptions<T>;
  populate?: PopulateOptions | PopulateOption;
};
type TUpdateQuery<T> = {
  data: UpdateQuery<T>;
};

export type TFindOneAndUpdate<T> = Omit<TFind<T>, "projection" | "populate"> &
  TUpdateQuery<T>;

export type TFindByIdAndUpdate<T> = Omit<
  TFindById<T>,
  "projection" | "populate"
> &
  TUpdateQuery<T>;
