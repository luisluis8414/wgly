import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SidebarComponent } from '../shared/sidebar/sidebar.component'
import { InputComponent } from '../shared/input/input.component'

@Component({
  selector: 'wgly-shoppinglist',
  standalone: true,
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.scss'],
  imports: [CommonModule, SidebarComponent, InputComponent],
})
export class ShoppinglistComponent {}
