import { INavList, ISectionList } from '../models/user-info.interface';

export const NGX_LOADER_TYPE = 'ball-clip-rotate-multiple';

export const SECTION_LIST: ISectionList[] = [
  { id: 'education', intro: 'Explore My', title: 'Education' },
  { id: 'experience', intro: 'Explore My', title: 'Experience' },
  { id: 'skills', intro: 'Explore My', title: 'Skills' },
  {
    id: 'certifications',
    intro: 'Browse My Recent',
    title: 'Certifications',
  },
  { id: 'projects', intro: 'Browse My Recent', title: 'Projects' },
  { id: 'contact', intro: 'Get in Touch', title: 'Contact Me' },
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

