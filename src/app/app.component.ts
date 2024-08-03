import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { IntroComponent } from './intro/intro.component';
import {
  ICertification,
  IContactInfo,
  IEducation,
  IExperience,
  IProject,
  IUserInfo,
} from '../core/user-info.interface';
import { CardComponent } from './card/card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    NavBarComponent,
    ExperienceComponent,
    ContactComponent,
    AboutComponent,
    IntroComponent,
    CardComponent,
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
        // { name: 'React', icon: 'fab fa-react' },
        // { name: 'React Native', icon: 'fab fa-react' },
      ],
    },
    {
      category: 'Backend Development',
      skills: [
        { name: 'JavaScript', icon: 'fab fa-js' },
        { name: 'TypeScript', icon: '' }, // Font Awesome doesn't have a specific TypeScript icon
        { name: 'Node JS', icon: 'fab fa-node-js' },
        // { name: 'Express JS', icon: 'fa-solid fa-server' }, // No specific icon for Express.js
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
      img: '../assets/images/timesheet.jpg',
      description:
        'Developed a Timesheet App using React, Node.js, and PostgreSQL to streamline work hour tracking and timesheet management. Features include secure authentication, an intuitive dashboard, and efficient project/task assignment, allowing users to log, edit, and submit timesheets seamlessly.',
      githubLink: '',
      liveDemoLink: '',
    },
    {
      title: 'Bank Portfolio',
      img: '../assets/images/bank-app-preview.png',
      githubLink: 'https://github.com/Shakeeersk777/Shakeer-Bank',
      description:
        'Simple portfolio bank website developed using HTML, CSS, and JavaScript.',
      liveDemoLink:
        'https://shakeeersk777.github.io/Shakeer-Bank/?trk=public_profile_project-button',
    },
    {
      title: 'ATM Management',
      img: '../assets/images/atm.jpg',
      githubLink: 'https://github.com/Shakeeersk777/ATM-Project',
      description:
        'Developed using Java, where users can deposit, withdraw, and check balance.',
      liveDemoLink: '',
    },
  ];

  certifications: ICertification[] = [
    {
      title: 'Angular',
      img: '../assets/images/infosys-logo.png',
      modalImg: '../assets/images/angular-certificaton.jpg',
      link: '',
      description:
        'From my Angular certification, I have learned core concepts such as building and managing components, utilizing Angular`s reactive programming with RxJS, and implementing data binding and dependency injection for scalable applications. The certification also covered Angular’s module system, routing, and forms, along with best practices for state management and performance optimization. Additionally, I gained experience with Angular’s CLI, testing frameworks, and integration of Angular Material and Bootstrap for professional and responsive UI design.',
    },
    {
      title: 'Java Programming',
      img: '../assets/images/infosys-logo.png',
      modalImg: '../assets/images/java-certication.jpg',
      description:
        'From my certification, I have learned core Java concepts, including Object-Oriented Programming principles such as Encapsulation, Inheritance, Polymorphism, and Abstraction for creating modular and reusable code. The certification also covered Java Collections Framework, Exception Handling, and Multithreading to efficiently manage data and build robust, concurrent applications. Additionally, I gained knowledge in Java 8 features like lambda expressions and the Stream API, as well as Java I/O and JVM internals for optimizing performance and advanced data processing.',
      link: '',
    },
    {
      title: 'Digital Marketing',
      img: '../assets/images/google-logo.png',
      modalImg: '../assets/images/google-certificaton.jpg',
      description:
        'From my digital marketing certification, I learned key strategies for SEO, SEM, content marketing, and social media management to drive online engagement and growth. The certification also covered data analytics and campaign optimization techniques to measure and enhance marketing performance.',
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
