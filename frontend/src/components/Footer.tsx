import type { NextComponentType, NextPageContext } from "next";
import Link from "next/link";

export default async function Footer() {
  return (
    <footer>
      <Link
        href="/about"
        style={{ textDecoration: "none" }}>
        About
      </Link>
    </footer>
  );
}
