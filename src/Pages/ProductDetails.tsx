import { useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"


import { NavBar } from "../components/navbar"
import api from "../api"
import { Product } from "../types"

export function ProductDetails() {
  const params = useParams()

  const getProduct = async () => {
    try {
      const res = await api.get(`/products/${params.productId}`)
      return res.data
    } catch (error) {
      console.error(error)
      return Promise.reject(new Error("Something went wrong"))
    }
  }

  const {
    data: product,
    error,
    isLoading
  } = useQuery<Product>({
    queryKey: ["product"],
    queryFn: getProduct
  })

  console.log(product)

  if (isLoading) {
    return <p>Loading...</p>
  }
  if (!product) {
    return <p>Product not found</p>
  }
  return (
    <>
      <NavBar />
      <div>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
      </div>
    </>
  )
}