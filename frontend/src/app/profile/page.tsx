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
import type { Database } from "../../lib/database.types";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useState } from "react";

export default function Onboarding() {
  const supabase = createClientComponentClient<Database>();
  const [userType, setUserType] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [displayName, setDisplayName] = useState("");
  // const [avatarUrl, setAvatarUrl] = useState("");

  const handleUpdateProfile = async () => {
    // create new record on "users" (not the auth one) table, and a record on the students, or sherpa table depending on selection

    const {
      data: { user },
    } = await supabase.auth.getUser();
    console.log("user object: ", user);
    console.log("trying to create new user_details record");
    const { data, error } = await supabase.from("user_details").upsert([
      {
        user_id: user?.id,
        user_type: userType,
        first_name: firstName,
        last_name: lastName,
        display_name: displayName,
      },
    ]);

    console.log("data, after trying to create the user_details record", data);
  };

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
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <FormLabel>Last Name</FormLabel>
              <Input
                style={{ textAlign: "center" }}
                placeholder="Last Name"
                size="lg"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <FormLabel>Display Name</FormLabel>
              <Input
                style={{ textAlign: "center" }}
                placeholder="Display Name"
                size="lg"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
              />
              {/* insert upload avatar picture form part here */}
              <Select
                placeholder="Select User Type"
                onChange={(e) => setUserType(e.target.value)}>
                <option value="student">Student</option>
                <option value="sherpa">Sherpa</option>
              </Select>

              <Button
                colorScheme="teal"
                variant="outline"
                size="lg"
                onClick={handleUpdateProfile}>
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
