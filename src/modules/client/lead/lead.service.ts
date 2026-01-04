import { LeadStatus } from "../../../db/interfaces/enums";
import { leadRepository } from "../../../db/repositories";
import { IRequestLead } from "./lead.dto";

class LeadService {
  private readonly leadRepository = leadRepository;
  public readonly requestLead = async (data: IRequestLead) => {
    return await this.leadRepository.create({
      ...data,
      status: LeadStatus.NEW,
    });
  };
}

export default new LeadService();
