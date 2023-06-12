"use client";
import { Input } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import { Stack, HStack, VStack } from "@chakra-ui/react";
import { Box, Center } from '@chakra-ui/react'

export default function Page() {
  return (
    <div style={{margin: "5rem"}}>
        <h1>Sign up for an account</h1>
      <Center>
      <Box display='flex' mt='2' width='70%' alignItems='center'>
      <FormControl isRequired>
        <VStack spacing="5px" align="center">
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
          <FormLabel>Email Address</FormLabel>
          <Input
            style={{ textAlign: "center" }}
            placeholder="Password"
            size="lg"
          />
        </VStack>
      </FormControl>
      </Box>
      </Center>
    </div>
  );
}
