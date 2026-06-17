import { GraduationCap, Briefcase, Code, BrainCircuit, Server, Activity } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-slate-50 py-24 px-4 relative overflow-hidden">
      {/* Background visual element */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-100/50 blur-3xl -z-10"></div>
      
      <div className="container mx-auto max-w-5xl">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-slate-900 tracking-tight">
            About <span className="text-blue-600">Me</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl leading-relaxed">
            I am a software engineer and AI specialist focused on bridging the gap between theoretical machine learning and scalable, production-ready applications. I build autonomous agents, data scraping pipelines, and full-stack web solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: Education & Experience (Takes up 2/3 space on large screens) */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Experience Section */}
            <section className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <div className="flex items-center mb-6">
                <Briefcase className="h-6 w-6 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-slate-900">Professional Experience</h2>
              </div>
              
              <div className="space-y-6">
                <div className="relative pl-6 border-l-2 border-slate-100">
                  <div className="absolute w-3 h-3 bg-blue-600 rounded-full -left-[7px] top-1.5"></div>
                  <h3 className="text-lg font-bold text-slate-900">AI Tutor & Web Scraping Expert</h3>
                  <p className="text-sm text-blue-600 font-medium mb-2">Mindrift & Braintrust AIR • Freelance</p>
                  <p className="text-slate-600">Developing and training AI models by evaluating complex reasoning tasks. Designing robust web scraping architectures to extract and process structured data at scale.</p>
                </div>
                
                <div className="relative pl-6 border-l-2 border-slate-100">
                  <div className="absolute w-3 h-3 bg-slate-300 rounded-full -left-[7px] top-1.5"></div>
                  <h3 className="text-lg font-bold text-slate-900">Business Productivity Intern</h3>
                  <p className="text-sm text-slate-500 font-medium mb-2">TCS Youth Employment Program & Business Web Solutions</p>
                  <p className="text-slate-600">Engaged in end-to-end business software productivity pipelines, idea pitching, and technical problem-solving.</p>
                </div>
              </div>
            </section>

            {/* Research Section */}
            <section className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <div className="flex items-center mb-6">
                <Activity className="h-6 w-6 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-slate-900">Research & Specialization</h2>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Medical Imaging & Computer Vision</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Conducting active research in medical image processing, specifically focusing on the preprocessing of retinal fundus images for the early detection of glaucoma. This involves analyzing and applying advanced filtering algorithms to isolate critical biological markers.
                </p>
              </div>
            </section>

            {/* Education Section */}
            <section className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <div className="flex items-center mb-6">
                <GraduationCap className="h-6 w-6 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-slate-900">Academic Background</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Master of Technology (M.Tech)</h3>
                  <p className="text-sm text-slate-500 font-medium mb-1">Indian Institute of Information Technology (IIIT), Lucknow</p>
                  <p className="text-sm text-slate-500">Admitted via GATE qualification</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Bachelor of Technology (B.Tech)</h3>
                  <p className="text-sm text-slate-500 font-medium">Feroze Gandhi Institute of Engineering and Technology (FGIET)</p>
                </div>
              </div>
            </section>

          </div>

          {/* Right Column: Skills & Tech Stack */}
          <div className="space-y-8">
            <section className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 h-full">
              <div className="flex items-center mb-6">
                <Code className="h-6 w-6 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-slate-900">Tech Stack</h2>
              </div>

              <div className="space-y-8">
                {/* AI & Automation */}
                <div>
                  <div className="flex items-center mb-3">
                    <BrainCircuit className="h-4 w-4 text-slate-400 mr-2" />
                    <h3 className="text-sm font-bold text-slate-700 uppercase tracking-wider">AI & Automation</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["Python", "Groq API", "Google Gemini", "Claude (AWS Bedrock)", "n8n", "GitHub Actions"].map((tech) => (
                      <span key={tech} className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-lg text-sm font-semibold border border-blue-100">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Core Development */}
                <div>
                  <div className="flex items-center mb-3">
                    <Server className="h-4 w-4 text-slate-400 mr-2" />
                    <h3 className="text-sm font-bold text-slate-700 uppercase tracking-wider">Software Engineering</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["C++", "Node.js", "TypeScript", "Next.js", "React", "MongoDB", "Express"].map((tech) => (
                      <span key={tech} className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-lg text-sm font-semibold border border-slate-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>

        </div>
      </div>
    </div>
  );
}