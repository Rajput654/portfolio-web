import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sanskar Rajput | Full Stack Developer",
  description: "Full Stack Engineer specializing in Next.js, MERN stack, and AI-driven web applications.",
  keywords: ["Sanskar Rajput", "Full Stack Developer", "Next.js", "MERN", "IIIT Lucknow"],
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen flex flex-col bg-slate-50 text-slate-900`}>
        {/* Navigation is injected here to persist across all pages */}
        <Header />
        
        {/* Main content area */}
        <main className="flex-grow flex flex-col">
          {children}
        </main>

        {/* Footer is injected here */}
        <Footer />
        
        {/* Analytics Script would go here (e.g., Google Analytics or Vercel Analytics) */}
      </body>
    </html>
  );
}