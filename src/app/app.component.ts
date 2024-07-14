import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { IntroComponent } from './intro/intro.component';
import { CertificationsComponent } from './certifications/certifications.component';
import {
  ICertification,
  IContactInfo,
  IEducation,
  IExperience,
  IProject,
  IUserInfo,
} from '../core/user-info.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    NavBarComponent,
    ExperienceComponent,
    ProjectsComponent,
    ContactComponent,
    AboutComponent,
    IntroComponent,
    CertificationsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  education: IEducation = {
    degree: 'Bachelor of Technology in Mechanical engineering',
  };

  contactInfo: IContactInfo[] = [
    {
      key: 'Mobile',
      value: '+91 9553259698',
      icon: 'fa-solid fa-phone',
      url: 'tel:+919553259698',
    },
    {
      key: 'Email',
      value: 'shakeersk777@gmail.com',
      icon: 'fa-solid fa-envelope',
      url: 'mailto:shakeersk777@gmail.com',
    },
    {
      key: 'Linked In',
      value: 'Shakeer Shaik',
      icon: 'fa-brands fa-linkedin',
      url: 'https://www.linkedin.com/in/shakeer-shaik-58125422a/',
    },
  ];

  experience: IExperience[] = [
    {
      category: 'Frontend Development',
      skills: [
        { name: 'HTML', icon: 'fab fa-html5' },
        { name: 'CSS', icon: 'fab fa-css3-alt' },
        { name: 'SASS', icon: 'fab fa-sass' },
        { name: 'Bootstrap', icon: 'fab fa-bootstrap' },
        { name: 'Angular', icon: 'fab fa-angular' },
        { name: 'React', icon: 'fab fa-react' },
        { name: 'React Native', icon: 'fab fa-react' },
      ],
    },
    {
      category: 'Backend Development',
      skills: [
        { name: 'JavaScript', icon: 'fab fa-js' },
        { name: 'TypeScript', icon: '' }, // Font Awesome doesn't have a specific TypeScript icon
        { name: 'Node JS', icon: 'fab fa-node-js' },
        { name: 'Express JS', icon: 'fa-solid fa-server' }, // No specific icon for Express.js
        { name: 'Rest API', icon: 'fas fa-cloud' }, // Custom icon for Rest API
        { name: 'PostgreSQL', icon: 'fas fa-database' }, // Custom icon for PostgreSQL
        { name: 'MongoDB', icon: 'fas fa-database' }, // Custom icon for MongoDB
      ],
    },
    {
      category: 'Version Control',
      skills: [
        { name: 'Git', icon: 'fa-brands fa-git-alt' },
        { name: 'SVN', icon: 'fas fa-code-branch' }, // Custom icon for SVN
      ],
    },
    {
      category: 'Hosting',
      skills: [
        { name: 'Vercel', icon: 'fas fa-cloud' }, // Custom icon for Vercel
        { name: 'Render', icon: 'fas fa-server' }, // Custom icon for Render
        { name: 'AWS S3', icon: 'fab fa-aws' },
      ],
    },
  ];

  projects: IProject[] = [
    {
      title: 'Timesheet Management',
      img: '../assets/images/timesheet-app-preview.png',
      githubLink: '',
      liveDemoLink:
        'https://timesheet-6ln3itzhr-shakeer-shaiks-projects.vercel.app/app/timesheet/dashboard',
    },
    {
      title: 'Bank Portfolio',
      img: '../assets/images/bank-app-preview.png',
      githubLink: 'https://github.com/Shakeeersk777/Shakeer-Bank',
      liveDemoLink:
        'https://shakeeersk777.github.io/Shakeer-Bank/?trk=public_profile_project-button',
    },
  ];

  certifications: ICertification[] = [
    {
      title: 'Angular Developer Certification',
      img: '../assets/images/infosys-logo.png',
      link: '',
    },
    {
      title: 'Java Programming Certification',
      img: '../assets/images/infosys-logo.png',
      link: '',
    },
    {
      title: 'Digital Marketing Certification',
      img: '../assets/images/google-logo.png',
      link: '',
    },
  ];

  socialUrls = {
    github: 'https://github.com/Shakeeersk777',
    linkedIn: 'https://www.linkedin.com/in/shakeer-shaik-58125422a/',
  };

  userInfo: IUserInfo = {
    username: 'Shakeer Shaik',
    profile: '../assets/images/profile-pic.png',
    email: 'test@gmail.com',
    contact: this.contactInfo,
    role: 'Full stack web developer',
    experience: this.experience,
    projects: this.projects,
    education: this.education,
    certifications: this.certifications,
    socialUrls: this.socialUrls,
  };
}
