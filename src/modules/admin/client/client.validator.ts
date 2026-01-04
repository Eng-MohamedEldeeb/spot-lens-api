import joi from "joi";
import { Validators } from "../../../utils/validators/validators";
import leadValidator from "../../client/lead/lead.validator";
import { ICreateClient } from "./client.dto";

class ClientValidator extends Validators {
  public readonly createClient = {
    params: joi.object<ICreateClient>().keys({
      leadId: this.generalFields.leadId.required(),
    }),
    body: leadValidator.requestLead.body,
  };
}

export default new ClientValidator();
