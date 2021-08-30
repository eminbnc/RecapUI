import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { ListResponseModel } from '../models/listResponseModel';
import { LoginModel } from '../models/loginModel';
import { ResponseModel } from '../models/responseModel';
import { SingleLoginResponseModel } from '../models/singleLoginResponseModel';
import { TokenModel } from '../models/tokenModel';
import { UserModel } from '../models/userModel';
import { UserRegisterModel } from '../models/userRegisterModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }

  login(loginModel:LoginModel){
    let path='https://localhost:44317/api/'+"users/login";
    return this.httpClient.post<SingleLoginResponseModel<TokenModel>>(path,loginModel);
  }
  register(registerModel:UserRegisterModel){
    let path='https://localhost:44317/api/'+"users";
    return this.httpClient.post<ResponseModel>(path,registerModel);
  }
  getAccessibleUsers(){
    let path='https://localhost:44317/api/'+"users";
    return this.httpClient.get<ListResponseModel<UserModel>>(path);
  }
}
