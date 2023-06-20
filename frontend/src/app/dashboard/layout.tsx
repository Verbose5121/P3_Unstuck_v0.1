// app/(signup)/layout.tsx
import Link from "next/link";
import { Button, Card } from "@chakra-ui/react";

export default function StudentDashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h2>Student Dashboard</h2>
      {/* Carousel of featured products */}
      <div> {children}</div>
    </>
  );
}
