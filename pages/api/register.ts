import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/src/lib/prisma";
import sha256 from "crypto-js/sha256";

interface NextApiRequestBody {
  username: string;
  email: string;
  password: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method?.toLowerCase() !== "post")
    res.status(405).send("Method not allowed");

  const { username, email, password }: NextApiRequestBody =
    req.body as NextApiRequestBody;

  await prisma?.user.create({
    data: {
      name: username,
      email: email.toLowerCase(),
      password: sha256(password).toString(),
    },
  });

  res.status(200).json({ message: "User created successfully" });
}
