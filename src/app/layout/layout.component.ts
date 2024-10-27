import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { CardComponent } from '../card/card.component';
import { ContactComponent } from '../contact/contact.component';
import { ExperienceComponent } from '../experience/experience.component';
import { IntroComponent } from '../intro/intro.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { SkillsComponent } from '../skills/skills.component';
import { IUserInfo } from '../../core/user-info.interface';
import { getPortofolioData } from '../../utils/common-functions';
import { SectionHeadingComponent } from '../section-heading/section-heading.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    CommonModule,
    NavBarComponent,
    ExperienceComponent,
    ContactComponent,
    AboutComponent,
    IntroComponent,
    CardComponent,
    SkillsComponent,
    SectionHeadingComponent,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent implements OnInit {
  userInfo!: IUserInfo;
  sections = [
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

  ngOnInit(): void {
    this.userInfo = getPortofolioData();
  }
}
