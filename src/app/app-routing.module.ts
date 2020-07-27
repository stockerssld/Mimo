import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './pages/projects/projects.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { SignInComponent } from './pages/user/sign-in/sign-in.component';
import { SignUpComponent } from './pages/user/sign-up/sign-up.component';
import { PlaygroundsComponent } from './pages/playgrounds/playgrounds.component';
import { BlogComponent } from './pages/blog/blog.component';



const routes: Routes = [
  {path:'playgrounds', component: PlaygroundsComponent},
  {path:'projects', component: ProjectsComponent },
  {path:'blog', component: BlogComponent},
  {path:'login', component: SignInComponent},
  {path:'register', component: SignUpComponent},
  {path:'**', component: WelcomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
