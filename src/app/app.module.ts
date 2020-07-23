import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { CardsComponent } from './components/Cards/project-cards/cards.component';
import {FormsModule} from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { CircleProgressComponent } from './components/circle-progress/circle-progress.component';
import { TooltipComponent } from './components/tooltip/tooltip.component'
import {NgCircleProgressModule} from 'ng-circle-progress';
import { LearnToCodeComponent } from './pages/learn-to-code/learn-to-code.component';
import { SignInComponent } from './pages/user/sign-in/sign-in.component';
import { SignUpComponent } from './pages/user/sign-up/sign-up.component';
import { InputWithIconComponent } from './components/form/input/input-with-icon/input-with-icon.component';
import { ButtonComponent } from './components/Buttons/button/button.component';
import { ButtonWithIconsComponent } from './components/Buttons/button-with-icons/button-with-icons.component';
import { PlaygroundsComponent } from './pages/playgrounds/playgrounds.component';
import { PlaygroundsListComponent } from './components/list/playgrounds-list/playgrounds-list.component';
import { OptionCardComponent } from './components/Cards/option-card/option-card.component';
@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    CardsComponent,
    NavbarComponent,
    WelcomeComponent,
    CircleProgressComponent,
    TooltipComponent,
    LearnToCodeComponent,
    SignInComponent,
    SignUpComponent,
    InputWithIconComponent,
    ButtonComponent,
    ButtonWithIconsComponent,
    PlaygroundsComponent,
    PlaygroundsListComponent,
    OptionCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgCircleProgressModule.forRoot({
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
