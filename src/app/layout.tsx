import type { Metadata } from "next";
import { Bad_Script, Chau_Philomene_One, Ubuntu } from "next/font/google";
import "./styles/globals.css";
import cn from "classnames";
import Providers from "./provider/provider";

const ubuntu = Ubuntu({
  subsets: ["latin", "cyrillic"],
  weight: "400",
});
const badscript = Bad_Script({
  subsets: ["cyrillic"],
  weight: "400",
  variable: "--font-bad-script",
});
const chaupo = Chau_Philomene_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-chaupo",
});

export const metadata: Metadata = {
  title: "News Portal",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kz">
      <body
        className={cn(ubuntu.className, badscript.variable, chaupo.variable)}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
