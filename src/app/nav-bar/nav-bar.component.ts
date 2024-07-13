import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent {
  @Input() username: string = '';
  navItems = [
    { id: 'about', label: 'About', sectionClass: 'about-section' },
    {
      id: 'experience',
      label: 'Experience',
      sectionClass: 'experience-section',
    },
    {
      id: 'certifications',
      label: 'Certifications',
      sectionClass: 'certifications-section',
    },
    { id: 'projects', label: 'Projects', sectionClass: 'projects-section' },
    { id: 'contact', label: 'Contact', sectionClass: 'contact-section' },
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
