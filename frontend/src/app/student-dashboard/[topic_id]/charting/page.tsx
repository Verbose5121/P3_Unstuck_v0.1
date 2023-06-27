import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "../../lib/database.types";
import { Providers } from "@/providers";

export default async function ChartingPage() {
  const supabase = createClientComponentClient<Database>();
  const { data } = await supabase.from("user_details").select();
  return (
    <Providers>
      <div>
        <h1>Showing details about the step the student is on at the charting stage</h1>
        {/* add conditional logic for dynamically displaying which charting step component the student is currently on. */}
        {/* <ChartingComponentStep1/> */}
        {/* <ChartingComponentStep2/> */}
        {/* <ChartingComponentStep3/> */}
        {/* <ChartingComponentStep4/> */}
      </div>
    </Providers>
  );
}
