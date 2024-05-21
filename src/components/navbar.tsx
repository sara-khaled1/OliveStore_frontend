import { Link } from "react-router-dom"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList
} 
from "./ui/navigation-menu"

import { useContext } from "react"
import { GlobalContext } from "../App"
import { Cart } from "./cart"


export function NavBar() {
  const context = useContext(GlobalContext)
  if (!context) throw Error("Context is missing")
  const { state } = context

  console.log(state)

  return (
    <div className="flex justify-between mb-20">
      <h3>The Olive</h3>

      <NavigationMenu>
        <NavigationMenuList className="gap-4">
          <NavigationMenuItem>
            <Link to="/">
              <NavigationMenuLink>Home</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
      
            <NavigationMenuItem>
              <Link to="/dashboard">
                <NavigationMenuLink>Dashboard</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
      
            <NavigationMenuItem>
              <Link to="/signup">
                <NavigationMenuLink>Signup</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
        
            <NavigationMenuItem>
              <Link to="/login">
                <NavigationMenuLink>Login</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
        
        </NavigationMenuList>
      </NavigationMenu>

      <Cart />
    </div>
  )
}