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
    isLoading
  } = useQuery<Product>({
    queryKey: ["product"],
    queryFn: getProduct
  })


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
        <div className="flex justify-center items-start py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full bg-white dark:bg-gray-950 rounded-lg shadow-lg overflow-hidden">
        <div className="grid md:grid-cols-2 gap-0">
          <div className="aspect-[4/5] md:aspect-square bg-gray-100 dark:bg-gray-800 overflow-hidden">
            <img
              alt="Product Image"
              className="w-full h-full object-cover"
              height={750}
              src={product.image}
              style={{
                aspectRatio: "600/750",
                objectFit: "cover",
              }}
              width={600}
            />
          </div>
          <div className="p-8 md:p-12 flex flex-col justify-between">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold mb-2">{product.name}</h1>
            
              <p className=" text-base md:text-lg mb-6">
              {product.description}
              </p>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-3xl md:text-4xl "> {product.price}</span>
              <Button size="lg">Add to Cart</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
        

      </div>
    </>
  )
}


/**
 * v0 by Vercel.
 * @see https://v0.dev/t/7mpGoqOT7SI
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"

