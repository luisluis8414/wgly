import { Component, OnInit, inject } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SidebarComponent } from '../shared/components/sidebar/sidebar.component'
import { InputComponent } from '../shared/components/input/input.component'
import { ShoppingListService } from '../services/shoppinglist.service'
import { ShoppingItem } from '../shared/models/shopping-item.model'
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms'
@Component({
  selector: 'wgly-shoppinglist',
  standalone: true,
  providers: [ShoppingListService],
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.scss'],
  imports: [
    CommonModule,
    SidebarComponent,
    InputComponent,
    ReactiveFormsModule,
  ],
})
export class ShoppinglistComponent implements OnInit {
  private readonly shoppingService = inject(ShoppingListService)
  protected shoppingList?: ShoppingItem[]
  protected name = new FormControl('', {
    nonNullable: true,
    validators: Validators.required,
  })
  protected quantity = new FormControl(1, {
    nonNullable: true,
    validators: Validators.min(1),
  })

  ngOnInit(): void {
    this.shoppingService.getShoppingList().subscribe((list) => {
      this.shoppingList = list
    })
  }

  protected addItem(): void {
    if (this.name.valid && this.quantity.valid) {
      this.shoppingService
        .addItemToList(this.name.value, this.quantity.value)
        .subscribe((list) => {
          this.shoppingList = list
        })
    }
  }
}
