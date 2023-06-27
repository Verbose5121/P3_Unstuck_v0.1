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
import { redirect, useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

import type { Database } from "../../lib/database.types";

export default function LoginForm() {
  const router = useRouter();
  const supabase = createClientComponentClient<Database>();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  supabase.auth.onAuthStateChange((event, session) => {
    console.log(event, session);
  });
  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    router.push("/student-dashboard");
  };

  return (
    <div style={{ margin: "5rem" }}>
      <h1>This is the login form loaded from components, on the main page</h1>
      <h2>
        An app that leverages the use of project based learning to enhance the student learning
        experience and empowers students with important critical thinking and problem solving
        skills.
      </h2>
      <br />
      <Card>
        <CardHeader>Login To Unstuck</CardHeader>
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
              {/* <form
                action="/auth/callout"
                method="post"> */}
              <Button
                colorScheme="teal"
                variant="outline"
                size="lg"
                onClick={handleLogin}>
                {" "}
                Submit
              </Button>
              {/* </form> */}
              <CardFooter>
                <p>
                  Want to{" "}
                  <Link
                    href="/signup"
                    className="login-link"
                    style={{ color: "fuchsia" }}>
                    Sign Up
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
