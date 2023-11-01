import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextComponent } from '../text/text.component';
import { IconComponent } from '../icon/icon.component';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'wgplanner-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  imports: [CommonModule, TextComponent, IconComponent],
  animations: [
    trigger('sidebarAnimation', [
      state(
        'collapsed',
        style({
          width: '0',
          opacity: 0,
          overflow: 'hidden',
          display: 'none',
        })
      ),
      state(
        'expanded',
        style({
          width: '30vw',
          opacity: 1,
          overflow: 'hidden',
          display: 'block',
        })
      ),
      transition('collapsed => expanded', animate('200ms ease-in-out')),
      transition('expanded => collapsed', animate('100ms ease-out')),
    ]),
  ],
})
export class NavbarComponent {
  protected sidebarCollapsed = true;
  clickToggleSidbar() {
    this.sidebarCollapsed = !this.sidebarCollapsed;
  }
}
