// lib/models/Project.ts
import mongoose, { Schema, Document } from "mongoose";

export interface IProject extends Document {
  title: string;
  slug: string;
  shortDescription: string;
  fullDetails: string;
  technologies: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
  createdAt: Date;
}

const ProjectSchema: Schema = new Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  shortDescription: { type: String, required: true },
  fullDetails: { type: String, required: true },
  technologies: { type: [String], required: true },
  imageUrl: { type: String, required: true },
  liveUrl: { type: String, required: false },
  githubUrl: { type: String, required: false },
  createdAt: { type: Date, default: Date.now }
});

// This prevents Mongoose from recompiling the model if it already exists
export default mongoose.models.Project || mongoose.model<IProject>("Project", ProjectSchema);