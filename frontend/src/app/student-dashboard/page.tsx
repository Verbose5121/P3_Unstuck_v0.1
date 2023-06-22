import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Database } from "../../lib/database.types";

export default async function StudentDashboardPage() {
  const supabase = createServerComponentClient<Database>({ cookies });
  const { data } = await supabase.from("user_details").select();
  return (
    <div>
      <h1>Student picking the topic from all the topics they've already joined to</h1>
      <h1>enter code for joining new topic</h1>
    </div>
  );
}
