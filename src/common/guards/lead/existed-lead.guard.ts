import { Request } from "express";
import { leadRepository } from "../../../db/repositories";
import { GuardActivator } from "../../decorators";
import { IRequest } from "../../types/IRequest.interface";

class ExistedLeadGuard extends GuardActivator {
  private readonly leadRepository = leadRepository;

  public readonly activate = async (
    req: IRequest<{ leadId: string }>,
  ): Promise<boolean | void> => {
    const lead = await this.leadRepository.findById({ _id: req.params.leadId });

    if (!lead)
      throw {
        status: 404,
        success: false,
        msg: "in-valid lead id or doesn't exist",
      };

    req.lead = lead;

    return true;
  };
}

export default new ExistedLeadGuard();
