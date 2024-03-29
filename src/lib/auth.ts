import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import { prisma } from "@/src/lib/prisma";
import CredentialsProvider from "next-auth/providers/credentials";
import sha256 from "crypto-js/sha256";

export const { auth, handlers } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "credentials",
      type: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const user = await prisma.user.findFirst({
          where: {
            email: String(credentials.email),
            password: sha256(String(credentials.password)).toString(),
          },
        });

        if (user) {
          return user;
        }

        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXT_AUTH_SECRET,
  pages: {
    signIn: "/login",
  },
});

export const getAuth = async () => {
  return await auth();
};
