import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SidebarComponent } from '../shared/sidebar/sidebar.component'

@Component({
  selector: 'wgplanner-authpage',
  standalone: true,
  templateUrl: './authpage.component.html',
  styleUrls: ['./authpage.component.scss'],
  imports: [CommonModule, SidebarComponent],
})
export class AuthpageComponent {}
