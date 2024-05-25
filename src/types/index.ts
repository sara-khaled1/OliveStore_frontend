
export type Product = {
  id: string
  name: string
  image:string
  price:number
  quantity:number
  categoryId: number
  description:string


}

export type User ={
  id:string
  fullName: string
  phone:number 
  email: string
  role: keyof typeof ROLE
  }

export const ROLE ={
  Admin:"Admin" ,
  Customer : "Customer"
} as const



export type DecodedUser = {
aud : string  
emailaddress:string
exp :number
iss : string
name: string
nameidentifier: string
role: keyof typeof ROLE
}