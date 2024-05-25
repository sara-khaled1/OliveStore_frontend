import { createBrowserRouter, RouterProvider } from "react-router-dom"

import "./App.css"
import Dashboard from "./Pages/Dashboard"
import { Home } from "./Pages/Home"
import { createContext, useEffect, useState } from "react"
import { DecodedUser, Product } from "./types"
import { ProductDetails } from "./Pages/ProductDetails"
import { Login } from "./Pages/Login"
import { Singnup } from "./Pages/Signup"
import { PrivateRoute } from "./components/privateRoute"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    )
  },
  {
    path: "/products/:productId",
    element: <ProductDetails />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/signup",
    element: <Singnup />
  }
])

type GlobalContextType = {
  state: GlobalState
  handleAddToCart: (product: Product) => void
  handleDeleteFromCart: (id: string) => void
  handlStoreUser: (user: DecodedUser) => void
  handleRemoveUser:()=>void
}

type GlobalState = {
  cart: Product[]
  user: DecodedUser | null
}
export const GlobalContext = createContext<GlobalContextType | null>(null)

function App() {
  const [state, setState] = useState<GlobalState>({
    cart: [],
    user: null
  })

  // useEffect(() => {
  //   const user = localStorage.getItem("user")
  //   if (user) {
  //     const decodedUser = JSON.parse(user)
  //     setState({
  //       ...state,
  //       user: decodedUser
  //     })
  //   }
  // }, [])

  const handleAddToCart = (product: Product) => {
    const isDuplicated = state.cart.find((cartItem) => cartItem.id !== product.id)
    if (isDuplicated) return
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

  const handlStoreUser = (user: DecodedUser) => {
    setState({
      ...state,
      user
    })
  }

  const handleRemoveUser = () => {
    setState({
      ...state,
      user: null
    })
  }

  return (
    <div className="App">
      <GlobalContext.Provider
        value={{ state, handleAddToCart, handleDeleteFromCart, handlStoreUser,handleRemoveUser }}
      >
        <RouterProvider router={router} />
      </GlobalContext.Provider>
    </div>
  )
}

export default App
