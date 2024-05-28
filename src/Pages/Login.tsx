import { GlobalContext } from "@/App"
import api from "@/api"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChangeEvent, FormEvent, useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import jwt from "jwt-decode"
import { reshapeUser } from "@/lib/utils"

export function Login() {
  const navigate = useNavigate()
  const context = useContext(GlobalContext)
  if (!context) throw Error("Context is missing")
  const { handlStoreUser } = context

  const [user, setUser] = useState({
    email: "",
    password: ""
  })
  const handlChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setUser({
      ...user,
      [name]: value
    })
  }

  const handlLogin = async () => {
    try {
      const res = await api.post(`/users/login`, user)
      console.log("res data ", res.data)
      return res.data
    } catch (error) {
      console.error(error)
      return Promise.reject(new Error("Something went wrong"))
    }
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    const token = await handlLogin()
    if (token) {
      const decodedToken = jwt(token)
      const user = reshapeUser(decodedToken)
      localStorage.setItem("token", token)
      localStorage.setItem("user", JSON.stringify(user))

      handlStoreUser(user)
      navigate("/")
    }
  }

  return (
    <div>
      <h1
        style={{
          fontWeight: "bold",
          fontSize: "55px",

          fontFamily: "Arial, sans-serif",
          color: "white"
        }}
      >
        Login
      </h1>
      <form className="w-full md:w-1/3 mx-auto" onSubmit={handleSubmit}>
        <Input
          name="email"
          className="mt-4"
          type="text"
          placeholder="Email"
          onChange={handlChange}
        />
        <Input
          name="password"
          className="mt-4"
          type="password"
          placeholder="Password"
          onChange={handlChange}
        />
        <div className="w-full md:w-1/3 mx-auto">
          <Button variant="link" className="mt-4">
            Create an Account{" "}
          </Button>

          <Button className="mt-4">Login</Button>
        </div>
      </form>
    </div>
  )
}
