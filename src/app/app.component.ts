import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { IntroComponent } from './intro/intro.component';
import { CertificationsComponent } from "./certifications/certifications.component";

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
    CertificationsComponent
],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  education = {
    degree: 'Bachelor of Technology in Mechanical engineering',
  };

  contactInfo = [
    {
      key: 'Mobile',
      value: '+91 1234567890',
      img: '../assets/images/email.png',
    },
    {
      key: 'Email',
      value: '+91 1234567890',
      img: '../assets/images/email.png',
    },
    {
      key: 'Linked In',
      value: '+91 1234567890',
      img: '../assets/images/email.png',
    },
  ];

  experienceData = [
    {
      category: 'Frontend Development',
      skills: [
        { name: 'HTML', img: '../assets/images/html.png' },
        { name: 'CSS', img: '../assets/images/css.png' },
        { name: 'SASS', img: '../assets/images/sass.png' },
        { name: 'Bootstrap', img: '../assets/images/bootstrap.png' },
        { name: 'Angular', img: '../assets/images/angular.png' },
        { name: 'React', img: '../assets/images/react.png' },
        { name: 'React Native', img: '../assets/images/react.png' },
      ],
    },
    {
      category: 'Backend Development',
      skills: [
        { name: 'JavaScript', img: '../assets/images/js.png' },
        { name: 'TypeScript', img: '../assets/images/typescript.png' },
        { name: 'Node JS', img: '../assets/images/node-js.png' },
        // { name: 'Express JS', img: '../assets/images/expressjs.png' },
        { name: 'Rest API', img: '../assets/images/restapi.png' },
        { name: 'PostgreSQL', img: '../assets/images/postgre.png' },
        { name: 'MongoDB', img: '../assets/images/mongodb.png' },
      ],
    },
    {
      category: 'Version Control',
      skills: [
        { name: 'Git', img: '../assets/images/git.png' },
        { name: 'SVN', img: '../assets/images/svn.png' },
      ],
    },
    {
      category: 'Hosting',
      skills: [
        { name: 'Vercel', img: '../assets/images/vercel.png' },
        { name: 'Render', img: '../assets/images/invalid-image.png' },
        { name: 'AWS S3', img: '../assets/images/aws.png' },
      ],
    },
  ];

  projects = [
    {
      title: 'Project One',
      imgSrc: '../assets/images/profile-pic.png',
      githubLink: 'https://github.com/',
      liveDemoLink: 'https://github.com/',
    },
    {
      title: 'Project Two',
      imgSrc: '../assets/images/profile-pic.png',
      githubLink: 'https://github.com/',
      liveDemoLink: 'https://github.com/',
    },
  ];

  socialUrls = {
    linkedIn: '',
    github: '',
  };

  userInfo = {
    username: 'Shakeer Shaik',
    profile: '',
    email: 'test@gmail.com',
    contact: this.contactInfo,
    role: 'Full stack web developer',
    experience: this.experienceData,
    projects: this.projects,
    education: this.education,
  };

  navigateToContact(): void {
    window.location.href = './#contact';
  }

  scrollToContact() {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }
}
