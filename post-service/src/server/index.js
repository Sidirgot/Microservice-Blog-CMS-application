import express from "express";
import cors from "cors";
import helmet from "helmet";
import bodyParser from "body-parser";
import api from "#root/api";
import middlewares from "#root/middlewares";
import accessEnv from "#root/helpers/accessEnv";

const app = express();

const PORT = accessEnv("PORT", 5000);

const corsConfig = {
  origin: (origin, cb) => cb(null, true),
  //credientials: true
};

app.use(helmet());
app.use(cors(corsConfig));
app.use(bodyParser.json());

app.use("/api", api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

app.listen(PORT, () => {
  console.log(`Listening: ${PORT}`);
});
