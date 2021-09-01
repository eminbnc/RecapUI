import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { CompanyService } from 'src/app/services/company.service';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginFormDeveloper: FormGroup;
  loginFormCompany: FormGroup;
  constructor(private formBuilder: FormBuilder,private userService:UserService,private companyService:CompanyService,
    private toastrService:ToastrService,private router:Router,public authService:AuthService) { }

  ngOnInit(): void {
   this.createLoginDeveloperForm();
   this.createLoginCompanyForm();
  }

  createLoginDeveloperForm() {
    this.loginFormDeveloper = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  createLoginCompanyForm() {
    this.loginFormCompany = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  loginDeveloperClick() {
    if (this.loginFormDeveloper.valid) {
      let loginModel=Object.assign({},this.loginFormDeveloper.value);
      this.userService.login(loginModel).subscribe(response=>{
        this.toastrService.success(response.message);
        console.log(this.authService.decodedToken);
        localStorage.setItem("token",response.data.token);
        localStorage.setItem("user" , response.userId.toString())
        localStorage.setItem("claim" ,response.claim)
        this.router.navigate(['']);
      },responseError=>{
        if(responseError.error.Errors.length>0){
          console.log(responseError.error.Errors);
          for(let i=0; i<responseError.error.Errors.length;i++){
            this.toastrService.error(responseError.error.Errors[i].ErrorMessage,"Doğrulama Hatası");
          }
        }
      })
    }
    else{
      this.toastrService.warning("Zorunlu Alanları lütfen Doldurun");
    }
  }
  loginCompanyClick() {
    if (this.loginFormCompany.valid) {
      let loginModel=Object.assign({},this.loginFormCompany.value);
      this.companyService.login(loginModel).subscribe(response=>{
        this.toastrService.success(response.message);
        localStorage.setItem("token",response.data.token);
        localStorage.setItem("user" , response.userId.toString())
        localStorage.setItem("claim" ,response.claim),
        this.router.navigate(['']);
      })
    }
  }
}
