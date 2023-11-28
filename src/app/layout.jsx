import clsx from "clsx";
import "@/styles/tailwind.css";
import { Inter } from "next/font/google";
import Script from 'next/script'

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "Veni Developments - Modern Web Development, Apps, and Design Services in Canada",
  description:
    "Veni DEvelopment is a digital agency with a focus on creative, interactive and innovative design and development. Our team of designers, developers and strategists work together to create customized solutions that are unique to each client's needs.",
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body className={clsx("font-sans", inter.variable)}>
      <Script src="https://cdn.pagesense.io/js/837834317/10dd6f62829d4ad286196580c3375a40.js" strategy="lazyOnload" />

        <Navbar />
        <main className="bg-dark-900">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
