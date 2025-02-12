import { z } from "zod";
import resumeData from "../src/resume.json";

// Define Zod schemas matching our TypeScript types
const ContactSchema = z.object({
  email: z.string().email(),
  linkedin: z.string().url(),
  github: z.string().url(),
});

const HeaderSchema = z.object({
  name: z.string(),
  title: z.string(),
  pdf: z.string(),
  contact: ContactSchema,
});

const AboutSchema = z.object({
  summary: z.string(),
  photo: z.string(),
});

const ProjectSchema = z.object({
  name: z.string(),
  description: z.string(),
  technologies: z.array(z.string()),
  url: z.string().url(),
});

const ExperienceSchema = z.object({
  company: z.string(),
  position: z.string(),
  startDate: z.string(),
  endDate: z.string(),
  website: z.string().url(),
  responsibilities: z.string(),
});

const EducationSchema = z.object({
  institution: z.string(),
  degree: z.string(),
  startDate: z.string(),
  endDate: z.string(),
  description: z.string(),
});

const ResumeSchema = z.object({
  header: HeaderSchema,
  about: AboutSchema,
  projects: z.array(ProjectSchema),
  experience: z.array(ExperienceSchema),
  education: z.array(EducationSchema),
  afterHours: z.string(),
  footerNote: z.string(),
});

try {
  // Parse and validate the resume data
  const validatedResume = ResumeSchema.parse(resumeData);
  console.log("✅ Resume data is valid");

  // Log some stats about the resume
  console.log("\nResume Statistics:");
  console.log(`- ${validatedResume.experience.length} work experiences`);
  console.log(`- ${validatedResume.projects.length} projects`);
  console.log(`- ${validatedResume.education.length} education entries`);
} catch (error) {
  if (error instanceof z.ZodError) {
    console.error("❌ Resume validation failed:");
    error.errors.forEach((err) => {
      console.error(`- ${err.path.join(".")}: ${err.message}`);
    });
    process.exit(1);
  } else {
    throw error;
  }
}
