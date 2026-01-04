import { IDoc, TDB_ID } from "../types";

export interface ISession extends IDoc {
  clientId: TDB_ID;
}
