import { Injectable, inject } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/enviroment'

@Injectable({
  providedIn: 'root',
})
export class AuthentificationService {
  private http = inject(HttpClient)
  private baseUri = environment.apiBaseUrl

  getDiscordLogin(): void {
    window.location.href = `${this.baseUri}/auth/login`
  }

  // test(): Observable<string> {
  //   return this.http.get<string>(`${this.baseUri}/auth/status`, {
  //     withCredentials: true,
  //   })
  // }
}
