import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

import type { Database } from "../../../lib/database.types";
import LoginForm from "../../../components/auth/SignupForm";

export default async function SignupPage() {
  return (
    <div>
      <LoginForm />;
    </div>
  );
}
