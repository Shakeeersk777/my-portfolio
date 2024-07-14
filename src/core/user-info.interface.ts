export interface IEducation {
  degree: string;
}

export interface IContactInfo {
  key: string;
  value: string;
  icon: string;
  url: string;
}

export interface ISkill {
  name: string;
  icon: string;
}

export interface IExperience {
  category: string;
  skills: ISkill[];
}

export interface IProject {
  title: string;
  img: string;
  githubLink: string;
  liveDemoLink: string;
}

export interface ICertification {
  title: string;
  img: string;
  link: string;
}

export interface ISocialUrls {
  linkedIn: string;
  github: string;
}

export interface IUserInfo {
  username: string;
  profile: string; // Assuming this should be a string URL
  email: string;
  contact: IContactInfo[];
  role: string;
  experience: IExperience[];
  projects: IProject[];
  education: IEducation; // Reference to the Education interface
  certifications: ICertification[];
  socialUrls: ISocialUrls;
}
