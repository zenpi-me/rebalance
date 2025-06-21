import { Box, Center, Text, Container } from "@chakra-ui/react";
import styles from "./MainMenu.module.css";
import Link from "next/link";

const MainMenu = () => {
  return (
    <Box className={styles.mainMenu}>
      <Center>
        <Container className={styles.mainMenuContainer}>
          <Link href="/">
            <Text>Home</Text>
          </Link>
          <Link href="/contact">
            <Text>Kontakt</Text>
          </Link>
        </Container>
      </Center>
    </Box>
  );
};

export default MainMenu;
