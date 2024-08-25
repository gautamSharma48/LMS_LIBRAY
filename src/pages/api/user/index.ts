import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.status(404).json({ msg: "wrong method" });
  }
  res.status(200).json({ text: "Hello" });
}
