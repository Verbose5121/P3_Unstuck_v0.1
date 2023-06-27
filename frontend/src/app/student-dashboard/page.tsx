import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Database } from "../../lib/database.types";
import { redirect } from "next/navigation";

export default async function StudentDashboardPage() {
  // const { data } = await supabase.from("user_details").select();
  const supabase = createClientComponentClient<Database>();

  return (
    <div>
      <h1>Student picking the topic from all the topics they've already joined to</h1>
      <h1>enter code for joining new topic</h1>
    </div>
  );
}
