import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./../sign_in_and_sign_up.sass']

})
export class SignUpComponent implements OnInit {

  email={
    placeholder:'Your Email',
    icon:'Email',
    type:'email',
    name:'email'
  }
  password={
    placeholder:'You password',
    icon:'Password',
    type:'password',
    name:'password'
  }

  buttonFacebook={
    text:'CONNECT WITH FACEBOOK',
    background:'#3a579d',
    icon:'Facebook'
  }
  buttonApple={
    text:'CONNECT WITH APPLE',
    background:'#3a579d',
    icon:'Apple'
  }
  buttonGoogle={
    text:'CONNECT WITH GOOGLE',
    background:'#3a579d',
    icon:'Google'
  }
  buttonRegister={
    text:'SIGN UP',
    type:'submit'
  }

  constructor() { }

  Sign_up : FormGroup
  ngOnInit(): void {
    // this.Sign_up = new FormGroup({
    //   email: new FormControl('',{

    //   })
    // })
  }
  onSubmit(form : FormControl) : void{
    console.log(this.valueEmail)
    console.log(this.valuePassword)
  }

  valueEmail : string=""
  valuePassword : string=""

  getEmail(value){
    this.valueEmail=value
  }
  getPassword(value){
    this.valuePassword = value
  }
}
