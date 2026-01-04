import { Model } from "mongoose";
import { DataBaseService } from "../db.service";
import { Lead } from "../models/Lead.model";
import { TLead } from "./types/document.type";

class LeadRepository extends DataBaseService<TLead> {
  constructor(private readonly leadModel: Model<TLead> = Lead.Model) {
    super(leadModel);
  }
}

export default new LeadRepository();
