"use-client";
import type { NextComponentType, NextPageContext } from "next";
import { Session, createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

import type { Database } from "../lib/database.types";

import Link from "next/link";
import { Button, Center } from "@chakra-ui/react";

export default async function () {
  const router = useRouter();
  const supabase = createClientComponentClient<Database>();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };

  return (
    <header>
      {" "}
      <nav className="nav">
        <Center>
          <Link
            href="/"
            className="logo"
            style={{ textDecoration: "none" }}>
            <h1>Unstuck</h1>
          </Link>
        </Center>
        <>
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
        </>
        <Button onClick={handleSignOut}>Log Out</Button>
      </nav>
    </header>
  );
}
