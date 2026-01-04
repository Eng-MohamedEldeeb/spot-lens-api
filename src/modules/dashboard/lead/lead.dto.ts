import { ILeadInputs } from "../../../db/interfaces";

export interface IRequestLead extends ILeadInputs {}

export interface ICreateClient {
  leadId: string;
}

export interface ICancelLeadRequest extends ICreateClient {}
