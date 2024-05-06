import { Request, Response } from "express";
import bcrypt from "bcrypt";
import addUser from "../server/database/schemas/addUser";
import signIn from "../server/database/schemas/signIn";
import signUp from "../server/database/schemas/signUp";

export const addUserController = async (req: Request, res: Response) => {
  try {
    const { name, email, age, internalFunction } = req.body;
    await addUser.create({ name, email, age, internalFunction });

    return res.status(201).send({
      statusCode: 201,
      message: "User Created",

      name: name,
      email: email,
      age: age,
      internalFunction: internalFunction,
    });
  } catch (error) {
    return res.status(500).send({
      statusCode: 500,
      message: "Something went wrong",
      error: "Internal Server Error",
    });
  }
};

export const allUsersController = async (req: Request, res: Response) => {
  const usersList = await addUser.find();

  return res.send(usersList);
};

export const editUserController = async (req: Request, res: Response) => {
  try {
    const { _id, name, email, age, internalFunction } = req.body;
    await addUser.updateOne(
      { _id: _id },
      {
        $set: {
          name: name,
          email: email,
          age: age,
          internalFunction: internalFunction,
        },
      }
    );

    return res.status(200).send({
      statusCode: 200,
      message: "User updated successfully",
      name: name,
      email: email,
      age: age,
      internalFunction: internalFunction,
    });
  } catch (error) {
    return res.status(500).send({
      statusCode: 500,
      message: "Something went wrong",
      error: "Internal Server Error",
    });
  }
};

export const deleteUserController = async (req: Request, res: Response) => {
  try {
    const _id = req.params._id;
    await addUser.findByIdAndDelete(_id);

    return res.status(200).send({
      statusCode: 200,
      message: "User deleted successfully",
    });
  } catch (error) {
    return res.status(500).send({
      statusCode: 500,
      message: "Something went wrong",
      error: "Internal Server Error",
    });
  }
};

export const singUpController = async (req: Request, res: Response) => {
  try {
    let { firstName, lastName, birthDate, email, password, confirmPassword } =
      req.body;

    if (!email) {
      return res.status(400).send({
        statusCode: 400,
        message: "Requires email input",
        error: "Internal Server Error",
      });
    }

    if ((await signUp.findOne({ email: req.body.email })) != null) {
      return res.status(400).send({
        statusCode: 400,
        message: "E-mail already registered",
        error: "Internal Server Error",
      });
    }

    if (password !== confirmPassword) {
      return res.status(400).send({
        statusCode: 400,
        message: "Different Passwords",
        error: "Internal Server Error",
      });
    }

    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(password, salt);
    password = passwordHash;

    await signUp.create({
      firstName,
      lastName,
      birthDate,
      email,
      password
    });

    await signIn.create({ firstName, email, password });
    return res.send("USUARIO CRIADO")
  } catch (error) {
    return res.status(500).send({
      statusCode: 500,
      message: "Internal Server Error",
      error: error,
    });
  }
};

export const signInController = async (req:Request, res:Response) => {
  try {
    let { email, password } = req.body

    const user = await signIn.findOne({email: email});

    if(!user){
      return res.status(404).send({
        statusCode: 404,
        message: "Invalid User",
        error: "Internal Server Error",
      });
    }

    const correctPassword = await bcrypt.compare(password, user.password ?? "")
    if(!correctPassword){
      return res.status(400).send({
        statusCode: 400,
        message: "Invalid Password",
        error: "Internal Server Error",
      });
    }

    if(user && correctPassword){
      return res.status(200).send(
        "LOGADO COM SUUCESSO"
      )
    }
  } catch (error) {
    return res.status(500).send({
      statusCode: 500,
      message: "Internal Server Error",
      error: error,
    });
  }
  
}