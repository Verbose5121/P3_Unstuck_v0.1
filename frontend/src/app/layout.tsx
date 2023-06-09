"use client";
import "./globals.css";
import React, { useState } from "react";

import { Inter } from "next/font/google";
import { Providers } from "./providers";
import { Center, Square, Circle } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import { Button } from "@chakra-ui/react";
import LoginForm from "./LoginForm";
import Footer from "./Footer";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Unstuck",
//   description:
//     "Helping students get unstuck from their projects, and provide a good framework for them to use critical thinking to achieve bigger and better things!",
// };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [login, setlogin] = useState(false);
  const [signup, setSignup] = useState(false);

  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          <Providers>
            <nav className="nav">
              <Center>
                <Link href="/" className="logo" style={{ textDecoration: "none" }}>
                  Unstuck
                </Link>
              </Center>

              <Button
                onClick={() => {
                  setlogin(true);
                  setSignup(false);
                }}
              >
                Login
              </Button>

              <Button>Sign Up</Button>
            </nav>
            <div className="login-form">
              <LoginForm />
            </div>

            {children}
            <Footer />
          </Providers>
        </main>
      </body>
    </html>
  );
}
