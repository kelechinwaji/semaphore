import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import { User, UserData } from "../database/user.models";


//create user
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

// loging user
export const authenticate = async (req: Request, res: Response) => {
    try {
        const user = {
            email: req.body.email,
            password: req.body.password,
        };
        const existingUser = await User.findOne({ email: user.email });

        if (existingUser) {
            const token = jwt.sign(
                { payload: existingUser },
                `28czklas`,
                { expiresIn: "2h" }
            );
            res.status(200).json({ token, name: existingUser.name });
        }
    } catch (error) {
        console.error(error);
        res.status(400);
        res.json(error);
    }
};