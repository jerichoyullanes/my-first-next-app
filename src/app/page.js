'use client' // used to render Client Components
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import Count from "./count";

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

  return (
    <main className={styles.main}>

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

      {/* useEffect and useState hook samples */}
      <h1>Hello my first name is {user1} {user2}</h1>
      <button onClick={() => update1() }>Change Name 1</button>
      <button onClick={() => update2() }>Change Name 2</button>

      <br/>
      {/* display the Count component for useMemo and useState samples */}
      <Count />

    </main>
  );
}

// SAMPLE COMPONENT
const Page = (props) => {
  return <div>{props.name} Page</div>;
};
