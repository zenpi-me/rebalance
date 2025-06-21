import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Provider as ChakraProvider } from "@/components/ui/provider";
import { Box, Center, Container } from "@chakra-ui/react";
import MainMenu from "@/components/MainMenu/MainMenu";
import { Suspense } from "react";
import FullScreenLoading from "@/components/FullScreenLoading/FullScreenLoading";
import Footer from "@/components/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ReBalance",
  description: "Bring dein Leben in Balance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ChakraProvider>
          <Box height="100vh" width="100vw" overflowY="auto">
            <Center>
              <Container maxW="2xl" padding="1rem">
                <MainMenu />
                <Box paddingTop="6rem" paddingBottom="6rem">
                  <Suspense fallback={<FullScreenLoading />}>
                    {children}
                  </Suspense>
                </Box>
                <Footer />
              </Container>
            </Center>
          </Box>
        </ChakraProvider>
      </body>
    </html>
  );
}
