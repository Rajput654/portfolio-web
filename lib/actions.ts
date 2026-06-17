// lib/actions.ts
"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import Project from "./models/Project";
import { connectToDatabase } from "./mongodb";

export async function addProject(formData: FormData) {
  // 1. Connect to the database
  await connectToDatabase();

  // 2. Extract data from the form
  const title = formData.get("title") as string;
  const slug = formData.get("slug") as string;
  const shortDescription = formData.get("shortDescription") as string;
  const fullDetails = formData.get("fullDetails") as string;
  const techString = formData.get("technologies") as string;
  const imageUrl = formData.get("imageUrl") as string;
  const liveUrl = formData.get("liveUrl") as string;
  const githubUrl = formData.get("githubUrl") as string;

  // 3. Convert the comma-separated technologies string into an array
  const technologies = techString
    .split(",")
    .map((tech) => tech.trim())
    .filter(Boolean);

  try {
    // 4. Save the new project to MongoDB
    await Project.create({
      title,
      slug,
      shortDescription,
      fullDetails,
      technologies,
      imageUrl,
      liveUrl: liveUrl || undefined,
      githubUrl: githubUrl || undefined,
    });
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to create project. Ensure your URL slug is unique.");
  }

  // 5. Clear the Next.js cache for the portfolio page so the new project shows instantly
  revalidatePath("/portfolio");
  
  // 6. Redirect the user back to the portfolio to see their new project
  redirect("/portfolio");
}