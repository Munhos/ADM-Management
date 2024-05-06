import mongoose from "mongoose";
const { Schema } = mongoose;

const signUpSchema = new Schema({
  firstName:{
    type:String
  },
  lastName:{
    type:String
  },
  birthDate:{
    type:String
  },
  email:{
    type:String
  },
  password:{
    type:String
  },
  confirmPassword:{
    type:String
  }
});

const signUp = mongoose.model("signUp", signUpSchema);
export default signUp;