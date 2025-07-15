import { INavList, ISectionList } from '../models/user-info.interface';

export const NGX_LOADER_TYPE = 'ball-clip-rotate-multiple';

export const SECTION_LIST: ISectionList[] = [
  { id: 'education', intro: 'Explore My', title: 'Education', display: true },
  { id: 'experience', intro: 'Explore My', title: 'Experience', display: true },
  { id: 'skills', intro: 'Explore My', title: 'Skills', display: true },
  {
    id: 'certifications',
    intro: 'Browse My Recent',
    title: 'Certifications',
    display: true,
  },
  {
    id: 'projects',
    intro: 'Browse My Recent',
    title: 'Projects',
    display: true,
  },
  { id: 'contact', intro: 'Get in Touch', title: 'Contact Me', display: true },
];

export const NAV_LIST: INavList[] = [
  {
    id: 'education',
    label: 'Education',
    sectionClass: 'education-section',
    display: true,
  },
  {
    id: 'experience',
    label: 'Experience',
    sectionClass: 'experience-section',
    display: true,
  },
  {
    id: 'skills',
    label: 'Skills',
    sectionClass: 'skills-section',
    display: true,
  },
  {
    id: 'certifications',
    label: 'Certifications',
    sectionClass: 'certifications-section',
    display: true,
  },
  {
    id: 'projects',
    label: 'Projects',
    sectionClass: 'projects-section',
    display: true,
  },
  {
    id: 'contact',
    label: 'Contact',
    sectionClass: 'contact-section',
    display: true,
  },
];
