import { Component, OnInit, inject } from '@angular/core'
import { CommonModule } from '@angular/common'
import { IconComponent } from '../shared/icon/icon.component'
import { AppService } from '../app.service'
import { SidebarComponent } from '../shared/sidebar/sidebar.component'
import { AuthpageComponent } from '../authpage/authpage.component'

@Component({
  selector: 'wgly-homepage',
  standalone: true,
  imports: [CommonModule, IconComponent, SidebarComponent, AuthpageComponent],
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  private appService = inject(AppService)
  protected message!: string

  ngOnInit(): void {
    this.appService.getHello().subscribe((data) => {
      this.message = data.message
    })
  }
}
