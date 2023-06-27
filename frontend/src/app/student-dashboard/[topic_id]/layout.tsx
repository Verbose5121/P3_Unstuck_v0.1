// app/(signup)/layout.tsx
import Link from "next/link";
import { Button, Card } from "@chakra-ui/react";

export default function StudentDashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h2>component for overall progress </h2>
      <h2>layout section for loading the specific progress step/route</h2>
      <div> {children}</div>
    </>
  );
}
