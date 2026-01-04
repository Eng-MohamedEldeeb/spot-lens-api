import { Model } from "mongoose";
import { DataBaseService } from "../db.service";
import { TClient } from "./types/document.type";
import { Client } from "../models/Client.model";

class ClientRepository extends DataBaseService<TClient> {
  constructor(private readonly clientModel: Model<TClient> = Client.Model) {
    super(clientModel);
  }
}

export default new ClientRepository();
