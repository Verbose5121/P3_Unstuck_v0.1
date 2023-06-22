import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Database } from "../../lib/database.types";

export default async function ExpeditionPage() {
  const supabase = createServerComponentClient<Database>({ cookies });
  //   const { data } = await supabase.from("user_details").select();
  return (
    <div>
      <h1>Showing details about the step the student is on at the expedition stage</h1>
      {/* add conditional logic for dynamically displaying which expedition step component the student is currently on. */}
      {/* <expeditionComponentStep1/> */}
      {/* <expeditionComponentStep2/> */}
      {/* <expeditionComponentStep3/> */}
      {/* <expeditionComponentStep4/> */}
    </div>
  );
}
