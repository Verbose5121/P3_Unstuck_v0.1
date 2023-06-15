import type { NextComponentType, NextPageContext } from "next";
import Link from "next/link";

interface Props {}

const Footer: NextComponentType<NextPageContext, {}, Props> = (props: Props) => {
  return (
    <footer>
      <Link
        href="/about"
        style={{ textDecoration: "none" }}>
        About
      </Link>
    </footer>
  );
};

export default Footer;
