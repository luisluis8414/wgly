import { Route } from '@angular/router'
import { HomepageComponent } from './homepage/homepage.component'
import { AuthpageComponent } from './authpage/authpage.component'
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component'

export const appRoutes: Route[] = [
  { path: '', redirectTo: 'shopping', pathMatch: 'full' },
  { path: 'home', component: HomepageComponent },
  { path: 'auth', component: AuthpageComponent },
  { path: 'shopping', component: ShoppinglistComponent },
]
