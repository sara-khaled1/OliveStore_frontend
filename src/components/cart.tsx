import { useContext } from "react"

import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import { Button } from "./ui/button"
import { GlobalContext } from "../App"
import { ShoppingCart } from "lucide-react"
import { Product } from "../types"
import api from "../api"

type OrderItem = {
  quantity: number
  productId: string
}
type OrderCheckout = {
  addressId: string
  items: OrderItem[]
}
export function Cart() {
  const context = useContext(GlobalContext)
  if (!context) throw Error("Context is missing")

  const { state, handleDeleteFromCart, handleAddToCart, handleRemoveCart } = context

  const groups = state.cart.reduce((acc, obj) => {
    const key = obj.id
    const curGroup = acc[key] ?? []
    return { ...acc, [key]: [...curGroup, obj] }
  }, {} as { [productId: string]: Product[] })

  const total = state.cart.reduce((acc, curr) => {
    return acc + curr.price
  }, 0)

  const checkoutOrder: OrderCheckout = {
    addressId: "09fa2693-dc58-445c-b2d0-15ee1742926c",
    items: []
  }

  Object.keys(groups).forEach((key) => {
    const products = groups[key]

    checkoutOrder.items.push({
      quantity: products.length,
      productId: key
    })
  })

  const handleCheckout = async () => {
    try {
      const token = localStorage.getItem("token")
      const res = await api.post("/orders/checkout", checkoutOrder, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      if (res.status === 201) {
        handleRemoveCart()
      }
      return res.data
    } catch (error) {
      console.error(error)
      return Promise.reject(new Error("Something went wrong"))
    }
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="flex gap-1">
          <ShoppingCart   style={{ color: "white" }}  className="cursor-pointer " />
          <span  style={{ color: "white" }} >({Object.keys(groups).length})</span>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-300">
        <div>
          {state.cart.length === 0 && <p>No items</p>}
          {Object.keys(groups).map((key) => {
            const products = groups[key]
            const product = products[0]
            const total = products.reduce((acc, curr) => {
              return acc + curr.price
            }, 0)
            return (
              <div className=" colermb-4 flex items-center gap-4" key={product.id}>
                <img src={product.image} alt={product.name} className="w-10 h-10 object-contain" />
                <h4>{product.name}</h4>
                <span className="font-bold">{total}</span>
                <Button variant="outline" onClick={() => handleDeleteFromCart(product.id)}>
                  -
                </Button>
                <span  className="font-bold">({products.length})</span>

                <Button variant="outline" onClick={() => handleAddToCart(product)}>
                  +
                </Button>
              </div>
            )
          })}
        </div>

        <p>Total: {total}</p>
        <Button onClick={handleCheckout}>Checkout</Button>
      </PopoverContent>
    </Popover>
  )
}
