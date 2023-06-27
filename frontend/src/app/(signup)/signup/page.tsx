import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

import type { Database } from "../../../lib/database.types";
import SignupForm from "../../../components/auth/SignupForm";
import { Providers } from "@/providers";

export default async function SignupPage() {
  return (
    <div>
      <Providers>
        <SignupForm />;
      </Providers>
    </div>
  );
}
