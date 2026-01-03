import { Model } from "mongoose";
import { DataBaseService } from "../db.service";
import { Lead } from "../models/Lead.model";
import { TLead } from "../models/types/document.type";

class LeadRepo extends DataBaseService<TLead> {
  constructor(private readonly leadModel: Model<TLead> = Lead.Model) {
    super(leadModel);
  }
}

export default new LeadRepo();
