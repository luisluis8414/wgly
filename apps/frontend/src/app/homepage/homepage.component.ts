import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../shared/icon/icon.component';
import { NavbarComponent } from '../shared/navbar/navbar.component';

@Component({
  selector: 'wgplanner-homepage',
  standalone: true,
  imports: [CommonModule, IconComponent, NavbarComponent],
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent {}
