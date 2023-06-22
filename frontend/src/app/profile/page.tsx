"use client";

import {
  Box,
  Center,
  Link,
  Button,
  Card,
  Input,
  FormControl,
  FormLabel,
  CardHeader,
  CardBody,
  CardFooter,
  VStack,
  Select,
} from "@chakra-ui/react";
import type { Database } from "../../lib/database.types";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import UpdateProfileForm from "../../components/forms/UpdateProfileForm";

export default async function UpdateProfile() {
  const supabase = createClientComponentClient<Database>();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  console.log("user object page test: ", user);

  return (
    <div>
      <h1>Hello profile</h1>
    </div>
  );
}
