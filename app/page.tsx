import Link from "next/link";
import { ArrowRight, Code, Layout, Smartphone } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* HERO SECTION */}
      <section className="w-full py-24 lg:py-32 bg-white flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-slate-900">
          Building Digital <span className="text-blue-600">Experiences</span>
        </h1>
        <p className="max-w-[600px] text-lg text-slate-600 mb-8">
          Full-stack developer specializing in building exceptional digital experiences, scalable applications, and accessible user interfaces.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link 
            href="/portfolio" 
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
          >
            View Featured Work <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-slate-300 bg-white text-slate-900 font-medium hover:bg-slate-50 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      {/* FEATURED WORK SECTION */}
      <section className="w-full py-16 lg:py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Featured Projects</h2>
            <p className="max-w-[900px] text-slate-600">Explore some of my recent work across full-stack development and UI/UX design.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Mock Project Cards */}
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-xl shadow-sm border overflow-hidden group hover:shadow-md transition-shadow">
                <div className="h-48 bg-slate-200 w-full"></div> {/* Image placeholder */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Project Title {item}</h3>
                  <p className="text-slate-600 mb-4 line-clamp-2">A comprehensive application built to solve complex business logic with modern web technologies.</p>
                  <Link href={`/portfolio/project-${item}`} className="text-blue-600 font-medium hover:underline inline-flex items-center">
                    Read Case Study <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / BLOG HIGHLIGHT SECTION */}
      <section className="w-full py-16 bg-blue-900 text-white text-center px-4">
        <h2 className="text-3xl font-bold mb-4">Sharing Knowledge</h2>
        <p className="max-w-[600px] mx-auto text-blue-100 mb-8">
          I regularly write about web development, architecture, and technology trends.
        </p>
        <Link 
          href="/blog" 
          className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white text-blue-900 font-bold hover:bg-slate-100 transition-colors"
        >
          Read the Blog
        </Link>
      </section>
    </div>
  );
}