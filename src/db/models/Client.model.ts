import { model, models, Schema } from "mongoose";
import { ClientType } from "../interfaces/enums";

export class Client {
  private static readonly schema = new Schema(
    {
      clientName: {
        type: String,
        required: [true, "clientName field is required"],
      },
      companyName: { type: String },
      email: {
        type: String,
        lowercase: true,
        required: [true, "email field is required"],
      },
      phone: {
        type: String,
        required: [true, "phone field is required"],
      },
      clientType: {
        type: String,
        enum: ClientType,
        required: [true, "clientType field is required"],
      },
      notes: { type: String },
    },
    { timestamps: true },
  );

  public static readonly Model =
    models[this.name] ?? model(this.name, this.schema);
}
