"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import Project from "./models/Project";
import { connectToDatabase } from "./mongodb";

// Helper function to check password
const verifyAuth = (secret: string | null) => {
  if (!secret || secret !== process.env.ADMIN_PASS) {
    throw new Error("Unauthorized: Incorrect Admin Password");
  }
};

export async function addProject(formData: FormData) {
  verifyAuth(formData.get("secret") as string | null);
  await connectToDatabase();

  const title = formData.get("title") as string;
  const slug = formData.get("slug") as string;
  const shortDescription = formData.get("shortDescription") as string;
  const fullDetails = formData.get("fullDetails") as string;
  const techString = formData.get("technologies") as string;
  const imageUrl = formData.get("imageUrl") as string;
  const liveUrl = formData.get("liveUrl") as string;
  const githubUrl = formData.get("githubUrl") as string;

  const technologies = techString.split(",").map((tech) => tech.trim()).filter(Boolean);

  try {
    await Project.create({ title, slug, shortDescription, fullDetails, technologies, imageUrl, liveUrl: liveUrl || undefined, githubUrl: githubUrl || undefined });
  } catch (error) {
    throw new Error("Failed to create project. Ensure your URL slug is unique.");
  }

  revalidatePath("/portfolio");
  redirect("/portfolio");
}

export async function deleteProject(formData: FormData) {
  verifyAuth(formData.get("secret") as string | null);
  await connectToDatabase();

  const projectId = formData.get("id") as string;
  
  try {
    await Project.findByIdAndDelete(projectId);
  } catch (error) {
    throw new Error("Failed to delete project.");
  }

  revalidatePath("/portfolio");
  revalidatePath("/admin");
}