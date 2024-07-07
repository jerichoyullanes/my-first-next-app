import { redirect } from "next/navigation"; // if its already configure in next.config this is will not be necesarry anymore...

export const metadata = {
  title: "Signup Page",
  description: "This is the signup page",
};

const Pages = () => {
  redirect('/'); //...same with this redirect
  return (
    <div>Signup</div>
  )
}

export default Pages