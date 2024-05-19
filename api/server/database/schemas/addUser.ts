import mongoose from "mongoose";
const { Schema } = mongoose;

const addUserSchema = new Schema({
  name:{
    type:String
  },
  email:{
    type:String
  },
  age:{
    type:Number
  },
  internalFunction:{
    type:String
  },
  observations:{
    type:String
  }
});

const addUser = mongoose.model("addUser", addUserSchema);
export default addUser;