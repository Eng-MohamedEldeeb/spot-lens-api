import { HydratedDocument } from "mongoose";
import { ILead } from "../interfaces/ILead.interface";

export type TLead = HydratedDocument<ILead> & Document;
