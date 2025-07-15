import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { CardComponent } from '../shared/card/card.component';
import { ContactComponent } from '../features/contact/contact.component';
import { ExperienceComponent } from '../features/experience/experience.component';
import { IntroComponent } from '../features/intro/intro.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SkillsComponent } from '../features/skills/skills.component';
import { ISectionList, IUserInfo } from '../core/models/user-info.interface';
import { SectionHeadingComponent } from '../shared/section-heading/section-heading.component';
import { EducationComponent } from '../features/education/education.component';
import { NGX_LOADER_TYPE, SECTION_LIST } from '../core/constants/app-constants';
import { LayoutService } from './layout.service';
import { NgxSpinnerModule, NgxSpinnerComponent, NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    CommonModule,
    NavBarComponent,
    EducationComponent,
    ExperienceComponent,
    ContactComponent,
    IntroComponent,
    CardComponent,
    SkillsComponent,
    SectionHeadingComponent,
    NgxSpinnerModule,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent implements OnInit {
  loaderType = NGX_LOADER_TYPE;
  userInfo: IUserInfo | null = null;
  sections: ISectionList[] = SECTION_LIST;
  _layoutService: LayoutService = inject(LayoutService);
  _spinnerService: NgxSpinnerService = inject(NgxSpinnerService);

  ngOnInit(): void {
    this.getPortfolioData();
  }

  constructor(private spinner: NgxSpinnerService) {}

  getPortfolioData() {
    this._spinnerService.show();

    const onSuccess = (res: IUserInfo) => {
     this.userInfo = res;
    };

    const onError = (error: any) => {
      this._spinnerService.hide();
    };

    const onComplete = () => {};

    const observer = {
      next: onSuccess,
      error: onError,
      complete: onComplete,
    };

    this._layoutService.getPortfolioData().subscribe(observer);
  }
}
