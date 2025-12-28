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
} from "mongoose"

export type TDataBaseDocument<T> = DeepPartial<
  ApplyBasicCreateCasting<Require_id<T>>
>

export type IFindOne<T> = {
  filter: QueryFilter<T>
  projection: ProjectionFields<T>
  options: QueryOptions<T>
  populate: PopulateOptions | PopulateOption
}

export type IFindById<T> = {
  _id: Types.ObjectId
  projection: ProjectionFields<T>
  options: QueryOptions<T>
  populate: PopulateOptions | PopulateOption
}
