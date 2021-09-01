import { Component, OnInit } from '@angular/core';
import { ResumeModel } from 'src/app/models/reumeModel';
import { AuthService } from 'src/app/services/auth.service';
import { ResumeService } from 'src/app/services/resume.service';

@Component({
  selector: 'app-user-resume',
  templateUrl: './user-resume.component.html',
  styleUrls: ['./user-resume.component.css']
})
export class UserResumeComponent implements OnInit {
  resumeModel:ResumeModel[];
  constructor(private resumeService:ResumeService, private authService:AuthService) { }

  ngOnInit(): void {
    this.getUserResume(this.authService.id);
  }
  getUserResume(id:number){
    this.resumeService.getResumesByUserId(id).subscribe((response)=>{
     this.resumeModel=response.data;
    })
  }
}
