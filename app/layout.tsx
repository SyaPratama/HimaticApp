import "@/styles/globals.css"
import { cn } from "@/libs/utils";
import { Grotesk } from "@/libs/fonts";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cn("h-full", "antialiased", Grotesk.className)}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
