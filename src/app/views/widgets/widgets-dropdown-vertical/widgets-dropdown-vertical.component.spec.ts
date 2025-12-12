import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { ButtonModule, DropdownModule, GridModule, WidgetModule } from '@coreui/angular-pro';
import { IconModule, IconSetService } from '@coreui/icons-angular';
import { ChartjsModule } from '@coreui/angular-chartjs';
import { iconSubset } from '../../../icons/icon-subset';
import { WidgetsDropdownVerticalComponent } from './widgets-dropdown-vertical.component';

describe('WidgetsDropdownVerticalComponent', () => {
  let component: WidgetsDropdownVerticalComponent;
  let fixture: ComponentFixture<WidgetsDropdownVerticalComponent>;
  let iconSetService: IconSetService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WidgetsDropdownVerticalComponent, WidgetModule, DropdownModule, IconModule, ButtonModule, ChartjsModule, GridModule],
      providers: [IconSetService, provideRouter([])]
    })
      .compileComponents();
  });

  beforeEach(() => {
    iconSetService = TestBed.inject(IconSetService);
    iconSetService.icons = { ...iconSubset };

    fixture = TestBed.createComponent(WidgetsDropdownVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
