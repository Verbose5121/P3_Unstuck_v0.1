"use client";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  CardHeader,
  CardBody,
  CardFooter,
} from "@chakra-ui/react";
import { Stack, HStack, VStack } from "@chakra-ui/react";
import { Box, Center, Link, Button, Card, Input } from "@chakra-ui/react";

export default function Signup() {
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
              />
              <FormLabel>Password</FormLabel>
              <Input
                style={{ textAlign: "center" }}
                placeholder="Password"
                size="lg"
                type="password"
              />
              <Link href="/onboarding">
                <Button
                  colorScheme="teal"
                  variant="outline"
                  size="lg">
                  {" "}
                  Submit
                </Button>
              </Link>
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
