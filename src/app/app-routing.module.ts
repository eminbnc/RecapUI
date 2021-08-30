import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyPageComponent } from './components/company-page/company-page.component';
import { HomeComponent } from './components/home/home.component';
import { JobPostingComponent } from './components/job-posting/job-posting.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'jobposting',component:JobPostingComponent},
  {path:'companypage',component:CompanyPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
