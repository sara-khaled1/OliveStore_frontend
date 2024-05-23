import api from "@/api"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChangeEvent, FormEvent, useState } from "react"

export function Login() {
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
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const token = await handlLogin()
    localStorage.setItem("token",token)
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
  return (
    <div>
      <h3>Login</h3>
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
