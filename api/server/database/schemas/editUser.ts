import mongoose from "mongoose";
const { Schema } = mongoose;

const editUserSchema = new Schema({
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

const editUser = mongoose.model("editUser", editUserSchema);
export default editUser;