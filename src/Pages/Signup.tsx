import api from "@/api"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChangeEvent, FormEvent, useState } from "react"
import { useNavigate } from "react-router-dom"

export function Singnup() {
  const navigate = useNavigate()

  const [user, setUser] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: 0
  })

  console.log("user values ", user)

  const handlSigup = async () => {
    try {
      const res = await api.post(`/users/signup`, user)
      console.log("res data ", res.data)
      return res.data
    } catch (error) {
      console.error(error)
      return Promise.reject(new Error("Something went wrong"))
    }
  }
  const handlChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, valueAsNumber } = e.target

    setUser({
      ...user,
      [name]: name === "phone" ? valueAsNumber : value
    })
  }
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const response = await handlSigup()
    if (response) {
      navigate("/login")
    }
  }

  return (
    <div>
      <h3>Singnup</h3>
      <form onSubmit={handleSubmit} className="w-full md:w-1/3 mx-auto">
        <Input
          name="fullName"
          className="mt-4"
          type="text"
          placeholder="fullName"
          onChange={handlChange}
        />
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
        <Input
          name="phone"
          className="mt-4"
          type="number"
          placeholder="phone"
          onChange={handlChange}
        />
        <div className="w-full md:w-1/3 mx-auto">
          <Button variant="link" className="mt-4">
            -----{" "}
          </Button>
          <Button type="submit" className=" mt-4">
            Sign up
          </Button>
        </div>
      </form>
    </div>
  )
}
