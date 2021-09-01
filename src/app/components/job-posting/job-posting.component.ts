import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { JobPostingModel } from 'src/app/models/jobPostingModel';
import { AuthService } from 'src/app/services/auth.service';
import { JobPostingService } from 'src/app/services/job-posting.service';

@Component({
  selector: 'app-job-posting',
  templateUrl: './job-posting.component.html',
  styleUrls: ['./job-posting.component.css']
})
export class JobPostingComponent implements OnInit {
  jobPostingArray:JobPostingModel[];
  panelOpenState = false;
  constructor(private jobPostingService:JobPostingService,private toastrService:ToastrService,private authService:AuthService) { }

  ngOnInit(): void {
    this.getUserAppliedJobPostings(this.authService.id)
  }
  getUserAppliedJobPostings(id:number) {
    this.jobPostingService.getJobPostingAppliedByUserId(id).subscribe((response)=>{
      this.jobPostingArray=response.data;
      this.toastrService.success(response.message);
    })
  }
 }
 