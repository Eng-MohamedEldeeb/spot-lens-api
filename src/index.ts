import express from "express";
import { bootstrap } from "./modules/app.module";

const port: number | string = process.env.PORT ?? 3000;

const app: express.Express = express();

bootstrap(app).then(() => {
  app.listen(port, () => console.log(`app is running on port: ${port}`));
});
