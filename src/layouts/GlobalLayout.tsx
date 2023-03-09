import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { ReactNode } from "react";

export default function GlobalLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navigation />
      <main className="w-full h-full">{children}</main>
      <Footer />
    </>
  );
}
