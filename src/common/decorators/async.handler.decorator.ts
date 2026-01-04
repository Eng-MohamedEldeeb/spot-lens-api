import { NextFunction, Request, Response } from "express";

class AsyncHandler {
  public static readonly handle = (fn: Function) => {
    return async (req: Request, res: Response, next: NextFunction) => {
      try {
        return await fn(req, res, next);
      } catch (error) {
        return next(error);
      }
    };
  };
}
export default AsyncHandler;
