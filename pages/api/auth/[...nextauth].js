import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default NextAuth({
  // Configure one or more authentication providers
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.NEXTAUTH_SECRET_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NEXTAUTH_SECRET_GOOGLE_CLIENT_SECRET
    })
  ],
  pages: {
    signIn: '/signin',
  }
})