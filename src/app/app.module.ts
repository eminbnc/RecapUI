import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms"
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { ToastrModule } from 'ngx-toastr';
import {MatCheckboxModule} from '@angular/material/checkbox';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import { RegisterComponent } from './components/register/register.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { CompanyProfileComponent } from './components/company-profile/company-profile.component';
import { JobPostingComponent } from './components/job-posting/job-posting.component';
import { CompanyPageComponent } from './components/company-page/company-page.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { AuthUserGuard } from './_guards/auth-user-guard';
import { AuthCompanyGuard } from './_guards/auth-company-guard';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule} from '@angular/material/core';
import { UserResumeComponent } from './components/user-resume/user-resume.component';
import {PdfViewerModule} from 'ng2-pdf-viewer'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    UserProfileComponent,
    CompanyProfileComponent,
    JobPostingComponent,
    CompanyPageComponent,
    UserResumeComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    }),
    HttpClientModule,
    MatInputModule,
    MatTableModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatSidenavModule,
    MatMenuModule,
    MatNativeDateModule,
    PdfViewerModule

  ],
  providers: [{
    provide:"apiUrl",useValue:"https://localhost:44317/api/"
  },
{
 provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true
},
AuthUserGuard,
AuthCompanyGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
