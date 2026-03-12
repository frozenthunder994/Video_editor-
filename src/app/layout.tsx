import type { Metadata } from "next";
import { Playfair_Display, Syne, DM_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GrainOverlay from "@/components/GrainOverlay";
import CustomCursor from "@/components/CustomCursor";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-playfair-display",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-syne",
});

const dmMono = DM_Mono({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  variable: "--font-dm-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio.malloy.sg/bhaargava"), 
  title: "Bhaargava R | Premium Video Editor & Visual Architect",
  description: "Cinematic video editing for luxury real estate, brand documentaries, and high-retention social content. Transform your raw footage into a conversion machine.",
  keywords: ["video editor", "real estate video editing", "luxury property tours", "cinematic storytelling", "color grading", "motion graphics", "content creator editor"],
  openGraph: {
    title: "Bhaargava R | Premium Video Editor Portfolio",
    description: "Cinematic storytelling and visual architecture for brands that demand the best.",
    url: "https://portfolio.malloy.sg/bhaargava",
    siteName: "Bhaargava R Portfolio",
    images: [
      {
        url: "/og-image.jpg", 
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bhaargava R | Premium Video Editor",
    description: "Cinematic video editing and storytelling for luxury real estate and brand films.",
    images: ["/og-image.jpg"],
  },
};

import { AuthProvider } from "@/context/AuthContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${syne.variable} ${dmMono.variable}`}>
        <AuthProvider>
          <GrainOverlay />
          <CustomCursor />
          <Header />
          <main>{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
