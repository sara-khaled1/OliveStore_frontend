import { Link } from "react-router-dom"
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

  return (
    <div className="flex justify-between mb-20">
      <h3>LOGO</h3>

      <NavigationMenu>
        <NavigationMenuList className="gap-4">
          <NavigationMenuItem>
            <Link to="/">
              <NavigationMenuLink
                style={{
                  fontWeight: "bold",
                  fontSize: "30px",
                  fontFamily: "Arial, sans-serif",
                  color: "white"
                }}
              >
                {" "}
                Home{" "}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/">
              <NavigationMenuLink
                style={{
                  fontWeight: "bold",
                  fontSize: "30px",
                  fontFamily: "Arial, sans-serif",
                  color: "white"
                }}
              >
                {" "}
                Contact Us
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/about">
              <NavigationMenuLink
                style={{
                  fontWeight: "bold",
                  fontSize: "30px",
                  fontFamily: "Arial, sans-serif",
                  color: "white"
                }}
              >
                About Us
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          {state.user?.role === ROLE.Admin && (
            <NavigationMenuItem
              style={{
                fontWeight: "bold",
                fontSize: "30px",
                fontFamily: "Arial, sans-serif",
                color: "white"
              }}
            >
              <Link to="/dashboard">
                <NavigationMenuLink>Dashboard</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          )}
          {!state.user && (
            <NavigationMenuItem
              style={{
                fontWeight: "bold",
                fontSize: "30px",
                fontFamily: "Arial, sans-serif",
                color: "white"
              }}
            >
              <Link to="/signup">
                <NavigationMenuLink
                  style={{
                    fontWeight: "bold",
                    fontSize: "30px",
                    fontFamily: "Arial, sans-serif",
                    color: "white"
                  }}
                >
                  Signup
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          )}
          {!state.user && (
            <NavigationMenuItem>
              <Link to="/login">
                <NavigationMenuLink
                  style={{
                    fontWeight: "bold",
                    fontSize: "30px",
                    fontFamily: "Arial, sans-serif",
                    color: "white"
                  }}
                >
                  Login
                </NavigationMenuLink>
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

      <Cart />
    </div>
  )
}
