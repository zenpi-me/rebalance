import { Box, Center, Text, Container } from "@chakra-ui/react";
import styles from "./Footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <Box className={styles.footer}>
      <Center>
        <Container className={styles.footerContainer}>
          <Link href="/impressum">
            <Text fontSize="sm">Impressum</Text>
          </Link>
          <Link href="/datenschutz">
            <Text fontSize="sm">Datenschutz</Text>
          </Link>
        </Container>
      </Center>
    </Box>
  );
};

export default Footer;
