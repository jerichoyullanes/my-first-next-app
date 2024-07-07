'use client'
import styles from "./page.module.css";

export default function Home() {
  const color = (picker) => {
    alert(picker)
  };

  return (
    <main className={styles.main}>
      {/* <Page name="First"/>
      <Page name="Second"/>
      <Page name="Third"/>
      <Page name="Fourth"/>
      <Page name="Fifth"/>
      <Page name="Sixth"/> */}

      <h1>Hello World!</h1>
      <button onClick={() => color("Red") }>Click here</button>
    </main>
  );
}

const Page = (props) => {
  return <div>{props.name} Page</div>;
};
