import joi, { ObjectSchema } from "joi";
import { ClientType, LeadStatus } from "../../db/models/interface/enums";
import { NextFunction, Request, Response } from "express";

export abstract class Validator {
  protected readonly generalFields = {
    clientName: joi.string(),
    companyName: joi.string(),
    email: joi.string().email(),
    phone: joi.string(),
    clientType: joi.valid(ClientType),
    status: joi.valid(LeadStatus).default(LeadStatus.NEW),
    notes: joi.string(),
  };

  public readonly validate = (schema: Record<string, ObjectSchema>) => {
    return (req: Request, res: Response, next: NextFunction) => {
      let validationError: { key: string; messages: string[] } | null = null;

      for (const key of Object.keys(schema)) {
        const { error } = schema[key].validate(req[key as keyof Request], {
          abortEarly: false,
        });

        if (error) {
          validationError = {
            key,
            messages: error.details.map(e => e.message),
          };
        }
      }

      if (validationError)
        return next({
          msg: "validation error",
          details: validationError,
          status: 400,
        });

      return next();
    };
  };
}
