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
} from "mongoose";

export type TDB_ID = Types.ObjectId;

export type TDataBaseDocument<T> = DeepPartial<
  ApplyBasicCreateCasting<Require_id<T>>
>;

export type IFindOne<T> = {
  filter: QueryFilter<T>;
  projection?: ProjectionFields<T>;
  options?: QueryOptions<T>;
  populate?: PopulateOptions | PopulateOption;
};

export type IFindById<T> = {
  _id: TDB_ID | string;
  projection?: ProjectionFields<T>;
  options?: QueryOptions<T>;
  populate?: PopulateOptions | PopulateOption;
};

export interface IDoc {
  _id?: TDB_ID;
  createdAt?: Date;
  updatedAt?: Date;
}
