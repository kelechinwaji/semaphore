import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";

// user type definition
export type UserData = {
    name: string;
    email: string;
    password: string;
  }

// user database document 
const userSchema = new Schema<UserData>(
    {
      name: { type: String, required: true },
      email: { type: String, required: true, lowercase: true},
      password: { type: String, required: true },
    },
    { timestamps: true }
  );


// Password Encrypting using Bcrypt
const saltRounds = 10;

// password hashing algorithm
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, saltRounds);
});

// Exclude the password field from query results
userSchema.methods.toJSON = function () {
  const obj = this.toObject();
  delete obj.password;
  return obj;
};

export const User = mongoose.model("user", userSchema);

