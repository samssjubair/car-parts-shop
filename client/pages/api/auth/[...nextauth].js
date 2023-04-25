import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions = {
    pages: {
        signIn: "/login"
    },
    providers: [
        CredentialsProvider({
            name: "Credentials",
            // credentials: {
            //     username: { label: "Username", type: "text", placeholder: "jsmith" },
            //     password: { label: "Password", type: "password" }
            // },
            async authorize(credentials, req) {

                if(credentials.username === "admin" && credentials.password === "123456") {
                    return {
                        user: {
                            name: "admin",
                        }
                    }
                }

                return null
            }
        })
    ],
}

export default NextAuth(authOptions)