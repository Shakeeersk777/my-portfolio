import {
  CERTIFICATIONS,
  CONTACT_INFO,
  EDUCATION,
  EXPERIENCE,
  PROJECTS,
  SKILLS,
  SOCIAL_URLS,
} from '../core/user-info.enum';
import { IUserInfo } from '../core/user-info.interface';

export function calculateExperience(joinedDate: Date): string {
  const currentDate = new Date();
  let years = currentDate.getFullYear() - joinedDate.getFullYear();
  let months = currentDate.getMonth() - joinedDate.getMonth();

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  const totalExperience = years + months / 12;
  return `${totalExperience.toFixed(1)} years`;
}

export function getPortofolioData(): IUserInfo {
  return {
    username: 'Shakeer Shaik',
    profile: '../assets/images/profile-pic.png',
    email: 'test@gmail.com',
    contact: CONTACT_INFO,
    role: 'Web Developer',
    skills: SKILLS,
    projects: PROJECTS,
    education: EDUCATION,
    certifications: CERTIFICATIONS,
    socialUrls: SOCIAL_URLS,
    experience: EXPERIENCE,
  };
}
