import { HydratedDocument } from "mongoose";
import { ILead } from "../../interfaces/ILead.interface";
import { IClient } from "../../interfaces";

export type TLead = HydratedDocument<ILead> & Document;
export type TClient = HydratedDocument<IClient> & Document;
