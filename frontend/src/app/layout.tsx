"use client";
import "./globals.css";

import { Inter } from "next/font/google";
import { Providers } from "./providers";
import Header from "../components/Header";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Unstuck",
//   description:
//     "Helping students get unstuck from their projects, and provide a good framework for them to use critical thinking to achieve bigger and better things!",
// };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
