import { addProject, deleteProject } from "@/lib/actions";
import Project from "@/lib/models/Project";
import { connectToDatabase } from "@/lib/mongodb";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  await connectToDatabase();
  const projects = await Project.find({}).sort({ createdAt: -1 });

  return (
    <div className="min-h-screen bg-slate-50 py-24 px-4">
      <div className="container mx-auto max-w-4xl grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* ADD PROJECT FORM */}
        <div>
          <h1 className="text-3xl font-bold mb-8 text-slate-900">Add New Project</h1>
          <form action={addProject} className="space-y-4 bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <div>
              <label className="block text-sm font-medium text-red-600 mb-1">Admin Password *</label>
              <input type="password" name="secret" required className="w-full px-4 py-2 border border-red-300 rounded-lg focus:ring-2 focus:ring-red-500 outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Project Title</label>
              <input type="text" name="title" required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">URL Slug</label>
              <input type="text" name="slug" required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Short Description</label>
              <input type="text" name="shortDescription" required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Full Details</label>
              <textarea name="fullDetails" rows={4} required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"></textarea>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Technologies (Comma separated)</label>
              <input type="text" name="technologies" required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Cover Image URL</label>
              <input type="url" name="imageUrl" required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Live URL</label>
                <input type="url" name="liveUrl" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">GitHub URL</label>
                <input type="url" name="githubUrl" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
              </div>
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition-colors mt-4">Publish Project</button>
          </form>
        </div>

        {/* DELETE PROJECT SECTION */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-slate-900">Manage Projects</h2>
          <div className="space-y-4">
            {projects.map((project) => (
              <div key={project._id.toString()} className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h3 className="font-bold text-slate-900">{project.title}</h3>
                  <p className="text-sm text-slate-500">/{project.slug}</p>
                </div>
                <form action={deleteProject} className="flex gap-2 w-full sm:w-auto">
                  <input type="hidden" name="id" value={project._id.toString()} />
                  <input type="password" name="secret" placeholder="Admin Pass" required className="w-32 px-3 py-1.5 border border-red-300 rounded-lg text-sm outline-none focus:ring-2 focus:ring-red-500" />
                  <button type="submit" className="bg-red-600 text-white px-4 py-1.5 rounded-lg text-sm font-bold hover:bg-red-700 transition-colors">Delete</button>
                </form>
              </div>
            ))}
            {projects.length === 0 && <p className="text-slate-500">No projects to manage.</p>}
          </div>
        </div>

      </div>
    </div>
  );
}