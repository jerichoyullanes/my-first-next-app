'use client' // used to render Client Components
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import Count from "./count";
import Link from "next/link";
import { useRouter } from "next/navigation";

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

    </main>
  );
}

// SAMPLE COMPONENT
const Page = (props) => {
  return <div>{props.name} Page</div>;
};
