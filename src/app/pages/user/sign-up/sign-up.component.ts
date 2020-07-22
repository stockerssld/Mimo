import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./../sign_in_and_sign_up.sass']

})
export class SignUpComponent implements OnInit {

  email={
    placeholder:'Your Email',
    icon:'Email',
    type:'text'
  }
  password={
    placeholder:'You password',
    icon:'Password',
    type:'password'
  }

  buttonFacebook={
    text:'CONTINUE WITH FACEBOOK',
    background:'#3a579d',
    icon:'Facebook'
  }
  buttonApple={
    text:'CONTINUE WITH APPLE',
    background:'#3a579d',
    icon:'Apple'
  }
  buttonGoogle={
    text:'CONTINUE WITH GOOGLE',
    background:'#3a579d',
    icon:'Google'
  }
  buttonLogin={
    text:'SIGN UP',
  }

  constructor() { }

  ngOnInit(): void {
  }

}
