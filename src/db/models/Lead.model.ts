import { model, models, Schema } from "mongoose";
import { ILead } from "../interfaces";
import { ClientType, LeadStatus } from "../interfaces/enums";
import emailService from "../../utils/email/email.service";
import { EmailSchema } from "../../utils/email/schemas/email.schemas";

export class Lead {
  private static readonly schema = new Schema<ILead>(
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

  private static readonly schemaFactory = () => {
    this.schema.post("save", (doc: ILead) => {
      return emailService.send({
        to: doc.email,
        subject: "Confirming Details",
        from: `"${process.env.APP_NAME}" <${process.env.USER}>`,
        html: EmailSchema.confirmLead(doc),
      });
    });
    return this.schema;
  };

  public static readonly Model =
    models[this.name] ?? model(this.name, this.schemaFactory());
}
