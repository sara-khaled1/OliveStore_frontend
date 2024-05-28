import { Link } from "react-router-dom"
import { useState } from "react"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList
} from "./ui/navigation-menu"
import { Cart } from "./cart"
import { useContext } from "react"
import { GlobalContext } from "../App"
import { ROLE } from "../types"
import { Button } from "./ui/button"

export function NavBar() {
  const context = useContext(GlobalContext)
  if (!context) throw Error("Context is missing")
  const { state, handleRemoveUser } = context

  console.log(state)

  const handleLogout = () => {
    if (typeof window !== undefined) {
      window.location.reload()
    }

    localStorage.removeItem("token")
    localStorage.removeItem("user")

    handleRemoveUser()
  }

  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#9eba6e] text-white py-4 px-8 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <img src="../Olive.png" alt="Logo" style={{ height: "90px", marginRight: "10px" }} />
        </div>
        <div className="hidden lg:block">
          <NavigationMenu>
            <NavigationMenuList className="flex gap-4">
              <NavigationMenuItem>
                <Link to="/">
                  <NavigationMenuLink>Home</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/Connect">
                  <NavigationMenuLink>Contact Us</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/about">
                  <NavigationMenuLink>About Us</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              {state.user?.role === ROLE.Admin && (
                <NavigationMenuItem>
                  <Link to="/dashboard">
                    <NavigationMenuLink>Dashboard</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              )}
              {!state.user && (
                <NavigationMenuItem>
                  <Link to="/signup">
                    <NavigationMenuLink>Signup</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              )}
              {!state.user && (
                <NavigationMenuItem>
                  <Link to="/login">
                    <NavigationMenuLink>Login</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              )}
              {state.user && (
                <Button variant="outline" onClick={handleLogout}>
                  Logout
                </Button>
              )}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <Cart />
        <div className="block lg:hidden">
          <button className="text-white focus:outline-none" onClick={toggleMenu}>
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="bg-[#9eba6e] py-4">
          <NavigationMenu>
            <NavigationMenuList className="flex flex-col gap-4">
              <NavigationMenuItem>
                <Link to="/">
                  <NavigationMenuLink onClick={toggleMenu}>Home</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/Connect">
                  <NavigationMenuLink onClick={toggleMenu}>Contact Us</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/about">
                  <NavigationMenuLink onClick={toggleMenu}>About Us</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              {state.user?.role === ROLE.Admin && (
                <NavigationMenuItem>
                  <Link to="/dashboard">
                    <NavigationMenuLink onClick={toggleMenu}>Dashboard</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              )}
              {!state.user && (
                <NavigationMenuItem>
                  <Link to="/signup">
                    <NavigationMenuLink onClick={toggleMenu}>Signup</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              )}
              {!state.user && (
                <NavigationMenuItem>
                  <Link to="/login">
                    <NavigationMenuLink onClick={toggleMenu}>Login</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              )}
              {state.user && (
                <Button variant="outline" onClick={handleLogout}>
                  Logout
                </Button>
              )}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      )}
    </nav>
  )
}
