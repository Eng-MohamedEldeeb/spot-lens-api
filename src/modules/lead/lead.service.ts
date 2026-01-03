import { LeadStatus } from "../../db/models/interfaces/enums";
import { leadRepo } from "../../db/repositories";
import { IBook } from "./lead.dto";

export class LeadService {
  private readonly leadRepo = leadRepo;
  public readonly book = async (data: IBook) => {
    return await this.leadRepo.create({
      ...data,
      status: LeadStatus.NEW,
    });
  };
}

export default new LeadService();
