import { ObjectSchema } from "joi";
import { NextFunction, Request, Response } from "express";

class ValidatorMiddleware {
  public readonly validate = (schema: Record<string, ObjectSchema>) => {
    return (req: Request, _: Response, next: NextFunction) => {
      let validationError: {
        key: string;
        errors: { message: string; type?: string }[];
      } | null = null;

      for (const key of Object.keys(schema)) {
        const { error } = schema[key].validate(req[key as keyof Request], {
          abortEarly: false,
        });

        if (error) {
          validationError = {
            key,
            errors: error.details.map(e => ({
              message: e.message,
              // type: e.type,
            })),
          };

          return next({
            msg: "validation error",
            details: validationError,
            status: 400,
          });
        }
      }

      return next();
    };
  };
}

export default new ValidatorMiddleware();
