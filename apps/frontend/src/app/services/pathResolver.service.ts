import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class PathResolverService {
  getHome(): string {
    return '/home'
  }
}
