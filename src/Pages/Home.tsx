import { GlobalContext } from "../App"
import api from "@/api"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../components/ui/card"
import { Product } from "../types"
import { useQuery, useQueryClient } from "@tanstack/react-query"
import { ChangeEvent, useContext, useState } from "react"
import { NavBar } from "@/components/navbar"
import { Link, useSearchParams } from "react-router-dom"
import { Input } from "@/components/ui/input"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/hero"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"

export function Home() {
  const [searchParams, setSearchParams] = useSearchParams()
  const defaultSearch = searchParams.get("searchBy") || " "

  const [searchBy, setsearchBy] = useState(defaultSearch)
  const queryClient = useQueryClient()

  const context = useContext(GlobalContext)
  if (!context) throw Error("Context is missing")
  const { handleAddToCart } = context
  // ++++++++++++
  const getProducts = async () => {
    try {
      const res = await api.get(`/products?searchBy=${searchBy}`)
      return res.data
    } catch (error) {
      console.error(error)
      return Promise.reject(new Error("Something went wrong"))
    }
  }

  // Queries
  const { data, error } = useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: getProducts
  })
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setsearchBy(value)
  }
  const handleSearch = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    queryClient.invalidateQueries({ queryKey: ["products"] })
  }

  return (
    <>
      <NavBar />
      <Hero/>
      <div>
        <form className=" flex gap-4 w-full md:1/2 mx-auto mb-10" onSubmit={handleSearch}>
          <Input type="search" placeholder="Search for a products" onChange={handleChange} />
          <Button type="submit">Search</Button>
        </form>
      </div>

      <h1 className="text-4xl uppercase mb-10">Products</h1>
      <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
      <section className=" mt-16 grid grid-cols-4 gap-4 max-w6xl mx-50">
        {data?.length === 0 && <p>No products found ,Try searching </p>}
        {data?.map((product) => (
          <Card key={product.id} className="w-[350px]">
            <CardHeader>
              <CardTitle>{product.name}</CardTitle>
              <img src={product.image} style={{ width: "90%", height: "240px" }}></img>
              <p> price {product.price}</p>
              <p>quantity {product.quantity}</p>
            </CardHeader>
            <CardContent></CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">
                <Link to={`/products/${product.id}`}>Details</Link>
              </Button>

              <Button className="w-full" onClick={() => handleAddToCart(product)}>
                Add to cart
              </Button>
            </CardFooter>
          </Card>
        ))}
      </section>
      {error && <p className="text-red-500">{error.message}</p>}

      <Footer/>

    </>

  )
}
