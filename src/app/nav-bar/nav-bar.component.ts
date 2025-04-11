import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { INavList } from '../../core/user-info.interface';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent implements OnInit {
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

  constructor(private route: ActivatedRoute) {}
  
  ngOnInit(): void {
     // Listen to fragment changes
     this.route.fragment.subscribe(fragment => {
      if (fragment) {
        this.scrollToSection(fragment);
      }
    });
  }

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
      const offset = 70; // Adjust for fixed headers
      const sectionPosition = section.getBoundingClientRect().top + window.pageYOffset;

      window.scrollTo({
        top: sectionPosition - offset,
        behavior: 'smooth'
      });
    }
  }
}
