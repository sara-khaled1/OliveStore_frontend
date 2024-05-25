import { ReactElement } from "react"
import { Navigate } from "react-router-dom"
import jwt from "jwt-decode"

import { ROLE } from "../types"
import { reshapeUser } from "../lib/utils"

export function PrivateRoute({ children }: { children: ReactElement }) {
  const token = localStorage.getItem("token") || ""

  if (!token) return <Navigate to="/" />

  const decodedToken = jwt(token)

  const decodedUser = reshapeUser(decodedToken)

  return decodedUser.role === ROLE.Customer ? <Navigate to="/" /> : children
}


















/*
export function PriveteRoute ({children}:{children:ReactElement}){
console.log("Class A")
const token = localStorage.getItem("token") || ""
const decodedToken = jwt(token)
const decodedUser: any = {}

if (decodedToken) {
  for (const [key, value] of Object.entries(decodedToken)) {
    let cleanKey = ""
    if (key.startsWith("http")) {
      cleanKey = key.split("identity/claims/")[1]
    } else {
      cleanKey = key
    }

    decodedUser[cleanKey] = value
  }
}
console.log("decodedUser.role",decodedUser.role)
console.log("decodedUser.customer",decodedUser.Customer)

useEffect(()=>{

  if (decodedUser.role === ROLE.Customer) {
  
    // Exit
  }
}
)
return   
<>
<h1>q</h1>
</>
}

*/
