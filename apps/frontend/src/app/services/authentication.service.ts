import { Injectable, inject } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/enviroment.dev'

@Injectable({
  providedIn: 'root',
})
export class AuthentificationService {
  private http = inject(HttpClient)
  private baseUri = environment.apiBaseUrl

  getDiscordLogin(): void {
    window.location.href = `${this.baseUri}/auth/login`
  }
}
