// import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/components/Hero/Hero";
// import Header from "@/components/Header/Header";

export default function MainPage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Hero />
      </main>
    </div>
  );
}
