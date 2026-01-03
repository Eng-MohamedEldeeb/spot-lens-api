import { connect, Model } from "mongoose";
import { IFindById, IFindOne, TDataBaseDocument } from "./types";

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

  public readonly findOne = async (
    query: IFindOne<TDocument>,
  ): Promise<TDocument | null> => {
    return await this.model.findOne(query);
  };

  public readonly findById = async (
    query: IFindById<TDocument>,
  ): Promise<TDocument | null> => {
    return await this.model.findById(query);
  };
}
