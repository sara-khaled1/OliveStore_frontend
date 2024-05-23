import { createBrowserRouter, RouterProvider } from "react-router-dom"

import "./App.css"
import Dashboard from "./Pages/Dashboard"
import { Home } from "./Pages/Home"
import { createContext, useState } from "react"
import { Product } from "./types"
import { ProductDetails } from "./Pages/ProductDetails"
import { Login } from "./Pages/Login"
import { Singnup } from "./Pages/Signup"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/dashboard",
    element: <Dashboard />
  },
  {
    path:  "/products/:productId",
    element: <ProductDetails />
  },
  {
    path:  "/login",
    element: <Login/>
  }
  ,

  {
    path:  "/signup",
    element: <Singnup/>
  }

])

type GlobalContextType = {
  state: GlobalState
  handleAddToCart: (product: Product) => void
  handleDeleteFromCart: (id: string) => void
}

type GlobalState = {
  cart: Product[]
}
export const GlobalContext = createContext<GlobalContextType | null>(null)

function App() {
  const [state, setState] = useState<GlobalState>({
    cart: []
  })
  const handleAddToCart = (product: Product) => {
    // const isDuplicated = state.cart.find((cartItem) => cartItem.id !== product.id)
    //   if (isDuplicated) return
    setState({
      ...state,
      cart: [...state.cart, product]
    })
  }

  const handleDeleteFromCart = (id: string) => {
    const filteredCart = state.cart.filter((item) => item.id !== id)

    setState({
      ...state,
      cart: filteredCart
    })
  }

  return (
    <div className="App">
      <GlobalContext.Provider value={{ state, handleAddToCart ,handleDeleteFromCart }}>
        <RouterProvider router={router} />
      </GlobalContext.Provider>
    </div>
  )
}

export default App
