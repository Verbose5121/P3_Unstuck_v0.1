import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "../../../lib/database.types";
import { Providers } from "@/providers";

export default async function TopicPage() {
  const supabase = createClientComponentClient<Database>();
  const { data } = await supabase.from("topics").select();
  return (
    <Providers>
      <div>
        <h1>Showing the list of topics the student that's logged in has access to</h1>
      </div>
    </Providers>
  );
}
