export interface IEducation {
  degree: string;
  stream: string;
  period: string;
  college: string;
  score: string;
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

export interface ISkills {
  category: string;
  skills: ISkill[];
}

export interface IProject {
  title: string;
  img: string;
  githubLink: string;
  liveDemoLink: string;
  description: string;
}

export interface ICertification {
  title: string;
  img: string;
  modalImg: string;
  link: string;
  description: string;
}

export interface ISocialUrls {
  linkedin: string;
  github: string;
  phone: string;
  mail: string;
}

export interface IUserInfo {
  intro: IIntro,
  skills: ISkills[];
  projects: IProject[];
  education: IEducation; // Reference to the Education interface
  certifications: ICertification[];
  socialUrls: ISocialUrls;
  experience: IExperience[];
  contact: IContactInfo[]
}

export interface IIntro {
  username: string;
  profile: string; 
  email: string;
  role: string;
  currentLocation: string;
}

export interface IExperience {
  company: string;
  logo: string;
  jobTitle: string;
  location: string;
  yearsOfExperience: string;
  skills: string[];
  projects: string[];
  dateOfEmployment: string;
  jobDescription: string;
  joiningDate: string;
}

export interface INavList {
  id: string;
  label: string;
  sectionClass: string;
  display: boolean;
}

export interface ISectionList {
  id: string;
  intro: string;
  title: string;
}
