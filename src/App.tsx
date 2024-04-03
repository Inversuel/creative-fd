import styles from "./App.module.css";
import Hero from "./components/hero/hero";

function App() {
  return (
    <div className={styles.container}>
      <Hero />
      <section className={styles.section}>
        <div className={styles.box} />
      </section>
    </div>
  );
}

export default App;
