"use client";

import { deleteProject } from "@/lib/actions";

export default function DeleteProject({ id }: { id: string }) {
  const handleDelete = async () => {
    const secret = prompt("Please enter your Admin Password to delete this project:");
    
    if (!secret) return;

    const formData = new FormData();
    formData.append("id", id);
    formData.append("secret", secret);

    try {
      await deleteProject(formData);
      alert("Project deleted successfully!");
    } catch (error) {
      alert("Failed to delete. Did you type the password correctly?");
    }
  };

  return (
    <button 
      onClick={handleDelete} 
      className="bg-red-600 text-white px-4 py-1.5 rounded-lg text-sm font-bold hover:bg-red-700 transition-colors w-full sm:w-auto"
    >
      Delete Project
    </button>
  );
}