import { CommonModule } from '@angular/common';
import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { INavList } from '../../core/models/user-info.interface';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { NAV_LIST } from '../../core/constants/app-constants';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent implements OnInit {
  navItems: INavList[] = NAV_LIST;
  menuOpen = false;

  constructor(private route: ActivatedRoute, private renderer: Renderer2) {}

  ngOnInit(): void {
    // Scroll to fragment on load or route change
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        this.scrollToSection(fragment);
      }
    });
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;

    const hamburgerIcon = document.querySelector('.hamburger-icon');
    const menuLinks = document.querySelector('.menu-links');

    if (hamburgerIcon && menuLinks) {
      if (this.menuOpen) {
        hamburgerIcon.classList.add('open');
        menuLinks.classList.add('open');
      } else {
        hamburgerIcon.classList.remove('open');
        menuLinks.classList.remove('open');
      }
    }
  }

  scrollToSection(id: string): void {
    const section = document.getElementById(id);
    if (section) {
      const offset = 70; // height of sticky navbar
      const y = section.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({
        top: y,
        behavior: 'smooth',
      });

      // Close the menu on mobile after clicking
      if (this.menuOpen) {
        this.toggleMenu();
      }
    }
  }
}
