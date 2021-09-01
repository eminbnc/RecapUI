import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JobPostingAddModel } from '../models/JobPostingAddModel';
import { JobPostingModel } from '../models/jobPostingModel';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class JobPostingService {
  path:string='https://localhost:44317/api/';
  constructor(private httpClient:HttpClient) { }

  add(jobPostingModel:JobPostingAddModel){
    let path=this.path+"JobPostigs";
    return this.httpClient.post<ResponseModel>(path,jobPostingModel);
  }
  getJobPostingAppliedByUserId(id:number){
    let path=this.path+"JobPostigs/"+id;
    return this.httpClient.get<ListResponseModel<JobPostingModel>>(path);
  }
  getAllJobPosting(){
    let path=this.path+"JobPostigs";
    return this.httpClient.get<ListResponseModel<JobPostingModel>>(path);
  }

}
