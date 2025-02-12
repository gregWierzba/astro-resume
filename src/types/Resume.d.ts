export type Resume = {
  header: Header;
  about: About;
  projects: Project[];
  experience: Experience[];
  education: Education[];
  afterHours: string;
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

export type Header = {
  name: string;
  title: string;
  pdf: string;
  contact: {
    email: string;
    linkedin: string;
    github: string;
  };
};
