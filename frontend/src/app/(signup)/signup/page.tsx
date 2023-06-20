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
} from "@chakra-ui/react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

import type { Database } from "../../../lib/database.types";

export default function SignupPage() {
  const router = useRouter();
  const supabase = createClientComponentClient<Database>();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/auth/callback/`,
      },
    });
    router.replace("/dashboard");
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
