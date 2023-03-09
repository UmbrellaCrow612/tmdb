import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { ReactNode } from "react";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function GlobalLayout({ children }: { children: ReactNode }) {
  return (
    <div className={`w-full h-full ${inter.className}`}>
      <Navigation />
      <main className="w-full h-full container mx-auto px-6 lg:px-0">
        {children}
      </main>
      <Footer />
    </div>
  );
}
