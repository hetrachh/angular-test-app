import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment'
import { HttpClient } from '@angular/common/http'
import { Login } from 'src/app/models/users'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private loginUrl = environment.apiEndpoint+'login'

  constructor(private http : HttpClient) { }

  login(login : Login) {
    return this.http.post(this.loginUrl, login)
  }

}
