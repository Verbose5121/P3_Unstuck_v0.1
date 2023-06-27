import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  CardHeader,
  CardBody,
  CardFooter,
  Select,
} from "@chakra-ui/react"; 
import { Stack, HStack, VStack } from "@chakra-ui/react";
import { Box, Center, Link, Button, Card, Input } from "@chakra-ui/react";
import type { Database } from "../../lib/database.types";
import { createServerComponentClient, Session } from "@supabase/auth-helpers-nextjs";
import { useState } from "react";
import { redirect } from "next/navigation";
import { Providers } from "../providers";
import UpdateProfileForm from "../../components/UpdateProfileForm";

export default async function Onboarding() {
  return (
    <div style={{ margin: "5rem" }}>
      <Providers>
        <UpdateProfileForm />
      </Providers>
    </div>
  );
}
