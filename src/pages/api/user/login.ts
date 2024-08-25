import { loginUser } from "@/lib/actions/user";
import {
  apiErrorResponseMessage,
  apiSuccessResponseMessage,
  handleError,
} from "@/lib/utils";
import { NextApiRequest, NextApiResponse } from "next";
import cookie from "cookie";

 const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res.status(405).json({ msg: "Method not allowed" }); // 405 for wrong method
  }
  const { email, password } = req.body;
  if (!email || !password) {
    return apiErrorResponseMessage(
      res,
      400,
      "email, and password are required fields",
      false
    );
  }
  try {
    const getUser = await loginUser({ email, password });
    if (getUser) {
     
      res.setHeader(
        "Set-Cookie",
        cookie.serialize("token", getUser?.token, {
          httpOnly: true, // Prevent access to the cookie from JavaScript
          secure: process.env.NODE_ENV === "production", // Use secure cookies in production
          maxAge: 60 * 60 * 24, // 1 day
          sameSite: "strict", // Strictly send the cookie for same-site requests
          path: "/", // Cookie will be accessible throughout the site
        })
      );

      return apiSuccessResponseMessage(res, 200, "login successfully", getUser);
    } else {
      return apiErrorResponseMessage(res, 404, "user not found", false);
    }
  } catch (error) {
    handleError(error);
    return apiErrorResponseMessage(res, 500, "something went wrong", false);
  }
};

export default handler;