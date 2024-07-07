"use client"
import { useRouter } from "next/navigation"

const Page = () => {

  const router = useRouter();

  return (
    <>
      <h1>Blog Page</h1>
      
      <button onClick={() => router.push("/")}>Home Page</button>
      <button onClick={() => router.push("/Login-form")}>Login Form</button>
    </>
  )
}

export default Page;