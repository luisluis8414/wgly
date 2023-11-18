import { Component, inject } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TextComponent } from '../text/text.component'
import { IconComponent } from '../icon/icon.component'
import { animate, state, style, transition, trigger } from '@angular/animations'
import { HeadingComponent } from '../heading/heading.component'
import { PillComponent } from '../pill/pill.component'
import { RouterLink } from '@angular/router'
import { PathResolverService } from '../../services/pathResolver.service'
import { DiscordLoginComponent } from '../discord-login/discord-login.component'
import { AuthentificationService } from '../../services/authentication.service'

@Component({
  selector: 'wgly-sidebar',
  standalone: true,
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
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
          width: '100vw',
          opacity: 1,
          overflow: 'hidden',
        })
      ),
      transition('collapsed => expanded', animate('200ms ease-in-out')),
      transition('expanded => collapsed', animate('200ms ease-in-out')),
    ]),
  ],
  imports: [
    CommonModule,
    TextComponent,
    IconComponent,
    HeadingComponent,
    PillComponent,
    RouterLink,
    DiscordLoginComponent,
  ],
})
export class SidebarComponent {
  protected sidebarCollapsed = true
  protected pathResolver = inject(PathResolverService)
  private readonly authService = inject(AuthentificationService)

  clickToggleSidebar() {
    this.sidebarCollapsed = !this.sidebarCollapsed
  }

  protected discordLogin(): void {
    this.authService.getDiscordLogin()
  }

  test() {
    this.authService.test().subscribe(
      (response) => {
        console.log(response) // Logging the response
      },
      (error) => {
        console.error('Error:', error) // Handling errors
      }
    )
  }
}
