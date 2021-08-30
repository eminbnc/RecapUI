import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserRegisterModel } from 'src/app/models/userRegisterModel';
import { CompanyService } from 'src/app/services/company.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  developerRegisterForm:FormGroup;
  companyRegisterForm:FormGroup;
  checked=false;
  registerDeveloperModeel:UserRegisterModel;
  constructor(private toastrService:ToastrService,private userService:UserService,
    private companyService:CompanyService,private formBuilder:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.createDeveloperRegisterForm();
    this.createCompanyRegisterForm();
  }


  createDeveloperRegisterForm() {
    this.developerRegisterForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      adress: ['', Validators.required],
      birthDate: ['', Validators.required],
      summaryInformation: ['', Validators.required],
    });
  }

  createCompanyRegisterForm() {
    this.companyRegisterForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      city: ['', Validators.required],
      district: ['', Validators.required],
      companyName: ['', Validators.required],
      taxAdministratationCity: ['', Validators.required],
      taxAdministratationDistrict:['', Validators.required],
      companyUrl: ['']

    });
  }

  registerDeveloperClick() {
    if (this.developerRegisterForm.valid) {
      this.registerDeveloperModeel=Object.assign({},this.developerRegisterForm.value);
      this.registerDeveloperModeel.visibility=this.checked;
      this.userService.register(this.registerDeveloperModeel).subscribe(response=>{
        this.toastrService.success(response.message);
        this.router.navigate(['login']);
      },responseError=>{
        console.log(responseError)
        if(responseError.error.length!=null){
          for(let i=0; i<responseError.error.Errors.length;i++){
            this.toastrService.error(responseError.error.Errors[i].ErrorMessage,"Doğrulama Hatası");
          }
        }
        else{
          this.toastrService.error(responseError.error.message);
        }
      })
    }
    else{
      this.toastrService.warning("Zorunlu Alanları lütfen Doldurun");
    }
  }
  registerCompanyClick() {
    if (this.companyRegisterForm.valid) {
      let registerModel=Object.assign({},this.companyRegisterForm.value);
      this.companyService.register(registerModel).subscribe(response=>{
        this.toastrService.success(response.message);
        this.router.navigate(['login']);
      },responseError=>{
        if(responseError.error.Errors.length!=0){
          for(let i=0; i<responseError.error.Errors.length;i++){
            this.toastrService.error(responseError.error.Errors[i].ErrorMessage,"Doğrulama Hatası");
          }
        }
        else{
          this.toastrService.error(responseError.error.message);
        }
      })
    }
    else{
      this.toastrService.warning("Zorunlu Alanları lütfen Doldurun");
    }
  }
}
