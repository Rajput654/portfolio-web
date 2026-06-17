import { addProject } from "@/lib/actions";

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-24 px-4">
      <div className="container mx-auto max-w-2xl">
        <h1 className="text-3xl font-bold mb-8 text-slate-900">Add New Project</h1>
        
        {/* The 'action' attribute connects directly to our backend function */}
        <form action={addProject} className="space-y-6 bg-white p-8 rounded-xl shadow-sm border border-slate-200">
          
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-slate-700 mb-1">Project Title</label>
            <input type="text" id="title" name="title" required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-shadow" />
          </div>

          <div>
            <label htmlFor="slug" className="block text-sm font-medium text-slate-700 mb-1">URL Slug (e.g., social-media-bot)</label>
            <input type="text" id="slug" name="slug" required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-shadow" />
          </div>

          <div>
            <label htmlFor="shortDescription" className="block text-sm font-medium text-slate-700 mb-1">Short Description (For the grid card)</label>
            <input type="text" id="shortDescription" name="shortDescription" required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-shadow" />
          </div>

          <div>
            <label htmlFor="fullDetails" className="block text-sm font-medium text-slate-700 mb-1">Full Details (For the dedicated project page)</label>
            <textarea id="fullDetails" name="fullDetails" rows={5} required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-shadow"></textarea>
          </div>

          <div>
            <label htmlFor="technologies" className="block text-sm font-medium text-slate-700 mb-1">Technologies (Comma separated)</label>
            <input type="text" id="technologies" name="technologies" required placeholder="Python, Next.js, Groq API" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-shadow" />
          </div>

          <div>
            <label htmlFor="imageUrl" className="block text-sm font-medium text-slate-700 mb-1">Cover Image URL</label>
            <input type="url" id="imageUrl" name="imageUrl" required placeholder="https://..." className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-shadow" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="liveUrl" className="block text-sm font-medium text-slate-700 mb-1">Live Demo URL (Optional)</label>
              <input type="url" id="liveUrl" name="liveUrl" placeholder="https://..." className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-shadow" />
            </div>
            <div>
              <label htmlFor="githubUrl" className="block text-sm font-medium text-slate-700 mb-1">GitHub URL (Optional)</label>
              <input type="url" id="githubUrl" name="githubUrl" placeholder="https://github.com/..." className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-shadow" />
            </div>
          </div>

          <button type="submit" className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition-colors mt-4">
            Publish Project
          </button>
        </form>
      </div>
    </div>
  );
}
