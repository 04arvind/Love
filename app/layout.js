import { Dancing_Script, Outfit } from "next/font/google";
import LoveLetterModal from "@/components/LoveLetterModal";
import "./globals.css";

const dancingScript = Dancing_Script({
  variable: "--font-dancing",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata = {
  title: "For My Valentine",
  description: "A little something special for you.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${dancingScript.variable} ${outfit.variable} antialiased font-body bg-rose-50 text-rose-900 selection:bg-rose-200`}
      >
        <LoveLetterModal />
        {children}
      </body>
    </html>
  );
}
