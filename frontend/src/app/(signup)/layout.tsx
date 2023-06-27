"use client";
import "../globals.css";

import { Inter } from "next/font/google";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Database } from "../../lib/database.types";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Unstuck",
//   description:
//     "Helping students get unstuck from their projects, and provide a good framework for them to use critical thinking to achieve bigger and better things!",
// };

export default function UnauthenticatedLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
