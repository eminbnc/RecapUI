import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CompanyRegisterModel } from '../models/companyRegisterModel';
import { LoginModel } from '../models/loginModel';
import { ResponseModel } from '../models/responseModel';
import { SingleLoginResponseModel } from '../models/singleLoginResponseModel';
import { TokenModel } from '../models/tokenModel';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private httpClient:HttpClient) { }
   
  login(loginModel:LoginModel){
    let path='https://localhost:44317/api/'+"companies/login";
    return this.httpClient.post<SingleLoginResponseModel<TokenModel>>(path,loginModel);
  }
  register(registerModel:CompanyRegisterModel){
    let path='https://localhost:44317/api/'+"companies";
    return this.httpClient.post<ResponseModel>(path,registerModel);
  }
}
