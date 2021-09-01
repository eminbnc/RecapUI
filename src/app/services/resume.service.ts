import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModel } from '../models/listResponseModel';
import { ResumeModel } from '../models/reumeModel';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {
  path:string='https://localhost:44317/api/';
  constructor(private httpClient:HttpClient) { }

  getResumesByUserId(id:number){
    let path=this.path+"Resumes/"+id;
    return this.httpClient.get<ListResponseModel<ResumeModel>>(path);
  }

}
