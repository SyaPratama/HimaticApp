import "@/styles/globals.css"
import { cn } from "@/libs/utils";
import localFont from "next/font/local";

const Grotesk = localFont({
  src: "../public/fonts/SpaceGrotesk.woff2",
  display: "swap",
  variable: "--font-grotesk"
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cn("h-full", "antialiased", Grotesk.className)}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
