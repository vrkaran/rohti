import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Import the Inter font
import "./globals.css";
import Navbar from "@/components/NavBar";
import { BackgroundBoxesDemo } from "@/components/BackgroundBoxesDemo";
import Head from "next/head"; // Import Head for adding metadata

const inter = Inter({ subsets: ["latin"] }); // Initialize the Inter font

export const metadata: Metadata = {
  title: "HealthyBites",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <Head>
        {/* Add the favicon link here */}
        <link rel="icon" href="/https://drive.google.com/file/d/1H4LkPP55toEmOb5VAsQ8WRkvj8jx2Xev/view?usp=sharing" sizes="any" />
        <link rel="icon" href="/https://drive.google.com/file/d/1H4LkPP55toEmOb5VAsQ8WRkvj8jx2Xev/view?usp=sharing" type="image/svg+xml" />
      </Head>
      <body className={inter.className}>
        <div className="relative w-full flex items-center justify-center">
          <Navbar />
        </div>
        {children}
        <BackgroundBoxesDemo/>
      </body>
    </html>
  );
}