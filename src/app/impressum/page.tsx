import { Heading, Text } from "@chakra-ui/react";

const Impressum = () => {
  return (
    <div>
      <Heading>Impressum</Heading>
      <Text marginTop="1rem">Angaben gemäß § 5 TMG:</Text>

      <Text marginTop="1rem">Chris Weiß</Text>
      <Text>Musterstraße 12</Text>
      <Text>12345 Berlin</Text>
      <Text>E-Mail: info@zenpi.me</Text>
      <Text marginTop="1rem">
        Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV: Chris Weiß,
        Anschrift wie oben
      </Text>
      <Text marginTop="1rem">
        Hinweis: Dies ist ein nicht-kommerzielles, privates Projekt ohne
        Gewinnerzielungsabsicht.
      </Text>
    </div>
  );
};

export default Impressum;
