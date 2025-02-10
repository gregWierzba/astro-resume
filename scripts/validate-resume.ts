import { z } from "zod";
import resumeData from "../src/resume.json";

// Define Zod schemas matching our TypeScript types
const ContactSchema = z.object({
  email: z.string().email(),
  website: z.string().url(),
  linkedin: z.string().url(),
  github: z.string().url(),
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
  startDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  endDate: z.union([
    z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
    z.literal("Present"),
  ]),
  website: z.string().url(),
  responsibilities: z.string(),
});

const EducationSchema = z.object({
  institution: z.string(),
  degree: z.string(),
  startDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  endDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  description: z.string(),
});

const ResumeSchema = z.object({
  name: z.string(),
  title: z.string(),
  contact: ContactSchema,
  about: AboutSchema,
  projects: z.array(ProjectSchema),
  experience: z.array(ExperienceSchema),
  education: z.array(EducationSchema),
  afterHours: z.string(),
  footerNote: z.string(),
  skills: z.array(z.string()),
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
  console.log(`- ${validatedResume.skills.length} skills listed`);
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
