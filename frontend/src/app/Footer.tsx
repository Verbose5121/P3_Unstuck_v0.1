import type { FC } from "react";
import Link from "next/link";
import { Button } from "@chakra-ui/react";

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <div>
      <Link href="/about" style={{ textDecoration: "none" }}>
        {" "}
        <Button colorScheme="teal" variant="outline" size="sm">
          {" "}
          About
        </Button>
      </Link>
    </div>
  );
};
export default Footer;
