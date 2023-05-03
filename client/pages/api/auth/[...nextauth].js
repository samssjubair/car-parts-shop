import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import axios from "axios";

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
                try {
                    // Make an API request to verify the user's credentials
                    const response = await axios.post(
                      "http://localhost:4800/api/v1/admin/login",
                      {
                        email: credentials.email,
                        password: credentials.password,
                      }
                    );
                    const data = response.data;
                    // console.log(data,"hola")

                    if (data.user) {
                        return {
                          user: {
                            name: data.user.username,
                            email: data.user.email,
                          },
                        };
                      } else {
                        return null;
                      }
                    } catch (error) {
                      console.error(error);
                      return null;
                    }
            }
        })
    ],
}

export default NextAuth(authOptions)