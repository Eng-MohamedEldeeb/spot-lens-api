import { IDoc } from "../../types";
import { ClientType, LeadStatus } from "./enums";

export interface ILeadInputs {
  clientName: string;
  companyName?: string;
  email: string;
  phone: string;
  clientType: ClientType;
  notes?: string;
}

export interface ILead extends ILeadInputs, IDoc {
  status: LeadStatus;
}
