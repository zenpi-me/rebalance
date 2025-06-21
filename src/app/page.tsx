import { Box, Heading, Mark, Text } from "@chakra-ui/react";
import { Apple, BatteryCharging, Heart, TrendingUp } from "@deemlol/next-icons";

export default function Home() {
  return (
    <div>
      <Heading>Bring dein Leben in Balance</Heading>
      <Text marginTop="0.5rem">
        Ich möchte hier einen kleinen Überblick geben, mit welchen Methoden ich
        arbeite. Das Ganze ist ein Hobby von mir. Ich mache es aus Interesse an
        der Sache –<Mark fontWeight="bold"> ohne Bezahlung</Mark>.
      </Text>
      <Text marginTop="0.5rem">
        Mein Ziel ist, dass es dir besser geht. Gesünder, klarer, vielleicht
        auch zufriedener. Kleine Fortschritte sind schon sehr viel wert – sie
        wirken oft in andere Lebensbereiche hinein. Manchmal merkt man erst im
        Rückblick, wie viel sich verändert hat.
      </Text>

      <Heading marginTop="2rem">Grundpfeiler</Heading>
      <Box padding="1rem 0" display="flex" flexDirection="row" gap="1rem">
        <Box width="50px">
          <Apple size={50} color="var(--chakra-colors-orange-500)" />
        </Box>
        <Box>
          <Heading size="md">Essen</Heading>
          <Text>
            Viele wissen grundsätzlich, was gut für sie wäre – aber es fällt
            schwer, das dauerhaft umzusetzen.
          </Text>
          <Text>
            Ich möchte helfen, realistische Wege zu finden. Zusammen mit den
            anderen drei Bereichen wird vieles einfacher.
          </Text>
        </Box>
      </Box>
      <Box padding="1rem 0" display="flex" flexDirection="row" gap="1rem">
        <Box width="50px">
          <TrendingUp size={50} color="var(--chakra-colors-orange-500)" />
        </Box>
        <Box>
          <Heading size="md">Sport</Heading>
          <Text>
            Wir schauen, wo du gerade stehst. Schon ein paar einfache Übungen
            pro Woche können viel verändern.
          </Text>
          <Text>
            Wenn du möchtest, probieren wir zusätzlich Atemtechniken aus, die
            entspannen oder Energie geben können.
          </Text>
        </Box>
      </Box>
      <Box padding="1rem 0" display="flex" flexDirection="row" gap="1rem">
        <Box width="50px">
          <BatteryCharging size={50} color="var(--chakra-colors-orange-500)" />
        </Box>
        <Box>
          <Heading size="md">Schlaf</Heading>
          <Text>
            Guter Schlaf ist oft unterschätzt. Dabei hängt sehr viel davon ab:
            Energie, Stimmung, sogar Motivation.
          </Text>
          <Text>
            Wir versuchen gemeinsam herauszufinden, was du verändern kannst –
            ohne Druck, aber mit Wirkung.
          </Text>
        </Box>
      </Box>
      <Box padding="1rem 0" display="flex" flexDirection="row" gap="1rem">
        <Box width="50px">
          <Heart size={50} color="var(--chakra-colors-orange-500)" />
        </Box>
        <Box>
          <Heading size="md">Geist</Heading>
          <Text>Dieser Bereich ist sehr individuell.</Text>
          <Text>
            Mit einfachen Meditationstechniken und Gesprächen können wir
            schauen, was dich beschäftigt und wie du mehr Klarheit gewinnst.
          </Text>
          <Text>
            Es geht nicht darum, „besser zu denken“, sondern vielleicht darum,
            sich selbst ein Stück besser zu verstehen.
          </Text>
        </Box>
      </Box>
    </div>
  );
}
