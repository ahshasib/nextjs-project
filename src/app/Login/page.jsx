import { getProviders, signIn } from "next-auth/react"
import { useState } from "react"

export default function Login({ providers }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = async (e) => {
    e.preventDefault()
    await signIn("credentials", {
      email,
      password,
      callbackUrl: "/products",
    })
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-96">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        
        {/* Email/Password Login */}
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg"
          />
          <button 
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
          >
            Login
          </button>
        </form>

        <div className="mt-6 text-center">Or</div>

        {/* Google Login */}
        <div className="mt-4">
          {providers && Object.values(providers).map((provider) => (
            provider.id === "google" && (
              <button
                key={provider.name}
                onClick={() => signIn(provider.id, { callbackUrl: "/products" })}
                className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
              >
                Continue with Google
              </button>
            )
          ))}
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const providers = await getProviders()
  return {
    props: { providers },
  }
}
