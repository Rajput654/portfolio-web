import { Mail } from "lucide-react";

// Custom SVG components to replace the removed Lucide brand icons
const GithubIcon = ({ className = "" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

const LinkedinIcon = ({ className = "" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

export default function Contact() {
  return (
    <div className="container mx-auto py-24 px-4 min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">Get In Touch</h1>
        <p className="text-lg text-slate-600 mb-12">
          I am currently open to new opportunities, freelance projects, and collaborations. Whether you have a question or just want to say hi, I will try my best to get back to you!
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a href="mailto:your-email@example.com" className="flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-colors w-full sm:w-auto shadow-sm">
            <Mail className="mr-3 h-5 w-5" /> Say Hello
          </a>
          
          <div className="flex gap-4">
            <a href="https://github.com/Rajput654" target="_blank" rel="noopener noreferrer" className="p-4 bg-white border border-slate-200 rounded-xl text-slate-700 hover:text-blue-600 hover:border-blue-200 transition-all shadow-sm">
              <GithubIcon className="h-6 w-6" />
            </a>
            <a href="https://linkedin.com/in/your-linkedin-id" target="_blank" rel="noopener noreferrer" className="p-4 bg-white border border-slate-200 rounded-xl text-slate-700 hover:text-blue-600 hover:border-blue-200 transition-all shadow-sm">
              <LinkedinIcon className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}