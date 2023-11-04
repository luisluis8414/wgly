import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TextComponent } from '../text/text.component'
import { IconComponent } from '../icon/icon.component'
import { animate, state, style, transition, trigger } from '@angular/animations'

@Component({
  selector: 'wgplanner-sidebar',
  standalone: true,
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  imports: [CommonModule, TextComponent, IconComponent],
  animations: [
    trigger('sidebarAnimation', [
      state(
        'collapsed',
        style({
          width: '0',
          opacity: 0,
          overflow: 'hidden',
        })
      ),
      state(
        'expanded',
        style({
          width: '30vw',
          opacity: 1,
          overflow: 'hidden',
        })
      ),
      transition('collapsed => expanded', animate('200ms ease-in-out')),
      transition('expanded => collapsed', animate('100ms ease-out')),
    ]),
  ],
})
export class SidebarComponent {
  protected sidebarCollapsed = true

  clickToggleSidebar() {
    this.sidebarCollapsed = !this.sidebarCollapsed
  }
}
