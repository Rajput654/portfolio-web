import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Project from "@/lib/models/Project";
import { connectToDatabase } from "@/lib/mongodb";

// Forces Next.js to always fetch fresh data from the database
export const dynamic = "force-dynamic";

export default async function Portfolio() {
  // Connect to DB and fetch all projects, sorting by newest first
  await connectToDatabase();
  const projectsData = await Project.find({}).sort({ createdAt: -1 });

  return (
    <div className="w-full py-24 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 mb-4">My Portfolio</h1>
          <p className="text-lg text-slate-600 max-w-[700px]">
            A collection of my recent work, showcasing full-stack development, UI/UX design, and problem-solving.
          </p>
        </div>
        
        {projectsData.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-slate-500">No projects found. Head to /admin to add some!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project) => (
              <div key={project._id.toString()} className="bg-white rounded-xl shadow-sm border overflow-hidden group flex flex-col hover:shadow-md transition-shadow">
                <div 
                  className="h-48 w-full bg-slate-200 bg-cover bg-center"
                  style={{ backgroundImage: `url(${project.imageUrl})` }}
                ></div> 
                
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-2 text-slate-900">{project.title}</h3>
                  <p className="text-slate-600 mb-4 line-clamp-3">{project.shortDescription}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                    {project.technologies.map((tech: string) => (
                      <span key={tech} className="px-2 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Link 
                    href={`/portfolio/${project.slug}`} 
                    className="mt-auto text-blue-600 font-medium hover:underline inline-flex items-center"
                  >
                    View Case Study <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}