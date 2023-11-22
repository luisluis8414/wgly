import { HttpClient, HttpParams } from '@angular/common/http'
import { Injectable, inject } from '@angular/core'
import { Observable } from 'rxjs'
import { environment } from '../../environments/enviroment'
import { ShoppingItem } from '../shared/models/shopping-item.model'

@Injectable()
export class ShoppingListService {
  private readonly http = inject(HttpClient)
  private readonly baseUri = `${environment.apiBaseUrl}/shopping`

  getShopping(): Observable<ShoppingItem[]> {
    return this.http.get<ShoppingItem[]>(`${this.baseUri}/list`)
  }

  addItemToList(name: string, quantity: number): Observable<ShoppingItem[]> {
    const params = new HttpParams()
      .set('anzahl', quantity.toString())
      .set('name', name)
    return this.http.get<ShoppingItem[]>(`${this.baseUri}/add`, { params })
  }
}
