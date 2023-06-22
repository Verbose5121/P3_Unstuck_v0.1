import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse, NextRequest } from "next/server";

import type { Database } from "../../../lib/database.types";

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");

  if (code) {
    const supabase = createRouteHandlerClient({ cookies });
    await supabase.auth.exchangeCodeForSession(code);
  }

  // check if user logging in is type "sherpa" or "student", and route them to the corresponding dashboard
  // ? duplicate this auth/callback/route.ts file for specifically handling login vs signup

  // URL to redirect to after sign in process completes
  return NextResponse.redirect(new URL("http://localhost:3000/profile"));
}
