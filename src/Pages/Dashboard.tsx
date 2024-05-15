import { useQueryClient } from "@tanstack/react-query"
import { useState } from "react"

export function Dashboard(){

  const queryClint=useQueryClient()
  const [product,setProduct]=useState({
    name :"",
    categoryId:""
  })
  
}
return(
<div>
<h1>The Dashbord:</h1>
</div>
)

export default Dashboard
