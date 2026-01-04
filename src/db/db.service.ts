import { connect, Model } from "mongoose";
import {
  TFind,
  TFindById,
  TFindOne,
  TDataBaseDocument,
  TFindOneAndUpdate,
  TFindByIdAndUpdate,
} from "./types";

export abstract class DataBaseService<TDocument> {
  constructor(private readonly model: Model<TDocument>) {}

  public static readonly connect = async (): Promise<void> => {
    try {
      await connect(process.env.DB_URI as string);
      console.log("DB Connected Successfully");
    } catch (error) {
      console.error({
        msg: "db Error",
        error,
      });
      return;
    }
  };

  public readonly create = async (data: TDataBaseDocument<TDocument>) => {
    return await this.model.create(data);
  };

  public readonly find = async (
    query?: TFind<TDocument>,
  ): Promise<TDocument[] | []> => {
    return await this.model.find(query);
  };

  public readonly findOne = async (
    query: TFindOne<TDocument>,
  ): Promise<TDocument | null> => {
    return await this.model.findOne(query);
  };

  public readonly findById = async (
    query: TFindById<TDocument>,
  ): Promise<TDocument | null> => {
    return await this.model.findById(query);
  };

  public readonly findOneAndUpdate = async (
    query: TFindOneAndUpdate<TDocument>,
  ): Promise<TDocument | null> => {
    return await this.model.findOneAndUpdate(query);
  };

  public readonly findByIdAndUpdate = async ({
    _id,
    data,
    options,
  }: TFindByIdAndUpdate<TDocument>): Promise<TDocument | null> => {
    return await this.model.findByIdAndUpdate(_id, data, options);
  };

  public readonly findOneAndDelete = async (
    query: TFindOne<TDocument>,
  ): Promise<TDocument | null> => {
    return await this.model.findOneAndDelete(query);
  };

  public readonly findByIdAndDelete = async (
    query: TFindById<TDocument>,
  ): Promise<TDocument | null> => {
    return await this.model.findByIdAndDelete(query);
  };
}
