import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.blackSquare}></div>
      </div>
    </div>
  );
}
