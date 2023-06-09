import type { FC } from "react";
import { Box } from "@chakra-ui/react";
import styles from "./page.module.css";

interface LoginFormProps {}

const LoginForm: FC<LoginFormProps> = ({}) => {
  return (
    <Box w="75%" p={4} outline="2px" color="black">
      THis is a test box
    </Box>
  );
};
export default LoginForm;
