import { IDoc } from "../../types";
import { ClientType, LeadStatus } from "./enums";

export interface ILeadInputs extends IDoc {
  clientName: string;
  companyName?: string;
  email: string;
  phone: string;
  clientType: ClientType;
  status: LeadStatus;
  notes?: string;
}
