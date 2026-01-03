import joi from "joi";
import { IBook } from "./lead.dto";
import { Validators } from "../../utils/validators/validators";

class LeadValidator extends Validators {
  public readonly book = {
    body: joi.object<IBook>().keys({
      clientName: this.generalFields.clientName.required(),
      companyName: this.generalFields.companyName.required(),
      email: this.generalFields.email.required(),
      phone: this.generalFields.phone.required(),
      clientType: this.generalFields.clientType.required(),
      notes: this.generalFields.notes,
    }),
  };
}

export default new LeadValidator();
