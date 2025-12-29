import { model, models, Schema } from "mongoose";

export class Client {
  private static readonly schema = new Schema({}, { timestamps: true });

  public static readonly Model =
    models[this.name] ?? model(this.name, this.schema);
}
