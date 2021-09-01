import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { JobPostingModel } from 'src/app/models/jobPostingModel';
import { JobPostingService } from 'src/app/services/job-posting.service';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  panelOpenState = false;
  jobPostingArray:JobPostingModel[];
  id:number;
  
  constructor(private toastrService:ToastrService,private jobPostingService:JobPostingService,
    private activatedRoute:ActivatedRoute,private auth:AuthService) { }

  ngOnInit(): void {
    this.getAllJobPostings();
  }
  getAllJobPostings() {
    this.jobPostingService.getAllJobPosting().subscribe((response)=>{
      this.jobPostingArray=response.data;
      this.toastrService.success(response.message);
    })
 }
}
