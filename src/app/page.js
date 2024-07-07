'use client' // used to render Client Components
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import Count from "./count";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import img1 from '../../public/next.svg';
import img2 from '../../public/vercel.svg';

export default function Home() {
  // useState hook samples 

  const color = (picker) => {
    alert(picker)
  };

  const [user1, setUser1] = useState("Jericho1");
  const [user2, setUser2] = useState("Jericho2");

  const update1 = () => {
    setUser1("Rhona1");
  }

  const update2 = () => {
    setUser2("Rhona2");
  }

  //  useEffect hook sample 
  useEffect(() => { console.log("useEffect Called") }, [user1]);

  const router = useRouter();

  // instead multiple routes used this:
  const navigate = (blog) => {
    router.push('/blogs/' + blog);
  }

  return (
    <main>

      {/* SAMPLE COMPONENTS */}
      <Page name="First"/>
      <Page name="Second"/>
      <Page name="Third"/>
      <Page name="Fourth"/>
      <Page name="Fifth"/>
      <Page name="Sixth"/>

      <br/>

      <button onClick={() => color("Red") }>Click here</button>
      <br/>
      <br/>

      {/* useEffect and useState hook samples */}
      <h1>Hello my first name is {user1} {user2}</h1>
      <button onClick={() => update1() }>Change Name 1</button>
      <button onClick={() => update2() }>Change Name 2</button>

      <br/>
      <br/>
      {/* display the Count component for useMemo and useState samples */}
      <Count />

      <br/>
      <br/>

      <p> Using Links </p>
      <button><Link href="/blogs">Go to Blogs Page</Link></button>
      <button><Link href="/Login-form">Go to Login Page</Link></button>

      <br/>
      <br/>

      <p> Using Router </p>
      <button onClick={ () => router.push("/blogs")} >Go to Blogs Page</button>
      <button onClick={ () => router.push("/Login-form")}>Go to Login Page</button>

      {/* instead of this... */}
      <button onClick={() => router.push("/Login-form/Signup")}>Signup Page</button>
      <button onClick={() => router.push("/blogs/NewsBlog")}>New Blog</button>
      {/* use navigate function: */}
      <p> Using Router with Navigate </p>
      <button onClick={() => navigate("NewBlog")}>New Blog</button>

      <br/>
      <br/>

      <p>Sample Image for Image Optimization</p>

      <p>From Local</p>
      <Image alt="Next Logo" width={50} height={50} src={ img1 } />

      <br/>

      <Image alt="Vercel Logo" width={50} height={50} src={ img2 } />

      <br/>
      <p>From Internet</p>
      <Image alt="Art" width={50} height={50} src='https://images.unsplash.com/photo-1692607519784-9e5406625d00?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D' />

      <br/>

      <Image alt="Big House" width={50} height={50} src='https://images.unsplash.com/photo-1719861032503-225fac307c59?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8' />
    </main>
  );
}

// SAMPLE COMPONENT
const Page = (props) => {
  return <div>{props.name} Page</div>;
};
