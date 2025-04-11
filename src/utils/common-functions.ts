import {
  CERTIFICATIONS,
  CONTACT_INFO,
  EDUCATION,
  EXPERIENCE,
  PROJECTS,
  SKILLS,
  SOCIAL_URLS,
} from '../core/user-info';
import { IUserInfo } from '../core/user-info.interface';

/**
 * Calculates the professional experience based on the joined date.
 * @param joinedDate - The date when the individual joined.
 * @returns A string representing the experience in years and months.
 */
export function calculateExperience(joinedDate: Date): string {
  const currentDate = new Date();
  let years = currentDate.getFullYear() - joinedDate.getFullYear();
  let months = currentDate.getMonth() - joinedDate.getMonth();

  // Adjust for negative month difference
  if (months < 0) {
    years -= 1;
    months += 12;
  }

  // If the experience is less than a year, return in months
  if (years === 0) {
    return `${months} month${months !== 1 ? 's' : ''}`;
  }

  // Format experience as "X year(s) and Y month(s)"
  let experience = `${years} year${years !== 1 ? 's' : ''}`;
  if (months > 0) {
    experience += ` and ${months} month${months !== 1 ? 's' : ''}`;
  }

  return experience;
}

export function getPortofolioData(): IUserInfo {
  return {
    username: 'Shakeer Shaik',
    profile: '../assets/images/profile-pic.png',
    email: 'shakeersk777@gmail.com',
    contact: CONTACT_INFO,
    role: 'Junior Programmer Analyst',
    currentLocation: 'Chennai, Tamilnadu, India',
    skills: SKILLS,
    projects: PROJECTS,
    education: EDUCATION,
    certifications: CERTIFICATIONS,
    socialUrls: SOCIAL_URLS,
    experience: EXPERIENCE,
  };
}
