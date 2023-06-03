import NextAuth from "next-auth/next";
import CredentialsProvider  from "next-auth/providers/credentials";
import User from "../../../../models/user";
import {connectToDB} from "../../../../utils/db";
import bcrypt from  'bcrypt'
import  {signJwtToken}  from "../../../../utils/jwt"

const secret = process.env.NEXTAUTH_SECRET || crypto.randomBytes(32).toString('hex');

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            type: 'credentials',
            credentials: {
                username: {label: 'Email', type: 'text', placeholder: 'John Doe'},
                password: {label: 'Password', type: 'password'}
            },
            async authorize(credentials, req){
                const {email, password} = credentials

                await connectToDB()
                                
                const user = await User.findOne({ email })

                if(!user){
                    throw new Error("Invalid input")
                }

                // 2 parameters -> 
                // 1 normal password -> 123123
                // 2 hashed password -> dasuytfygdsaidsaugydsaudsadsadsauads
                const comparePass = await bcrypt.compare(password, user.password)

                if(!comparePass){
                    throw new Error("Invalid input")
                } else {
                    const {password, ...currentUser} = user._doc

                    const accessToken = signJwtToken(currentUser, {expiresIn: '6d'})

                    return {
                        ...currentUser,
                        accessToken
                    }
                }
            }
        })
    ],
    secret: secret,

    pages: {
        signIn: '/login'
    },
    callbacks: {
        async jwt({token, user}){
            if(user){
                token.accessToken = user.accessToken
                token._id = user._id
            }

            return token
        },
        async session({session, token}){
            if(token){
                session.user._id = token._id
                session.user.accessToken = token.accessToken
            }

            return session
        }
    }
})

export {handler as GET, handler as POST}