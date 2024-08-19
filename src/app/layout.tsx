import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "@/styles/globals.css";
import { Header } from "@/components/Header";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { AOSClient } from "@/components/AOSClient";


const montserrat = Montserrat({
   subsets: ["latin"], 
   weight: ["400", "700"],
  });

export const metadata: Metadata = {
  title: "Portfólio | Alexandre da Silva",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={montserrat.className}>
        <Header />
        <AOSClient />
        {children}
        </body>
    </html>
  );
}
