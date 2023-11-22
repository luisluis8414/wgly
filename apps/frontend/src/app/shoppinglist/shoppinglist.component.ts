import { Component, OnInit, inject } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SidebarComponent } from '../shared/components/sidebar/sidebar.component'
import { InputComponent } from '../shared/components/input/input.component'
import { ShoppingListService } from '../services/shoppinglist.service'
import { ShoppingItem } from '../shared/models/shopping-item.model'

@Component({
  selector: 'wgly-shoppinglist',
  standalone: true,
  providers: [ShoppingListService],
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.scss'],
  imports: [CommonModule, SidebarComponent, InputComponent],
})
export class ShoppinglistComponent implements OnInit {
  private readonly shoppingService = inject(ShoppingListService)
  protected shoppingList?: ShoppingItem[]
  ngOnInit(): void {
    this.shoppingService.getShopping().subscribe((list) => {
      this.shoppingList = list
    })
  }
}
