export default function About() {
  return (
    <div className="container mx-auto py-24 px-4 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-slate-900">About Me</h1>
        
        <div className="prose prose-lg text-slate-600">
          <p className="mb-6">
            Hello! I am Sanskar Rajput, a dedicated Full Stack Developer with a strong academic foundation from the <strong>Indian Institute of Information Technology (IIIT), Lucknow</strong>. I specialize in building end-to-end web applications that are robust, scalable, and user-centric.
          </p>
          
          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Experience & Expertise</h2>
          <p className="mb-6">
            My technical journey is driven by a passion for solving complex architectural challenges. I work extensively with the <strong>MERN stack (MongoDB, Express, React, Node.js)</strong> and modern frameworks like <strong>Next.js</strong>. 
          </p>
          <p className="mb-6">
            Beyond personal projects, I have honed my skills professionally through freelance opportunities with platforms like <strong>Mindrift</strong> and <strong>Braintrust AIR</strong>, delivering high-quality code in fast-paced environments.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Core Technologies</h2>
          <div className="flex flex-wrap gap-2 mt-4">
            {["JavaScript / TypeScript", "Next.js", "React.js", "Node.js", "MongoDB", "Express", "Tailwind CSS", "Python", "Git & GitHub"].map((tech) => (
              <span key={tech} className="px-3 py-1.5 bg-slate-100 text-slate-800 rounded-md text-sm font-medium border border-slate-200">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}