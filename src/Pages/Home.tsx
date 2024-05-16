import api from "@/api"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { Product } from "@/types"
import { useQuery } from "@tanstack/react-query"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel"
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger
} from "@/components/ui/menubar"

// export default Home
export function Home() {
  const getProducts = async () => {
    try {
      const res = await api.get("/products")
      return res.data
    } catch (error) {
      console.error(error)
      return Promise.reject(new Error("Something went wrong"))
    }
  }

  // Queries
  const { data, error } = useQuery<Product[]>({
    queryKey: ["Product"],
    queryFn: getProducts
  })
  return (
    <div>
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Home</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Product</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Order</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Cart</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>

      <Carousel className="w-full max-w-xs">
        <CarouselContent>
          <h1 className="text-1xl uppercase mb-10">Products</h1>
          {Array.from({ length: 10 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-4xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <h1 className="text-4xl uppercase mb-10">Products</h1>
      <section className="flex  flex-col md:flex-row gap-4 justify-between max-w6xl mx-50">
        {data?.map((Product) => (
          <Card key={Product.id} className="w-[350px]">
            <CardHeader>
              <CardTitle>{Product.name}</CardTitle>
              <img src={Product.image} style={{ width: "90%", height: "240px" }}></img>
              <p> price {Product.price}</p>
              <p>quantity {Product.quantity}</p>
            </CardHeader>
            <CardContent></CardContent>
            <CardFooter>
              <Button className="w-full">Add to cart</Button>
            </CardFooter>
          </Card>
        ))}
      </section>
      {error && <p className="text-red-500">{error.message}</p>}
    </div>
  )
}
