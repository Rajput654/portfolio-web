import { Github, Linkedin, Mail } from "lucide-react";

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
              <Github className="h-6 w-6" />
            </a>
            <a href="https://linkedin.com/in/your-linkedin-id" target="_blank" rel="noopener noreferrer" className="p-4 bg-white border border-slate-200 rounded-xl text-slate-700 hover:text-blue-600 hover:border-blue-200 transition-all shadow-sm">
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}