"use-client";
/*
*   Todo: Add logged in dependencies for displaying links/buttons
*   Todo: Add user avatar url variable (line 120)
*   Todo: Use .map with navbaritems to populate items
*   Todo: Fix up styling
*   Todo: On mobile display, show login/signup in place of Avatar icon on signed out state 
*/


import Link from 'next/link'
import { useRouter } from "next/navigation";
import type { NextComponentType, NextPageContext } from "next";
import {
  Box,
  Center,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import type { Database } from "@/lib/database.types";

interface NavBarProps {}

const NavBar: NextComponentType<NextPageContext, {}, NavBarProps> = (props: NavBarProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  const supabase = createClientComponentClient<Database>();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          
          <HStack spacing={8} alignItems={'center'}>
            <Box>
            <Link
            href="/"
            className="logo"
            style={{ textDecoration: "none" }}>
            <h1>Unstuck</h1>
          </Link>
            </Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
            <Link href='/dashboard'>Dashboard</Link>
            <Link href='/stucks'>My Stucks</Link>
            <Link href='/profile'>Profile</Link>

            </HStack>
            </HStack>


          <HStack spacing={1} alignItems={'right'}> 
          <Link
          href="/login"
          className="login-nav-button"
          style={{ textDecoration: "none" }}>
          {" "}
          <Button
            colorScheme="black"
            variant="outline"
            size="sm">
            {" "}
            Login
          </Button>
        </Link>
        <Link
          href="/signup"
          className="signup-nav-button"
          style={{ textDecoration: "none" }}>
          {" "}
          <Button
            colorScheme="black"
            variant="outline"
            size="sm">
            {" "}
            Sign Up
          </Button>
        </Link>
          </HStack>


          <Flex alignItems={'center'}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                  src={
                    ''
                  }
                />
              </MenuButton>
              <MenuList>
                <Link href='/dashboard'><MenuItem>Dashboard</MenuItem></Link>
                <Link href='/stucks'><MenuItem>My Stucks</MenuItem></Link>
                <Link href='/profile'><MenuItem>Profile</MenuItem></Link>
                <MenuDivider />
                <MenuItem><Button variant={'link'} onClick={handleSignOut}>Log Out</Button></MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
            <Link href='/dashboard'>Dashboard</Link>
            <Link href='/stucks'>My Stucks</Link>
            <Link href='/profile'>Profile</Link>
            <Button variant={'link'} onClick={handleSignOut}>Log Out</Button>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
export default NavBar;