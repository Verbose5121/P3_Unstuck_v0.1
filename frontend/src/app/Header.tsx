"use-client";
import type { NextComponentType, NextPageContext } from "next";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";

import type { Database } from "@/lib/database.types";
import NavBar from "../components/navbar";
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
    <NavBar />
    </header>
  );
};

export default Header;
