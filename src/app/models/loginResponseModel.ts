import { ResponseModel } from "./responseModel";

export interface LoginResponseModel extends ResponseModel{
  userId:number,
  claim:string

}