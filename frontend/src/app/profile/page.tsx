"use client";
import type { Database } from "../../lib/database.types";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import UpdateProfileForm from "../../components/forms/UpdateProfileForm";

export default async function UpdateProfile() {
  const supabase = createClientComponentClient<Database>();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  console.log("user object page test: ", user);

  return <UpdateProfileForm />;
}
