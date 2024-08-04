import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { IntroComponent } from './intro/intro.component';
import { CardComponent } from './card/card.component';
import { SkillsComponent } from './skills/skills.component';
import { getPortofolioData } from '../utils/common-functions';
import { IUser } from '../core/user-info.interface';

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
    SkillsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  userInfo!: IUser;
  ngOnInit(): void {
    this.userInfo = getPortofolioData();
  }
}
