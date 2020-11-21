import { Component, OnInit } from '@angular/core';
import { MyResponse} from 'src/app/library/MyResponse'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  constructor(private myResponse : MyResponse) { }
  name :string
  ngOnInit(): void {
    console.log(this.myResponse.getToken())
    console.log(this.myResponse.getLoggedInfo())
    let data = JSON.parse(this.myResponse.getLoggedInfo()).name
    this.name = data
    console.log("hi"+name)
  }

}
