import Link from "next/link";
import { ArrowRight, FileText, BrainCircuit, Bot, LineChart } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="w-full py-24 lg:py-32 bg-white flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
        {/* Subtle AI-themed background gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50 via-white to-white -z-10"></div>
        
        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-sm font-bold mb-8 border border-blue-100 shadow-sm">
          <BrainCircuit className="w-4 h-4 mr-2" />
          AI & Machine Learning Engineer
        </div>
        
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-slate-900 max-w-4xl leading-tight">
          Architecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Autonomous Agents</span> & Intelligent Systems
        </h1>
        
        <p className="max-w-[750px] text-lg text-slate-600 mb-10 leading-relaxed">
          I specialize in bridging the gap between complex machine learning research and production-ready software. From orchestrating advanced LLM workflows using Claude and Gemini, to building autonomous video generation pipelines, and researching computer vision for medical imaging.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/portfolio" className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-slate-900 text-white font-bold hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
            Explore My Projects <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <a href="/resume.pdf" target="_blank" className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl border-2 border-slate-200 bg-white text-slate-900 font-bold hover:bg-slate-50 hover:border-slate-300 transition-all">
            <FileText className="mr-2 h-4 w-4" /> View Resume
          </a>
        </div>
      </section>

      {/* Value Proposition / Areas of Expertise */}
      <section className="w-full py-24 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-4">Core Capabilities</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Leveraging state-of-the-art artificial intelligence frameworks to solve complex automation and data challenges.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Capability 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:border-blue-200 hover:shadow-md transition-all group">
              <div className="h-14 w-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Bot className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">LLM Orchestration</h3>
              <p className="text-slate-600 leading-relaxed">
                Designing n8n workflows and custom agents utilizing Groq, Google Gemini, and Anthropic's Claude APIs for intelligent automation and reasoning.
              </p>
            </div>
            
            {/* Capability 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:border-blue-200 hover:shadow-md transition-all group">
              <div className="h-14 w-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <LineChart className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Computer Vision</h3>
              <p className="text-slate-600 leading-relaxed">
                Researching and implementing advanced image preprocessing techniques, including deep work in retinal fundus image analysis for medical diagnostics.
              </p>
            </div>
            
            {/* Capability 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:border-blue-200 hover:shadow-md transition-all group">
              <div className="h-14 w-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BrainCircuit className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Autonomous Pipelines</h3>
              <p className="text-slate-600 leading-relaxed">
                Building end-to-end Python and Node.js solutions for content generation, web scraping, and automated deployments via GitHub Actions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6 text-slate-900">Looking for an AI Specialist?</h2>
          <p className="max-w-[600px] mx-auto text-slate-600 mb-10 text-lg">
            Whether it is building custom AI agents, optimizing LLM workflows, or developing computer vision models, let's discuss how I can bring value to your team.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}