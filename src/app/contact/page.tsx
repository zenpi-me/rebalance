import { Box, Heading, Text } from "@chakra-ui/react";
import { Discord, Mail } from "@deemlol/next-icons";
import Link from "next/link";

const Contact = () => {
  return (
    <div>
      <Text>
        Falls du Fragen hast oder einfach ins Gespräch kommen möchtest, kannst
        du mich gerne kontaktieren.
      </Text>
      <Text>
        Ich freue mich über ernst gemeinte Anfragen – ganz unverbindlich.
      </Text>
      <Text>
        Nach deiner Nachricht können wir einfach mal kurz schreiben oder einen
        Termin für ein erstes Gespräch ausmachen – ganz ohne Verpflichtung.
      </Text>
      <Box padding="2rem 0 1rem" display="flex" flexDirection="row" gap="1rem">
        <Box width="50px">
          <Mail size={50} color="var(--chakra-colors-orange-500)" />
        </Box>
        <Box>
          <Heading size="md">E-Mail</Heading>
          <Link href="mailto:info@zenpi.me">
            <Text color="var(--chakra-colors-orange-500)">info@zenpi.me</Text>
          </Link>
        </Box>
      </Box>
      <Box padding="1rem 0" display="flex" flexDirection="row" gap="1rem">
        <Box width="50px">
          <Discord size={50} color="var(--chakra-colors-orange-500)" />
        </Box>
        <Box>
          <Heading size="md">Discord</Heading>
          <Text color="var(--chakra-colors-orange-500)">.zenpi</Text>
        </Box>
      </Box>
    </div>
  );
};

export default Contact;
