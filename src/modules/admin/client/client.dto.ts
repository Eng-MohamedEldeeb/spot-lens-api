import { ILeadInputs } from "../../../db/interfaces";
import { TDB_ID } from "../../../db/types";

export interface ICreateClient extends ILeadInputs {
  leadId: string;
}
