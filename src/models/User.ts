import { Schema, model, Model } from "mongoose";
import *as bcrypt from "bcrypt";
import { IUser } from "../interfaces/User";

const userSchema = new Schema<IUser>(
  {
    username: {
      type: String,
      required: true,
      lowercase: true
    },
    fullname: {
      type: String
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    isAdmin: { type: Boolean, required: true }
  },
  {
    timestamps: true
  }
);

userSchema.pre<IUser>("save", async function(next) {
  const user = this;

  if (!user.isModified("password")) return next();

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(user.password, salt);
  user.password = hash;
  next();
});

userSchema.methods.comparePassword = async function(
  password: string
): Promise<Boolean> {
  return await bcrypt.compare(password, this.password);
};

const userModel: Model<IUser, {}, {}> = model<IUser>("User", userSchema);
export default userModel;
