import { Application } from "express";
import { createUser } from "../controller/user";


export const userRoute = (app: Application) => {
  app.post("/user", createUser);
 
};

export default userRoute;