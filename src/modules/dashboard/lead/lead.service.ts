import { ILead } from "../../../db/interfaces";
import { LeadStatus } from "../../../db/interfaces/enums";
import { clientRepository, leadRepository } from "../../../db/repositories";

export class LeadService {
  private readonly leadRepository = leadRepository;
  private readonly clientRepository = clientRepository;

  public readonly getAll = async () => {
    return await this.leadRepository.find();
  };

  public readonly convertToClient = async (leadId: string, leadDto: ILead) => {
    const { companyName, clientName, clientType, phone, notes, email } =
      leadDto;

    this.leadRepository.findByIdAndUpdate({
      _id: leadId,
      data: {
        status: LeadStatus.CONFIRMED,
      },
    });

    return await this.clientRepository.create({
      companyName,
      clientName,
      clientType,
      phone,
      notes,
      email,
    });
  };

  public readonly cancelLeadRequest = async (id: string) => {
    const candledLead = await this.leadRepository.findByIdAndUpdate({
      _id: id,
      data: {
        status: LeadStatus.CANCELED,
      },
    });

    return;
  };
}

export default new LeadService();
