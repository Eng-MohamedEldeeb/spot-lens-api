import { DataBaseService } from "../db/db.service"

export const bootstrap = async () => {
  await DataBaseService.connect()
}
