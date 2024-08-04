import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceOverviewModalComponent } from './experience-overview-modal.component';

describe('ExperienceOverviewModalComponent', () => {
  let component: ExperienceOverviewModalComponent;
  let fixture: ComponentFixture<ExperienceOverviewModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperienceOverviewModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienceOverviewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
