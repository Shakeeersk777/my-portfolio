import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  Component,
  OnInit,
  Renderer2,
  ElementRef,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
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
  activeFragment: string = '';

  constructor(
    private route: ActivatedRoute,
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.addEventListener(
        'scroll',
        this.updateActiveFragmentOnScroll.bind(this)
      );
    }
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

  onNavClick(event: Event, id: string): void {
    event.preventDefault(); // Prevent default jump/flicker
    this.scrollToSection(id);
  }

  scrollToSection(id: string): void {
    if (isPlatformBrowser(this.platformId)) {
      const section = document.getElementById(id);
      if (section) {
        const offset = 70;
        const y = section.getBoundingClientRect().top + window.scrollY - offset;

        window.scrollTo({
          top: y,
          behavior: 'smooth',
        });

        if (this.menuOpen) {
          this.toggleMenu();
        }
      }
    }
  }

  updateActiveFragmentOnScroll(): void {
    for (const item of this.navItems) {
      const section = document.getElementById(item.id);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 80 && rect.bottom >= 80) {
          this.activeFragment = item.id;
          break;
        }
      }
    }
  }
}
