import { model, models, Schema } from "mongoose";

export class Session {
  private static readonly schema = new Schema({}, { timestamps: true });

  public static readonly Model =
    models[this.name] ?? model(this.name, this.schema);
}
