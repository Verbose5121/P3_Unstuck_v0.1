"use-client";
import type { NextComponentType, NextPageContext } from "next";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";

import type { Database } from "@/lib/database.types";

import Link from "next/link";
import { Center, Button } from "@chakra-ui/react";

interface Props {}

const Header: NextComponentType<NextPageContext, {}, Props> = (props: Props) => {
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
        <Button onClick={handleSignOut}>Log Out</Button>
      </nav>
    </header>
  );
};

export default Header;
