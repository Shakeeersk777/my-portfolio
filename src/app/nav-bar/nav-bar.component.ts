import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { INavList } from '../../core/user-info.interface';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent {
  navItems: INavList[] = [
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

  toggleMenu() {
    const hamburgerIcon = document.querySelector(
      '.hamburger-icon'
    ) as HTMLElement;
    const menuLinks = document.querySelector('.menu-links') as HTMLElement;

    hamburgerIcon.classList.toggle('open');
    menuLinks.classList.toggle('open');
  }

  scrollToSection(id: string) {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
