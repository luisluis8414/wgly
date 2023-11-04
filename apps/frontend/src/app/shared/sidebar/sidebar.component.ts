import { Component, inject } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TextComponent } from '../text/text.component'
import { IconComponent } from '../icon/icon.component'
import { animate, state, style, transition, trigger } from '@angular/animations'
import { HeadingComponent } from '../heading/heading.component'
import { PillComponent } from '../pill/pill.component'
import { RouterLink } from '@angular/router'
import { PathResolverService } from '../../services/pathResolver.service'

@Component({
  selector: 'wgplanner-sidebar',
  standalone: true,
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  imports: [
    CommonModule,
    TextComponent,
    IconComponent,
    HeadingComponent,
    PillComponent,
    RouterLink,
  ],
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
      transition('expanded => collapsed', animate('200ms ease-in-out')),
    ]),
  ],
})
export class SidebarComponent {
  protected sidebarCollapsed = true
  protected pathResolver = inject(PathResolverService)

  clickToggleSidebar() {
    this.sidebarCollapsed = !this.sidebarCollapsed
  }
}
