import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  toggleMenu() {
    const hamburgerIcon = document.querySelector(
      '.hamburger-icon'
    ) as HTMLElement;
    const menuLinks = document.querySelector('.menu-links') as HTMLElement;

    hamburgerIcon.classList.toggle('open');
    menuLinks.classList.toggle('open');
  }

  navItems = [
    { id: 'about', label: 'About', sectionClass: 'about-section' },
    {
      id: 'experience',
      label: 'Experience',
      sectionClass: 'experience-section',
    },
    { id: 'projects', label: 'Projects', sectionClass: 'projects-section' },
    { id: 'contact', label: 'Contact', sectionClass: 'contact-section' },
  ];

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
      title: 'Frontend Development',
      skills: [
        { name: 'HTML', proficiency: 'Experienced' },
        { name: 'CSS', proficiency: 'Experienced' },
        { name: 'SASS', proficiency: 'Intermediate' },
        { name: 'JavaScript', proficiency: 'Basic' },
        { name: 'TypeScript', proficiency: 'Basic' },
        { name: 'Material UI', proficiency: 'Intermediate' },
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
    contact: '+91',
    role: 'Full stack web developer',
    experience: this.experienceData,
    projects: this.projects,
    education: this.education,
  };

  navigateToContact(): void {
    window.location.href = './#contact';
  }

  openGithub(url: string) {
    window.open(url, '_blank');
  }

  openDemo(url: string) {
    window.open(url, '_blank');
  }

  scrollToContact() {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }
}
