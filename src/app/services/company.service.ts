import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from '../models/loginModel';
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
}
