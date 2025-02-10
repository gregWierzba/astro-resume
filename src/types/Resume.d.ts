export type Resume = {
  name: string;
  title: string;
  contact: {
    email: string;
    website: string;
    linkedin: string;
    github: string;
  };
  about: About;
  projects: Project[];
  experience: Experience[];
  education: Education[];
  afterHours: string;
  skills: string[];
  footerNote: string;
};

export type About = {
  photo: string;
  summary: string;
};

export type Project = {
  name: string;
  description: string;
  technologies: string[];
  url: string;
};

export type Experience = {
  company: string;
  position: string;
  website: string;
  startDate: string;
  endDate: string;
  responsibilities: string;
};

export type Education = {
  institution: string;
  degree: string;
  startDate: string;
  endDate: string;
  description: string;
};
