import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

import LoginForm from "@/components/forms/LoginForm";

import type { Database } from "@/lib/database.types";


export default async function LoginPage() {
  const supabase = createServerComponentClient<Database>({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  return <LoginForm session={session} />;
}