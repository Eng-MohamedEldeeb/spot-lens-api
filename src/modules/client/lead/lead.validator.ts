import joi from "joi";
import { IRequestLead } from "./lead.dto";
import { Validators } from "../../../utils/validators/validators";

class LeadValidator extends Validators {
  public readonly requestLead = {
    body: joi.object<IRequestLead>().keys({
      clientName: this.generalFields.clientName.required(),
      companyName: this.generalFields.companyName.required(),
      email: this.generalFields.email.required(),
      phone: this.generalFields.phone.required(),
      clientType: this.generalFields.clientType.required(),
      notes: this.generalFields.notes,
      services: this.generalFields.service,
    }),
  };
}

export default new LeadValidator();
