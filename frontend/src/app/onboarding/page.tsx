"use client";
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

export default function Onboarding() {
  return (
    <div style={{ margin: "5rem" }}>
      <Card>
        <CardHeader>Fill out details for your account</CardHeader>
        <CardBody>
          <FormControl isRequired>
            <VStack
              spacing="5px"
              align="center">
              <FormLabel>First Name</FormLabel>
              <Input
                style={{ textAlign: "center" }}
                placeholder="First Name"
                size="lg"
              />
              <FormLabel>Last Name</FormLabel>
              <Input
                style={{ textAlign: "center" }}
                placeholder="Last Name"
                size="lg"
              />
              <FormLabel>Username</FormLabel>
              <Input
                style={{ textAlign: "center" }}
                placeholder="Username"
                size="lg"
              />
              <Select placeholder="Select User Type">
                <option value="student">Student</option>
                <option value="sherpa">Sherpa</option>
              </Select>
              <Button
                colorScheme="teal"
                variant="outline"
                size="lg">
                {" "}
                Submit
              </Button>
            </VStack>
          </FormControl>
        </CardBody>
      </Card>
    </div>
  );
}
