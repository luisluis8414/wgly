import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextComponent } from '../text/text.component';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'wgplanner-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  imports: [CommonModule, TextComponent, IconComponent],
})
export class NavbarComponent {
  protected sidebarCollapsed = true;
  clickToggleSidbar() {
    this.sidebarCollapsed = !this.sidebarCollapsed;
  }
}
