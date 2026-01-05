import joi from "joi";
import { Types } from "mongoose";
import {
  ClientType,
  LeadStatus,
  SessionServices,
} from "../../db/interfaces/enums";

export abstract class Validators {
  private readonly dbId = (v: string, helpers: joi.CustomHelpers) => {
    if (!Types.ObjectId.isValid(v)) return helpers.error("in-valid id");
    return v;
  };

  protected readonly generalFields = {
    clientName: joi.string().messages({
      "string.empty": "clientName can't be empty",
      "any.required": "clientName field is missing",
    }),
    companyName: joi.string().messages({
      "string.empty": "companyName can't be empty",
      "any.required": "companyName field is missing",
    }),
    email: joi.string().email().messages({
      "string.email": "email is invalid",
      "string.empty": "email can't be empty",
      "any.required": "email field is missing",
    }),
    phone: joi.string().messages({
      "string.empty": "phone can't be empty",
      "any.required": "phone field is missing",
    }),
    clientType: joi.valid(...Object.values(ClientType)).messages({
      "any.only": `clientType must be either [ ${ClientType.INDIVIDUAL} or ${ClientType.COMPANY} ]`,
      "any.required": "clientType field is missing",
    }),
    status: joi.valid(...Object.values(LeadStatus)).default(LeadStatus.NEW),
    service: joi.array().allow(...Object.values(SessionServices)),
    notes: joi.string().optional().empty(""),

    id: joi.string().custom(this.dbId),
  };
}
