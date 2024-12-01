import { authConfig } from "./auth.config";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/models/userSchema";
import bcrypt from "bcryptjs";
import connectMongoDB from "@/libs/mongodb";


export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut,
} = NextAuth({
    ...authConfig,
    providers: [
        CredentialsProvider({
            credentials: {
                id: {},
                email: {},
                password: {},
            },
            async authorize(credentials) {
                connectMongoDB();

                if (!credentials) return null;

                try {
                    const user = await User.findOne({ email: credentials.email }).lean();
                    console.log(user);
                    if (user) {
                        const isMatch = await bcrypt.compare(
                            credentials.password,
                            user.password
                        );

                        if (isMatch) {
                            console.log(user._id.toString());

                            return {
                                id: user._id.toString(),
                                email: user.email,
                                name: user.username,
                            };

                        } else {
                            console.log("Email or Password is not correct");
                            return null;
                        }
                    } else {
                        console.log("User not found");
                        return null;
                    }
                } catch (error:any) {
                    console.log("An error occured: ", error);
                    return null;
                } 
            }
        })
    ],
    callbacks: {
        async session( {session, token} ) {
          session.user.id = token.id;
          session.user.email = token.email;
          session.user.name = token.name;
          console.log("session created")
          return session;
        },
        async jwt( {token, user} ) {
          if (user) {
            token.id = user.id;
            token.email = user.email;
            token.name = user.name;
          }
          console.log("token created")
          return token;
        },
      },
})