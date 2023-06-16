"use client";
// app/(signup)/layout.tsx
import Link from "next/link";
import { Button, Card } from "@chakra-ui/react";

export default function LandingPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h2>
        An app that leverages the use of project based learning to enhance the student learning
        experience and empowers students with important critical thinking and problem solving
        skills.
      </h2>
      {/* Carousel of featured products */}
      <div> {children}</div>
    </>
  );
}
