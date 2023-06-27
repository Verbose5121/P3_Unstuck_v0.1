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
import { FC, useCallback, useEffect, useState } from "react";

import type { Database } from "../../lib/database.types";

const SignupForm: FC = (props): JSX.Element => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
  };
  return (
    <div style={{ margin: "5rem" }}>
      <h1>This is the signin form loaded from components, on the main page</h1>
      <h2>
        An app that leverages the use of project based learning to enhance the student learning
        experience and empowers students with important critical thinking and problem solving
        skills.
      </h2>
      <br />
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
};

export default SignupForm;
