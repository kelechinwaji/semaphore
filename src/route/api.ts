import { Application } from "express";
import { createUser, authenticate } from "../controller/user";


export const userRoute = (app: Application) => {
  app.post("/user", createUser);
  app.post("/login", authenticate);
};

export default userRoute;