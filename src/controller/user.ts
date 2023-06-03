import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import { User, UserData,  } from "../database/models";


export const createUser = async (req: Request, res: Response) => {
    const addUser: UserData = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    };

    try {

        if (addUser.password.length < 8) {
            return res.json({
                status: "error",
                error: "Password should be at least 8 characters",
            });
        }

        const emailCheck = await User.findOne({
            $or: [{ email: addUser.email }],
        });
        if (emailCheck) {
            return res.status(400).json({
                message:
                    "This Email is already in use, please confirm the email or request retrieve password",
            });
        }
        const newUser = await User.create(addUser);
        res.json({
            status: 201,
            Message: "User created successfully",
            details: newUser 
        })
    } catch (error) {
        res.json({
            status: 400,
            details: error 
        })
    }
};
