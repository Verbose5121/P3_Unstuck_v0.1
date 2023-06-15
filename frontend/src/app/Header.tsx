import type { NextComponentType, NextPageContext } from "next";
import Link from "next/link";
import { Center, Button } from "@chakra-ui/react";

interface Props {}

const Header: NextComponentType<NextPageContext, {}, Props> = (props: Props) => {
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
      </nav>
    </header>
  );
};

export default Header;
