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

  private readonly create = async (data: TDataBaseDocument<TDocument>) => {
    return await this.model.create(data);
  };

  private readonly findOne = async (
    query: IFindOne<TDocument>,
  ): Promise<TDocument | null> => {
    return await this.model.findOne(query);
  };

  private readonly findById = async (
    query: IFindById<TDocument>,
  ): Promise<TDocument | null> => {
    return await this.model.findById(query);
  };
}
