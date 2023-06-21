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
import { Session, createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

import type { Database } from "../../../lib/database.types";

export default function SignupForm({ session }: { session: Session | null }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const supabase = createClientComponentClient<Database>();

  const handleSignUp = async () => {
    console.log("trying to initially create user in auth table");
    await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
      },
    });
    // router.refresh();

    // router.replace("/profile");
  };
  return (
    <div style={{ margin: "5rem" }}>
      <Card>
        <CardHeader>Sign up for an account</CardHeader>
        <CardBody>
          <FormControl isRequired>
            <VStack
              spacing="5px"
              align="center">
              <FormLabel>Email Address</FormLabel>
              <Input
                style={{ textAlign: "center" }}
                placeholder="Email"
                size="lg"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <FormLabel>Password</FormLabel>
              <Input
                style={{ textAlign: "center" }}
                placeholder="Password"
                size="lg"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <Button
                colorScheme="teal"
                variant="outline"
                size="lg"
                onClick={handleSignUp}>
                {" "}
                Submit
              </Button>

              <CardFooter>
                <p>
                  Want to{" "}
                  <Link
                    href="/login"
                    className="login-link"
                    style={{ color: "fuchsia" }}>
                    Login
                  </Link>{" "}
                  instead?
                </p>
              </CardFooter>
            </VStack>
          </FormControl>
        </CardBody>
      </Card>
    </div>
  );
}
