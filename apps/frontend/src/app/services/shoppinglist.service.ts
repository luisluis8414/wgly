import { HttpClient, HttpParams } from '@angular/common/http'
import { Injectable, inject } from '@angular/core'
import { Observable } from 'rxjs'
import { environment } from '../../environments/enviroment'
import { ShoppingItem } from '../shared/models/shopping-item.model'

@Injectable()
export class ShoppingListService {
  private readonly http = inject(HttpClient)
  private readonly baseUri = `${environment.apiBaseUrl}/shoppinglist`

  getShoppingList(): Observable<ShoppingItem[]> {
    console.log(this.baseUri)
    const list = this.http.get<any[]>(`${this.baseUri}`)
    list.subscribe((list) => {
      console.log(list)
    })
    return list
  }

  addItemToList(name: string, quantity: number): Observable<ShoppingItem[]> {
    const body = {
      name: name,
      quantity: quantity,
    }
    return this.http.post<ShoppingItem[]>(`${this.baseUri}`, body)
  }
}
