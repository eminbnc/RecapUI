import { Component,OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { JwtHelperService } from "@auth0/angular-jwt";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'RecapUI';
  id:number;
  jwtHelper:any = new JwtHelperService();
  constructor(private authService:AuthService){

  }

  ngOnInit(){
   var id=localStorage.getItem("user");
   if(id){
     this.authService.id=Number(localStorage.getItem("user"));
   }
  }
}
