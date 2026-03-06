import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { localBusinessSchema } from "@/lib/structured-data";
import { COMPANY_NAME, BASE_URL } from "@/lib/constants";
import { ServiceAreaProvider } from "@/context/ServiceAreaContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: `${COMPANY_NAME} — Roofing Contractor Columbus OH & Statesville NC`,
    template: `%s | ${COMPANY_NAME}`,
  },
  description:
    "Transformed Roofing provides expert roof replacement, installation, repair, and insurance claims in Columbus, OH and Statesville, NC. Free estimates.",
  openGraph: {
    siteName: COMPANY_NAME,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <head>
        <JsonLd data={localBusinessSchema()} />
      </head>
      <body className="antialiased flex min-h-screen flex-col">
        <ServiceAreaProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ServiceAreaProvider>
      </body>
    </html>
  );
}
