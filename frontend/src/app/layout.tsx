"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import { Link } from "@chakra-ui/next-js";
import { Button } from "@chakra-ui/react";

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
          {" "}
          <header>
            <nav className="nav">
              <Link href="/" className="logo" style={{ textDecoration: "none" }}>
                Unstuck
              </Link>
              <Button>Test Button</Button>
            </nav>
          </header>
          {children}
          <footer className="footer">
            <p>Copyrights @ Team 1 (just some example footer content) </p>
          </footer>
        </Providers>
      </body>
    </html>
  );
}
