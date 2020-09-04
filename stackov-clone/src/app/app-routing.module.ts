import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { IndexComponent } from './index/index.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BrowseComponent } from './browse/browse.component';
import { QuestionComponent } from './question/question.component';
import { AnswerComponent } from './answer/answer.component';
import { LogoutComponent } from './logout/logout.component';
import { ForgotComponent } from './forgot/forgot.component';
import { ErrorComponent } from './error/error.component';
const routes: Routes = [
  {path:'login' , component : LoginComponent},
  {path:'signup' , component : SignupComponent},
  {path:'index' , component : IndexComponent},
  {path:'home' , component : HomeComponent},
  {path:'about' , component : AboutComponent},
  {path:'question' , component : QuestionComponent},
  {path:'answer' , component : AnswerComponent},
  {path:'browse' , component : BrowseComponent},
  {path:'logout' , component : LogoutComponent},
  {path: 'forgot', component:ForgotComponent},
  {path: 'error', component: ErrorComponent},
 



  /*
  {path:'browse' , component : BrowseComponent,
    children: [
      {path:'answer' , component : AnswerComponent},
    ]
  },

*/
  
  { path: '', redirectTo: '/home', pathMatch: 'full' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
