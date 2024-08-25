import { createUser } from "@/lib/actions/user";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req:NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
      return res.status(404).json({ msg: "wrong method" });
    }
    const data = req.body;
    const userResponse = await createUser(data);
    return res.status(200).json(userResponse);
  }
  