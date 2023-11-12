import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { IconComponent } from '../shared/icon/icon.component'
import { SidebarComponent } from '../shared/sidebar/sidebar.component'
import { AuthpageComponent } from '../authpage/authpage.component'

@Component({
  selector: 'wgly-homepage',
  standalone: true,
  imports: [CommonModule, IconComponent, SidebarComponent, AuthpageComponent],
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent {
  protected message!: string
}
