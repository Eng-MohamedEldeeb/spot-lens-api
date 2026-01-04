import joi from "joi";
import { ICancelLeadRequest, ICreateClient, IRequestLead } from "./lead.dto";
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
    }),
  };

  public readonly convertToClient = {
    params: joi.object<Pick<ICreateClient, "leadId">>().keys({
      leadId: this.generalFields.leadId.required(),
    }),
  };

  public readonly cancelRequest = {
    params: joi.object<ICancelLeadRequest>().keys({
      leadId: this.generalFields.leadId.required(),
    }),
  };
}

export default new LeadValidator();
