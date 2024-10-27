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
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent implements OnInit {
  userInfo!: IUserInfo;
  ngOnInit(): void {
    this.userInfo = getPortofolioData();
  }
}
