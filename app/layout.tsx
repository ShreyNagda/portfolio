import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import CursorHighlight from "@/components/CursorHighlight";
import InitialLoader from "@/components/InitialLoader";

export const metadata: Metadata = {
  title: "Shrey Nagda | Fullstack Developer & Flutter Specialist",
  description:
    "Fullstack Developer specializing in Next.js, TypeScript, Flutter & Mobile Development. Available for freelance projects. 3+ years of experience building web and mobile applications.",
};

const aeonik = localFont({
  src: [
    { path: "./fonts/AeonikAir.otf", weight: "200", style: "normal" },
    { path: "./fonts/AeonikLight.otf", weight: "300", style: "normal" },
    { path: "./fonts/AeonikRegular.otf", weight: "400", style: "normal" },
    { path: "./fonts/AeonikMedium.otf", weight: "500", style: "normal" },
    { path: "./fonts/AeonikBold.otf", weight: "700", style: "normal" },
    { path: "./fonts/AeonikBlack.otf", weight: "900", style: "normal" },
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${aeonik.className} antialiased bg-white text-primary overflow-x-hidden cursor-grabbing select-none`}
      >
        <InitialLoader />
        <CursorHighlight />
        {children}
      </body>
    </html>
  );
}
