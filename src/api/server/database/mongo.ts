import mongoose from "mongoose";

export const conectionData = async () => {
  await mongoose.connect(`mongodb+srv://julioMunhos:uInm1NSCbaBdbWpc@userscluster.kkii78r.mongodb.net/?retryWrites=true&w=majority&appName=usersCluster
  `).then(() => {
    console.log("Banco de dados conectado!");
  }).catch((error) => {
    console.log(`Erro: ${error}`);
  })
}

