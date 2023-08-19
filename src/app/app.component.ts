import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { LayoutComponent } from '@core/components/layout/layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LayoutComponent],
  template: '<eve-layout />',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'evefacturing';
}
