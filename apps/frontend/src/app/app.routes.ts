import { Route } from '@angular/router'
import { HomepageComponent } from './homepage/homepage.component'
import { AuthpageComponent } from './authpage/authpage.component'

export const appRoutes: Route[] = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomepageComponent },
  { path: 'auth', component: AuthpageComponent },
]
