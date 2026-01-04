import joi from "joi";
import { Validators } from "../../../utils/validators/validators";
import { IDeleteClient } from "./client.dto";

class ClientValidator extends Validators {
  public readonly delete = {
    params: joi.object<IDeleteClient>().keys({
      clientId: this.generalFields.id.required(),
    }),
  };
}

export default new ClientValidator();
