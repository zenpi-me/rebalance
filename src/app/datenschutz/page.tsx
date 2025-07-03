import { Heading, Text } from "@chakra-ui/react";

const Datenschutz = () => {
  return (
    <div>
      <Heading>Datenschutzerklärung</Heading>
      <Text marginTop="1rem">Verantwortlich:</Text>
      <Text marginTop="1rem">Chris Weiß</Text>
      <Text>Postfach 11 02 02</Text>
      <Text>12832 Berlin</Text>
      <Text>E-Mail: info@zenpi.me</Text>
      <Text marginTop="1rem">
        Welche Daten ich verarbeite: Wenn du mir eine E-Mail oder eine
        Discord-Nachricht schreibst, verarbeite ich die von dir übermittelten
        Informationen ausschließlich zur Kommunikation mit dir.
      </Text>
      <Text marginTop="1rem">
        Beim Besuch der Website werden technisch bedingt Daten wie IP-Adresse,
        Browsertyp oder Uhrzeit des Zugriffs vom Server gespeichert. Diese Daten
        nutze ich nicht und gebe sie nicht weiter.
      </Text>
      <Text marginTop="1rem">
        Ich verwende keine Cookies, keine Tracking-Tools und keine Werbung.
      </Text>
      <Text marginTop="1rem">
        Deine Rechte: Du hast das Recht auf Auskunft, Berichtigung und Löschung
        deiner Daten. Dafür genügt eine formlose E-Mail an mich.
      </Text>
      <Text marginTop="1rem">Ich gebe keine Daten an Dritte weiter.</Text>
    </div>
  );
};

export default Datenschutz;
