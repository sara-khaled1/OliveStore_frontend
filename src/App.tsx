import { ChangeEvent, useState } from "react"
import "./App.css"
// import { Dashboard } from "./Pages/Dashboard"
import { Home } from "./Pages/Home"
import { Button } from "./components/ui/button"
import { Input } from "./components/ui/input"
import { useQueryClient } from "@tanstack/react-query"
import api from "./api"

function App() {
  const queryClient = useQueryClient()
  const [product, setProduct] = useState({
    name: "",
    categoryId: "",
    quantity: 0,
    image: "",
    price: 0,
    description: ""
  })
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setProduct({
      ...product,
      [name]: value
    })
  }
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await postProduct()
    queryClient.invalidateQueries({ queryKey: ["Product"] })
  }

  async function postProduct() {
    try {
      const res = await api.post("/products", product)
      return res.data
    } catch (error) {
      console.error(error)
      return Promise.reject(new Error("Something went wrong"))
    }
  }

  return (
    <>
      <div className="App">
        <Home />
        <form className="mt-20 w-1/2 mx-auto" onSubmit={handleSubmit}>
          <h3 className="text-4xl uppercase mb-10"> Add New Products</h3>
          <Input
            name="name"
            className="mt-5"
            type="text"
            placeholder="Name"
            onChange={handleChange}
          />
          <Input
            name="description"
            className="mt-1"
            type="text"
            placeholder="Description"
            onChange={handleChange}
          />
          <Input
            name="categoryId"
            className="mt-1"
            type="text"
            placeholder="Category"
            onChange={handleChange}
          />
          <Input
            name="image"
            className="mt-1"
            type="text"
            placeholder="image"
            onChange={handleChange}
          />
          <Input
            name="price"
            className="mt-1"
            type="number"
            placeholder="price"
            onChange={handleChange}
          />
          <Input
            name="quantity"
            className="mt-1"
            type="number"
            placeholder="quantity"
            onChange={handleChange}
          />

          <div className="flex justify-between ">
            <Button className="mt-6" type="submit">
              Submit
            </Button>
            <Button variant="outline" className="mt-6" type="reset">
              Reset
            </Button>
          </div>
        </form>

        {/* <Dashboard/> */}
      </div>
    </>
  )
}

export default App
