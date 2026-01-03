import { IDoc } from "../../types";
import { ClientType } from "./enums";

export interface IClient extends IDoc {
  clientType: ClientType;
  name: string;
  contactPerson: string;
  email: string;
  phone: string;
  notes?: string;
}
