import { Component, OnInit } from '@angular/core';
import {MyResponse} from 'src/app/library/MyResponse'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor(private myResponse: MyResponse) { }
  name : string
  ngOnInit(): void {
    
  }

}
