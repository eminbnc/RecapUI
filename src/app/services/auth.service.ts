import { Injectable } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  jwtHelper:any = new JwtHelperService();
  decodedToken:any;
  id:number;
  constructor() { }

  loggedIn(){
    const token=localStorage.getItem("token");
    return !this.jwtHelper.isTokenExpired(token);
  }
  loggedInDeveloper(){
    if(this.loggedIn()){
      const claim=localStorage.getItem("claim");
      if(claim?.toString()==="developer"){ return true}
    else return false
    }
    return false;
  }

  loggedInCompany(){
    if(this.loggedIn()){
      const claim=localStorage.getItem("claim");
      if(claim?.toString()==="company"){ return true}
    else return false
    }
    return false;
  }
}
