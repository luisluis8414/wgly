import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../shared/icon/icon.component';
import { AppService } from '../app.service';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';

@Component({
  selector: 'wgplanner-homepage',
  standalone: true,
  imports: [CommonModule, IconComponent, SidebarComponent],
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  private appService = inject(AppService);
  protected message!: string;

  ngOnInit(): void {
    this.appService.getHello().subscribe((data) => {
      this.message = data.message;
    });
  }
}
