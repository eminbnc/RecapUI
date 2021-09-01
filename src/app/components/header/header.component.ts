import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { JwtHelperService } from "@auth0/angular-jwt";
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  jwtHelper:any = new JwtHelperService();
  decodedToken:any;
  constructor(private toastrService:ToastrService,private authService:AuthService) { }

  ngOnInit(): void {
  }

  loggedIn(){
   return this.authService.loggedIn();
  }
  logout(){
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("claim");
    this.toastrService.info("Çıkış işlemi yapıldı");
  }
  isDeveloper(){
     const claim=localStorage.getItem("claim");
    if(claim?.toString()==="developer"){ return true}
    else return false
  }
  isCompany(){
    const token=localStorage.getItem("claim");
    if(token=="company"){ return true}
    else return false
   
  }

}
