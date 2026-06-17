import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <section className="w-full py-24 lg:py-32 bg-white flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-slate-900">
          Engineering Scalable <span className="text-blue-600">Web Solutions</span>
        </h1>
        <p className="max-w-[600px] text-lg text-slate-600 mb-8">
          I am a Full Stack Developer specializing in the MERN stack, Next.js, and integrating AI into robust, high-performance web applications.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/portfolio" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors">
            View My Work <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          {/* Add a PDF named 'resume.pdf' to your 'public' folder for this to work */}
          <a href="/resume.pdf" target="_blank" className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-slate-300 bg-white text-slate-900 font-medium hover:bg-slate-50 transition-colors">
            <FileText className="mr-2 h-4 w-4" /> Download Resume
          </a>
        </div>
      </section>

      <section className="w-full py-16 lg:py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Let's Build Something Great</h2>
          <p className="max-w-[600px] mx-auto text-slate-600 mb-8">
            Whether you need a robust backend architecture, an intuitive frontend, or an end-to-end full-stack application, I can help.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-slate-900 text-white font-bold hover:bg-slate-800 transition-colors">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}