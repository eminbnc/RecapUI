import { LoginResponseModel } from "./loginResponseModel";

export interface SingleLoginResponseModel<T> extends LoginResponseModel{
    data:T
}