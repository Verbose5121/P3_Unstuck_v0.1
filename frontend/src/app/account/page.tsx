import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Database } from "../../lib/database.types";
import AccountForm from "./accountform";

export default async function SignupPage() {
  const supabase = createServerComponentClient<Database>({ cookies });

  console.log("in app/account/page.tsx, supabase:", supabase);
  const {
    data: { session },
  } = await supabase.auth.getSession();

  console.log("Supabase session: ", session);

  return <AccountForm session={session} />;
}
