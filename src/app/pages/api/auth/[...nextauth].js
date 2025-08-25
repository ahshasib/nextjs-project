import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // এখানে তুমি database check করতে পারো
        if (
          credentials.email === "test@gmail.com" &&
          credentials.password === "123456"
        ) {
          return { id: "1", name: "Test User", email: "test@gmail.com" };
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/login", // custom login page
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      return "/products"; // successful login হলে /products এ redirect
    },
  },
};

export default NextAuth(authOptions);
