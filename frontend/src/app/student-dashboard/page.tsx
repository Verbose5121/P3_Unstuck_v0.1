import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "../../lib/database.types";
import { Button } from "@/components/ui/button";

export default async function StudentDashboardPage() {
  // const { data } = await supabase.from("user_details").select();
  const supabase = createClientComponentClient<Database>();

  return (
    <div>
      <h1>Student picking the topic from all the topics they've already joined to</h1>
      <h3>enter code for joining new topic</h3>
      <Button variant="secondary">Button</Button>
    </div>
  );
}
