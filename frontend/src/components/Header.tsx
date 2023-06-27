"use-client";
import { Session, createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

import type { Database } from "../lib/database.types";

import NavBar from "./NavBar";

export default async function () {
  const router = useRouter();
  const supabase = createClientComponentClient<Database>();

  return (
    <header>
      {" "}
      <NavBar />
    </header>
  );
}
