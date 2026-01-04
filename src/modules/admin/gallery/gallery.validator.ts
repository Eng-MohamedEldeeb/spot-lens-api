import joi from "joi";
import { Validators } from "../../../utils/validators/validators";

class GalleryValidator extends Validators {
  public readonly requestLead = {
    body: joi.object().keys({
      clientName: this.generalFields.clientName.required(),
      companyName: this.generalFields.companyName.required(),
      email: this.generalFields.email.required(),
      phone: this.generalFields.phone.required(),
    }),
  };
}

export default new GalleryValidator();
