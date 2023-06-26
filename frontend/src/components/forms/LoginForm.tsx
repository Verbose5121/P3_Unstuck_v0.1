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
import { Session, createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import type { Database } from "@/lib/database.types";

export default function LoginForm({ session }: { session: Session | null }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();
    const supabase = createClientComponentClient<Database>();
  
    const handleLogin = async () => {
      console.log("Login check");
      await supabase.auth.signInWithPassword({
        email,
        password,
      });

      router.replace ("/profile");

    };

  
    return (
        <div style={{ margin: "5rem" }}>
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
                <Button
                  colorScheme="teal"
                  variant="outline"
                  size="lg"
                  onClick={handleLogin}>
                  {" "}
                  Submit
                </Button>
                {/* {flag && <p>Stuck? Think carefully about your Username & Password and try again. </p> && <p>Or! We could send a Magic Link to your email to get you Unstuck. </p>} */}
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
