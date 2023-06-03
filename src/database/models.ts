import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";

export type UserData = {
    name: string;
    email: string;
    password: string;
  }


const userSchema = new Schema<UserData>(
    {
      name: { type: String, required: true },
      email: { type: String, required: true, lowercase: true},
      password: { type: String, required: true },
    },
    { timestamps: true }
  );


// Password Encrypting using Bcrypt
const saltRounds = 'thisIsSecured';

// password hashing algorithm
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, saltRounds);
});

export const User = mongoose.model("user", userSchema);

