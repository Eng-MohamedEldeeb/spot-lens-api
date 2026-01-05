import cors, { CorsOptions } from "cors";

const corsOptions: CorsOptions = {
  origin: process.env.FRONT_END,
};

const applyCors = cors(corsOptions);

export default applyCors;
