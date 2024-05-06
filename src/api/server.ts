import express from "express";
import { conectionData } from "./server/database/mongo";
import routes from "./server/routes/routes";
import cors from "cors";

const server = express();

server.use(cors());

server.use(express.json());
server.use(routes);

conectionData()
  .then(() => {
    server.listen(3000, () => {
      console.log("App rodando!");
    });
  })
  .catch((error) => {
    console.error("Erro ao conectar ao banco de dados:", error);
  });

export default server;
