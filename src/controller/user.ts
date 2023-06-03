import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import { User, UserData } from "../database/models";

export const createUser = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  try {
    if (password.length < 8) {
      return res.status(400).json({
        status: "error",
        error: "Password should be at least 8 characters",
      });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        status: "error",
        error: "This email is already in use. Please choose a different email.",
      });
    }

    const newUser: UserData = { name, email, password };
    const createdUser = await User.create(newUser);

    res.status(201).json({
      status: "success",
      message: "User created successfully",
      data: createdUser,
    });
  } catch (error:any) {
    res.status(500).json({
      status: "error",
      message: "An error occurred while creating the user.",
      error: error.message,
    });
  }
};
