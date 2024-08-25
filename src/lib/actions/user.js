import CryptoJS from "crypto-js";
import UserModel from "../database/models/user.model";
import { connectToDatabase } from "../database/mongoose";
import { handleError } from "../utils";
import jwt from "jsonwebtoken";

export const createUser = async (data) => {
  try {
    await connectToDatabase();
    const { email, password, name } = data;
    const getUser = await UserModel.findOne({ email });
    if(getUser){
        return;
    }
    // Encrypt the newPassword using a secret key
    const secretKey = process.env.NEXT_APP_SECRET_KEY || "";
    const encryptPassword = await CryptoJS.AES.encrypt(
      password,
      secretKey
    ).toString();

    const reqData = {
      username: name,
      email,
      password: encryptPassword,
    };
    const newUser = await UserModel.create(reqData);
    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    handleError(error);
    throw new Error("something went wrong");
  }
};

export const loginUser = async (data) => {
  try {
    await connectToDatabase();
    const { email, password } = data;
    const getUser = await UserModel.findOne({ email });
    if (getUser) {
      const secretKey = process.env.NEXT_APP_SECRET_KEY || "";
      const decryptPassword = await CryptoJS.AES.decrypt(
        getUser?.password,
        secretKey
      );
      const originalPassword = decryptPassword.toString(CryptoJS.enc.Utf8);

      if (originalPassword !== password) {
        return;
      } else {
        const token = jwt.sign(
          { userId: getUser._id },
          process.env.NEXT_APP_SECRET_KEY,
          { expiresIn: "1d" }
        );
        const updateUser = await UserModel.findByIdAndUpdate(
          getUser._id,
          { token }, // Update the token field
          { new: true } // Return the updated document
        );
        return updateUser;
      }
    } else {
      return;
    }
  } catch (error) {
    handleError(error);
    throw new Error("something went wrong");
  }
};
