"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { Metadata } from "next";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { redirect, useRouter } from "next/navigation";
import { Database } from "../lib/database.types";
import Link from "next/link";
import { Button } from "@chakra-ui/react";
import { Providers } from "./providers";

export default async function Home() {
  const router = useRouter();
  const supabase = createClientComponentClient<Database>();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };
  return (
    <Providers>
      <main>
        <div>
          <h1>Unstuck!</h1>
          <h3>
            This is a platform for students to get experience through real-world projects to gain a
            greater understanding of their skills, talents, interests and personality traits
          </h3>
          <p>
            Sherpa's lead students through developing problem statements called "Stucks" which refer
            to the topic that the sherpa has laid out. Then students start out on an Expedition,
            uncovering deeper learning and knowledge about the Stuck they are diving into. Students
            are trained in the process of using critical thinking and design thinking to get more
            understanding of a problem than they've ever had before.
          </p>
          <p>
            Unstuck helps students find direction during the project phase, guiding them through
            self-reflection to get the most learning possible from completing their projects. This
            will help give students direction after high-school, and it's all about
            self-exploration!
          </p>
          <Link
            href="/login"
            className="login-nav-button"
            style={{ textDecoration: "none" }}>
            {" "}
            <Button
              colorScheme="black"
              variant="outline"
              size="sm">
              {" "}
              Login
            </Button>
          </Link>

          <Link
            href="/signup"
            className="signup-nav-button"
            style={{ textDecoration: "none" }}>
            {" "}
            <Button
              colorScheme="black"
              variant="outline"
              size="sm">
              {" "}
              Sign Up
            </Button>
          </Link>
          <br />
          <Button
            colorScheme="black"
            variant="outline"
            size="sm"
            onClick={handleSignOut}>
            {" "}
            Log Out
          </Button>
        </div>
      </main>
    </Providers>
  );
}
