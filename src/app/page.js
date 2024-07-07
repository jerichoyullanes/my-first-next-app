'use client'
import styles from "./page.module.css";
import { useEffect, useState } from "react";

export default function Home() {
  const [user1, setUser1] = useState("Jericho1");
  const [user2, setUser2] = useState("Jericho2");

  const update1 = () => {
    setUser1("Rhona1");
  }

  const update2 = () => {
    setUser2("Rhona2");
  }

  useEffect(() => { console.log("useEffect Called") }, [user1]);

  // const color = (picker) => {
  //   alert(picker)
  // };

  return (
    <main className={styles.main}>
      {/* <Page name="First"/>
      <Page name="Second"/>
      <Page name="Third"/>
      <Page name="Fourth"/>
      <Page name="Fifth"/>
      <Page name="Sixth"/> */}

      <h1>Hello my first name is {user1} {user2}</h1>
      {/* <button onClick={() => color("Red") }>Click here</button> */}
      <button onClick={() => update1() }>Click here</button>
      <button onClick={() => update2() }>Click here</button>
    </main>
  );
}

const Page = (props) => {
  return <div>{props.name} Page</div>;
};
