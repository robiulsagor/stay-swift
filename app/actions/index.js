"use server";

import { signIn } from "@/auth";
import { userModel } from "@/models/user-model";
import bcrypt from "bcryptjs";

export const login = async (formData) => {
  const email = formData.get("email");
  const password = formData.get("password");

  if (!email || !password) {
    return {
      error: true,
      message: "Please provide a valid login details!",
    };
  }

  try {
    const response = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    console.log(response);
    return response;
  } catch (error) {
    console.log("error::: ", error);
    return {
      error: true,
      message: error.message || "Login error",
    };
  }
};

export const register = async (formData) => {
  const fname = formData.get("fname");
  const lname = formData.get("lname");
  const email = formData.get("email");
  const password = formData.get("password");

  if (!fname || !lname || !email || !password) {
    return {
      error: true,
      message: "All fields are required!",
    };
  }

  const name = `${fname} ${lname}`;
  const hashedPass = await bcrypt.hash(password, 5);

  try {
    const existUser = await userModel.findOne({ email });
    if (existUser) {
      return {
        error: true,
        message: "User with this email already exists!",
      };
    } else {
      await userModel.create({ name, email, password: hashedPass });
      return {
        error: false,
        message: "User created successfully!",
      };
    }
  } catch (error) {
    throw new Error(error);
  }
};
