import { NextFunction, Request, Response } from "express";
import { IErrorResponse, ISuccessResponse } from "./types";

class ResponseHandler {
  public readonly success = <T>(
    res: Response,
    { status, success, msg, data }: ISuccessResponse<T>,
  ) => {
    return res.status(status).json({ success, msg, data });
  };
  public readonly error = <T>(
    next: NextFunction,
    { status, success, msg, error }: IErrorResponse<T>,
  ) => {
    return next({ status, success, msg, error });
  };
  public readonly globalError = (
    error: { status: number | 400; msg: string; success: false; error?: any },
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    const { status, ...rest } = error;
    return res.status(status).json({ ...rest });
  };
  public readonly unknownUrl = (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    return res
      .status(404)
      .json({ success: false, msg: `Unknown Url: ${req.originalUrl}` });
  };
}

export default new ResponseHandler();
