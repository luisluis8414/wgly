import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SidebarComponent } from '../shared/sidebar/sidebar.component'

@Component({
  selector: 'wgly-shoppinglist',
  standalone: true,
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.scss'],
  imports: [CommonModule, SidebarComponent],
})
export class ShoppinglistComponent {}
