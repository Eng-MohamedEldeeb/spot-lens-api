import joi from "joi";
import { ClientType, LeadStatus } from "../../db/interfaces/enums";
import { Types } from "mongoose";

export abstract class Validators {
  private readonly dbId = (v: string, helpers: joi.CustomHelpers) => {
    if (!Types.ObjectId.isValid(v)) return helpers.error("in-valid id");
    return v;
  };

  protected readonly generalFields = {
    clientName: joi.string().messages({
      "string.empty": "clientName can't be empty",
    }),
    companyName: joi.string().messages({
      "string.empty": "companyName can't be empty",
    }),
    email: joi.string().email().messages({
      "string.email": "email is invalid",
      "string.empty": "email can't be empty",
    }),
    phone: joi.string().messages({
      "string.empty": "phone can't be empty",
    }),
    clientType: joi.valid(...Object.values(ClientType)).messages({
      "any.only": `clientType must be either [ ${ClientType.INDIVIDUAL} or ${ClientType.COMPANY} ]`,
    }),
    status: joi.valid(LeadStatus).default(LeadStatus.NEW),
    notes: joi.string().optional().empty(""),

    leadId: joi.string().custom(this.dbId),
  };
}
