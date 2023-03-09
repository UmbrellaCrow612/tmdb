import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { ReactNode } from "react";

export default function GlobalLayout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full h-full container mx-auto px-6 lg:px-0">
      <Navigation />
      <main className="w-full h-full">{children}</main>
      <Footer />
    </div>
  );
}
