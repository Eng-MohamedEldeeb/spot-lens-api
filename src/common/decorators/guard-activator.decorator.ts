import { NextFunction, Request, Response } from "express";
import AsyncHandler from "./async.handler.decorator";

abstract class GuardActivator {
  abstract activate(req: Request): Promise<boolean | void> | boolean | void;

  public static applyGuards = (...guards: GuardActivator[]) => {
    return AsyncHandler.handle(
      async (req: Request, _: Response, next: NextFunction) => {
        for (const guard of guards) {
          await guard.activate(req);
        }
        return next();
      },
    );
  };
}

export default GuardActivator;
