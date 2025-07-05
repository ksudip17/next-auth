import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import { connectDB } from "./app/lib/connectDB";
import User from "./app/models/userModel";

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [Google],
    session: {maxAge : 3600},
    callbacks : {
         async signIn({user}) {
             try {
                 await connectDB();
                 const existingUser = await User.findOne({email : user.email})
                 if (!existingUser) { 
                    await User.create(user)
                 }
                return true;
             } catch (error) {
                 console.log(error);
                 return false;
             }
        }
    }
})
