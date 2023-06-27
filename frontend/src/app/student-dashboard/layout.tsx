// app/(signup)/layout.tsx
import Link from "next/link";
import { Button, Card } from "@chakra-ui/react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { redirect } from "next/navigation";
import { Database } from "../../lib/database.types";

export default async function StudentDashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h2>Student Dashboard</h2>
      {/* Carousel of featured products */}
      <div> {children}</div>
    </>
  );
}
