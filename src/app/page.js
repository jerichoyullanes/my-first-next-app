'use client'
import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {
  const [user, setUser] = useState("Jericho");

  const update = () => {
    setUser("Rhona");
  }

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

      <h1>Hello my first name is {user}</h1>
      {/* <button onClick={() => color("Red") }>Click here</button> */}
      <button onClick={() => update() }>Click here</button>
    </main>
  );
}

const Page = (props) => {
  return <div>{props.name} Page</div>;
};
