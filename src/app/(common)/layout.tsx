import Footer from "@/components/partials/Footer";
import Header from "@/components/partials/Header";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "CyberBeid",
  description: "Digital solutions.",
};

export default function CommonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
