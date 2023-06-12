import type { FC } from "react";
import NextLink from "next/link";
import { Button } from "@chakra-ui/react";

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <div>
      <NextLink href="/about" passHref>
        <Button as="a" color="blue.400" _hover={{ color: "blue.500" }}>
          About
        </Button>
      </NextLink>
    </div>
  );
};
export default Footer;
