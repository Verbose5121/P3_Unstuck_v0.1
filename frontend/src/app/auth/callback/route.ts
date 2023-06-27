import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse, NextRequest } from "next/server";

import type { Database } from "../../../lib/database.types";
import { stringify } from "querystring";

export async function GET(req: NextRequest) {
  const supabase = createRouteHandlerClient<Database>({ cookies });
  const requestUrl = new URL(req.url);
  const code = requestUrl.searchParams.get("code");

  if (code) {
    await supabase.auth.exchangeCodeForSession(code);

    // const {
    //   data: { user },
    // } = await supabase.auth.getUser();
    // console.log("user object: ", user);
    // console.log("trying to create new user_details record");
    // const { data, error } = await supabase.from("user_details").select("*");

    // if (data: {user})
    //   upsert([
    //     {
    //       user_id: user?.id as string,
    //       user_type: userType,
    //       first_name: firstName,
    //       last_name: lastName,
    //       display_name: displayName,
    //     },
    //   ]);
  }

  // check if user logging in is type "sherpa" or "student", and route them to the corresponding dashboard
  // ? duplicate this auth/callback/route.ts file for specifically handling login vs signup

  // URL to redirect to after sign in process completes

  // need an if(user_details are not filled out, route to "http://localhost:3000/profile")
  return NextResponse.redirect(new URL(`/student-dashboard`, req.url));
}
