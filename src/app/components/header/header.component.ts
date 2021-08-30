import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private toastrService:ToastrService) { }

  ngOnInit(): void {
  }

  loggedIn(){
    const token=localStorage.getItem("token");
    return token?true:false;
  }
  logout(){
    localStorage.removeItem("token");
    this.toastrService.info("Çıkış işlemi yapıldı");
  }
  isDeveloper(){
     const claim=localStorage.getItem("claim");
     console.log("-------------------------------------")
    if(claim?.toString()==="developer"){ return true}
    else return false
  }
  isCompany(){
    const token=localStorage.getItem("claim");
    console.log("-----------")
    if(token=="company"){ return true}
    else return false
   
  }

}
