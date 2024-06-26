import { createBrowserRouter, RouterProvider } from "react-router-dom"

import "./App.css"
import Dashboard from "./Pages/Dashboard"
import { Home } from "./Pages/Home"
import { createContext, useState } from "react"
import { DecodedUser, Product } from "./types"
import { ProductDetails } from "./Pages/ProductDetails"
import { Login } from "./Pages/Login"
import { Singnup } from "./Pages/Signup"
import { PrivateRoute } from "./components/privateRoute"
import About from "./Pages/AboutUs"
import Connect from "./Pages/Connect"

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
    path: "/about",
    element: <About />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/signup",
    element: <Singnup />
  },

  {
    path: "/Connect",
    element: <Connect />
  }
])

type GlobalContextType = {
  state: GlobalState
  handleAddToCart: (product: Product) => void
  handleDeleteFromCart: (id: string) => void
  handlStoreUser: (user: DecodedUser) => void
  handleRemoveUser: () => void
  handleRemoveCart: () => void
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

  const handleRemoveCart = () => {
    setState({
      ...state,
      cart: []
    })
  }
  const handleAddToCart = (product: Product) => {
    setState({
      ...state,
      cart: [...state.cart, product]
    })
  }

  const handleDeleteFromCart = (id: string) => {
    const cart = state.cart
    const index = cart.findIndex((item) => item.id === id)
    cart.splice(index, 1)

    setState({
      ...state,
      cart: cart
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
    <div className="App p-10">
      <GlobalContext.Provider
        value={{
          state,
          handleAddToCart,
          handleDeleteFromCart,
          handlStoreUser,
          handleRemoveUser,
          handleRemoveCart
        }}
      >
        <RouterProvider router={router} />
      </GlobalContext.Provider>
    </div>
  )
}

export default App
