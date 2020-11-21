import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/models/users'
import { UserService } from 'src/app/services/User/user.service'
import { Router } from '@angular/router'
import { MyResponse } from 'src/app/library/MyResponse'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService, private router:Router, private myResponse: MyResponse) { }
  error : String
  success : String
  ngOnInit(): void {
    console.log(this.myResponse.getToken())
    if (this.myResponse.getToken() != null)
    {
      this.moveTodashboad()
    }
  }

  login (event: Event) {
    event.preventDefault()
    let form = <HTMLFormElement>event.target
    let email = (<HTMLInputElement>form.elements.namedItem('email')).value
    let password = (<HTMLInputElement>form.elements.namedItem('password')).value
    let provider = 'admins'
    let login : Login = {email, password, provider}

    this.userService.login(login).subscribe(
      {
        next : (result :any) => {
          let successReponse = JSON.parse(JSON.stringify(result))
          console.log(JSON.stringify(successReponse.data.user))
          this.setToken(successReponse.data.type+" "+successReponse.data.token)
          this.setLoggedInfo(JSON.stringify(successReponse.data.user))
          this.error = undefined
          this.moveTodashboad()
        },
        error : (response : JSON) => {
          this.error = this.myResponse.getResponse(response)
          this.success = undefined
        } 
      }
    )
  }

  private setToken(token :string)
  {
    localStorage.setItem('token', token)
  }

  private setLoggedInfo(user : any)
  {
    localStorage.setItem('user', user)
  }

  moveTodashboad()
  {
    this.router.navigate(['dashboard']);
  }
}
