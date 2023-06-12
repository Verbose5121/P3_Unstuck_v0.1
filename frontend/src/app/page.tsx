import Image from "next/image";
import styles from "./page.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Unstuck",
};

export default function Home() {
  return (
    <main>
      <div>
        <p>this is the homepage</p>
      </div>
    </main>
  );
}
