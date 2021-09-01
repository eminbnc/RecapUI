import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyPageComponent } from './components/company-page/company-page.component';
import { HomeComponent } from './components/home/home.component';
import { JobPostingComponent } from './components/job-posting/job-posting.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UserResumeComponent } from './components/user-resume/user-resume.component';

import { AuthCompanyGuard } from './_guards/auth-company-guard';
import { AuthUserGuard } from './_guards/auth-user-guard';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'jobposting',component:JobPostingComponent,canActivate:[AuthUserGuard]},
  {path:'companypage',component:CompanyPageComponent,canActivate:[AuthCompanyGuard]},
  {path:'resume',component:UserResumeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
