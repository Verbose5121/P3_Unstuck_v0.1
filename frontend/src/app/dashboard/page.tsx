import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Database } from "../../lib/database.types";

export default async function StudentDashboardPage() {
  const supabase = createServerComponentClient<Database>({ cookies });
  const { data } = await supabase.from("students").select();
  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
