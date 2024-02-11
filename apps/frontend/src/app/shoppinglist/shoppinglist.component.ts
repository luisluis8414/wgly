import { Component, OnInit, inject } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SidebarComponent } from '../shared/components/sidebar/sidebar.component'
import { InputComponent } from '../shared/components/input/input.component'
import { ShoppingListService } from '../services/shoppinglist.service'
import { ShoppingItem } from '../shared/models/shopping-item.model'
import {
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms'
import { LoadingComponent } from '../shared/components/loading/loading.component'
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
    FormsModule,
    LoadingComponent,
  ],
})
export class ShoppinglistComponent implements OnInit {
  private readonly shoppingService = inject(ShoppingListService)
  protected isLoading = true
  protected shoppingList = new FormControl<ShoppingItem[]>([])

  protected addItemName = new FormControl('', {
    nonNullable: true,
    validators: Validators.required,
  })
  protected addItemQuantity = new FormControl(1, {
    nonNullable: true,
    validators: Validators.min(1),
  })

  ngOnInit(): void {
    this.shoppingService.getShoppingList().subscribe((list) => {
      this.shoppingList.setValue(list)
      this.isLoading = false
    })
  }

  protected addItem(): void {
    if (this.addItemName.valid && this.addItemQuantity.valid) {
      this.shoppingService
        .addItemToList(this.addItemName.value, this.addItemQuantity.value)
        .subscribe((list) => {
          this.addItemName.setValue('')
          this.addItemQuantity.setValue(1)
          this.shoppingList.setValue(list)
        })
    }
  }

  protected done(): void {
    this.isLoading = true
    const checkedItems =
      this.shoppingList.value
        ?.filter((item) => item.checked)
        .map((checkedItem) => checkedItem.itemId) ?? []
    const newList = this.shoppingService.deleteBatch(checkedItems)
    newList.subscribe((list) => {
      this.shoppingList.setValue(list)
      this.isLoading = false
    })
  }
}
