import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './pages/projects/projects.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { LearnToCodeComponent } from './pages/learn-to-code/learn-to-code.component';



const routes: Routes = [
  {path:'projects', component: ProjectsComponent },
  {path:'**', component: WelcomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
