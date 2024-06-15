import Image from "next/image";
import styles from "./page.module.css"
import { ExampleClient } from "@/components/ExampleClient";
import ExampleServer from "@/components/ExampleServer";

export default function Home() {

  console.log("Where do I render");

  return (
    <main className={styles.main}>
      <ExampleClient />
      <ExampleServer />
      HELLO
    </main>
  );
}
