import mongoose from "mongoose";
const { Schema } = mongoose;

const signInSchema = new Schema({
  firstName:{
    type:String
  },
  email:{
    type:String
  },
  password:{
    type:String
  }
});

const signIn = mongoose.model("signIn", signInSchema);
export default signIn;