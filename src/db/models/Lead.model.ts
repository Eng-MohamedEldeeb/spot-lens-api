import { model, models, Schema } from "mongoose";
import { ILeadInputs } from "./interface";
import { ClientType, LeadStatus } from "./interface/enums";

export class Lead {
  private static readonly schema = new Schema<ILeadInputs>(
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
      status: { type: String, enum: LeadStatus, default: LeadStatus.NEW },
      notes: { type: String },
    },
    { timestamps: true },
  );

  public static readonly Model =
    models[this.name] ?? model(this.name, this.schema);
}
