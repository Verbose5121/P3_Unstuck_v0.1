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

export default function Login() {
  return (
    <div style={{ margin: "5rem" }}>
      <Card>
        <CardHeader>Sign up for an account</CardHeader>
        <CardBody>
          <FormControl isRequired>
            <VStack
              spacing="5px"
              align="center">
              <FormLabel>Email</FormLabel>
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
              <Button
                colorScheme="teal"
                variant="outline"
                size="lg">
                {" "}
                Submit
              </Button>
              <CardFooter>
                <p>
                  Don't have an account?{" "}
                  <Link
                    href="/signup"
                    className="signup-link"
                    style={{ color: "fuchsia" }}>
                    Signup
                  </Link>
                </p>
              </CardFooter>
            </VStack>
          </FormControl>
        </CardBody>
      </Card>
    </div>
  );
}
