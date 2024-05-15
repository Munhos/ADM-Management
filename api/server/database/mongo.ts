import mongoose from "mongoose";

export const conectionData = async () => {
  await mongoose.connect(`mongodb+srv://julioMunhos:root@userscluster.kkii78r.mongodb.net/`)
  .then(() => {
    console.log("Banco de dados conectado!");
  }).catch((error) => {
    console.log(`Erro: ${error}`);
  })
}

