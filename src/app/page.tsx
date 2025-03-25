import Head from "next/head";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Black Square</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className={styles.page}>
        <div className={styles.blackSquare}></div>
      </div>
    </>
  );
}
