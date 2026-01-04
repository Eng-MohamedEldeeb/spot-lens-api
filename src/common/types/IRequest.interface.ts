import { Request } from "express";
import { TClient, TLead } from "../../db/repositories/types/document.type";

export interface IRequest<T = null> extends Request<T> {
  lead: TLead;
  client: TClient;
}
