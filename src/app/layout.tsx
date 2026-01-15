import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.lacreativogroup.com"),
  title: {
    default: "LA CREATIVO GROUP, LLC",
    template: "%s | LA CREATIVO GROUP, LLC",
  },
  description:
    "A holding group focused on disciplined governance, shared operating standards, and long-term value creation across a diverse portfolio.",
  openGraph: {
    title: "LA CREATIVO GROUP, LLC",
    description:
      "A holding group focused on disciplined governance, shared operating standards, and long-term value creation across a diverse portfolio.",
    url: "https://www.lacreativogroup.com",
    siteName: "LA CREATIVO GROUP, LLC",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        <div className="flex min-h-screen flex-col bg-background text-foreground">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
