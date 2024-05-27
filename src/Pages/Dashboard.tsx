import { ChangeEvent, useState } from "react"
import { useQuery, useQueryClient } from "@tanstack/react-query"

import "../App.css"
import api from "@/api"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table"
import { Product, User } from "@/types"
import { EditDialog } from "@/components/editDialog"
import { NavBar } from "@/components/navbar"

export function Dashboard() {
  const queryClient = useQueryClient()

  const [product, setProduct] = useState({
    name: "",
    categoryId: "",
    quantity: 0,
    image: "",
    price: 0,
    description: ""
  })
  const [user, setUser] = useState({
    fullName: "",
    phone: 0,
    email: "",
    role: ""
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setProduct({
      ...product,
      [name]: value
    })

    setUser({
      ...user,
      [name]: value
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await postProduct()
    queryClient.invalidateQueries({ queryKey: ["Product"] })
  }

  const postProduct = async () => {
    try {
      const res = await api.post("/products", product)
      return res.data
    } catch (error) {
      console.error(error)
      return Promise.reject(new Error("Something went wrong"))
    }
  }

  const postUser = async () => {
    try {
      const res = await api.post("/users", user)
      return res.data
    } catch (error) {
      console.error(error)
      return Promise.reject(new Error("Something went wrong"))
    }
  }
  const deleteUser = async (id: string) => {
    try {
      const res = await api.delete(`/users/${id}`)
      return res.data
    } catch (error) {
      return Promise.reject(new Error("Something went wrong"))
    }
  }

  const deleteProduct = async (id: string) => {
    try {
      const res = await api.delete(`/products/${id}`)
      return res.data
    } catch (error) {
      return Promise.reject(new Error("Something went wrong"))
    }
  }

  const handleDeleteProduct = async (id: string) => {
    await deleteProduct(id)
    queryClient.invalidateQueries({ queryKey: ["Product"] })
  }

  const getProducts = async () => {
    try {
      const res = await api.get("/products")
      return res.data
    } catch (error) {
      console.error(error)
      return Promise.reject(new Error("Something went wrong"))
    }
  }
  const getUsers = async () => {
    try {
      const token = localStorage.getItem("token")
      const res = await api.get("/users", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      return res.data
    } catch (error) {
      console.error(error)
      return Promise.reject(new Error("Something went wrong"))
    }
  }
  const { data: products, error } = useQuery<Product[]>({
    queryKey: ["Product"],
    queryFn: getProducts
  })
  const { data: users, error: userError } = useQuery<User[]>({
    queryKey: ["users"],
    queryFn: getUsers
  })
  return (
    <>
      <NavBar />

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
          // shadcn ui
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
      <h3 className="text-2xl font-medium mb-4 mt-7">A List Of Products</h3>

      <Table className="text-center">
        <TableCaption></TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>quantity</TableHead>
            <TableHead>CategryId</TableHead>
            <TableHead>name</TableHead>

            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products?.map((product) => (
            <TableRow key={product.id}>
              <TableCell className="text-left">{product.name}</TableCell>
              <TableCell className="text-left">{product.price}</TableCell>
              <TableCell className="text-left">{product.quantity}</TableCell>
              <TableCell className="text-left">{product.categoryId}</TableCell>
              <TableCell className="text-left">
                <Button variant="destructive" onClick={() => handleDeleteProduct(product.id)}>
                  X
                </Button>
              </TableCell>
              <TableCell className="text-left">
                <EditDialog product={product} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter></TableFooter>
      </Table>
    </>
  )
}

export default Dashboard
