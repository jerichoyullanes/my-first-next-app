"use client"
import { useRouter } from "next/navigation"

const Page = () => {

  const router = useRouter();

  return (
    <>
      <h1>Login Form</h1>

      <button onClick={() => router.push("/")}>Home Page</button>
      <button onClick={() => router.push("/blogs")}>Blogs Page</button>
    </>
  )
}

export default Page;