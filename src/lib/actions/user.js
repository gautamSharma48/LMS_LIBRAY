import CryptoJS from "crypto-js";
import UserModel from "../database/models/user.model";
import { connectToDatabase } from "../database/mongoose";
import { generateOTP, handleError } from "../utils";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";

export const getUserDetail = async (id) => {
  try {
    const user = UserModel?.findById(id);
    if (user) {
      return user;
    }
    return;
  } catch (error) {
    handleError(error);
    throw new Error("something went wrong");
  }
};

export const createUser = async (data) => {
  try {
    await connectToDatabase();
    const { email, password, name } = data;
    const getUser = await UserModel.findOne({ email });
    if (getUser) {
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
        let otp = null;
        if(!getUser.isVerified){
           otp = await generateOTP(6, { digits: true, alphabets: false });
        }
        const updateUser = await UserModel.findByIdAndUpdate(
          getUser._id,
          { token, otp }, // Update the token field
          { new: true } // Return the updated document
        );
        if(!getUser?.isVerified){
          sendEmail(email, otp);
        }
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

export const sendEmail = async (email, otp) => {
  try {
    // Create a transporter object
    const transporter = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "b33a5584fdcd12",
        pass: "05df292eeca2f2",
      },
    });

    // Configure the mailoptions object
    const mailOptions = {
      from: "softwareng99@gmail.com",
      to: email,
      subject: "Sending Email using Node.js",
      text: `otp for authentication - ${otp} `,
      html: "",
    };
    // Send the email
    const mail = await transporter.sendMail(mailOptions);
    return mail;
  } catch (error) {
    handleError(error);
    throw new Error("something went wrong");
  }
};

export const verifiedUser = async (id) => {
  try {
    const updateUser = await UserModel.findByIdAndUpdate(
      id,
      { isVerified: true, otp: null },
      { new: true }
    );
    if (!updateUser) {
      return;
    }
    return updateUser;
  } catch (error) {
    handleError(error);
    throw new Error("something went wrong");
  }
};
