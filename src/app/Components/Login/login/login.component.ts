import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signupform!:FormGroup;
  signinform!:FormGroup;





  constructor(private route : Router) { }

  ngOnInit(): void {
    this.signupform=new FormGroup({
      name:new FormControl('',Validators.required),
      email:new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',Validators.required),
    });
    this.signinform=new FormGroup({
      email:new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',Validators.required),
    })
    this.signinform.get('email')?.valueChanges.subscribe((value)=>{
      console.log(value);
    });
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    signUpButton?.addEventListener('click', () => {
    container?.classList.add("right-panel-active");
    // this.signinform.reset();
    // this.signupform.reset();
    });

    signInButton?.addEventListener('click', () => {
    container?.classList.remove("right-panel-active");
    // this.signinform.reset();
    // this.signupform.reset();
    });
    
  }

  signin() {

    // let username = (<HTMLInputElement> document.getElementById("username")).value;
    // let password = (<HTMLInputElement> document.getElementById("password")).value;

    // console.log(username)
    // console.log(password)
    console.log(this.signinform);
    console.log(this.signinform.value.email);
    console.log(this.signinform.get('email'));

    console.log(this.signinform.status);
    /*
    SEND REQUEST WITH THE USERNAME AND PASSWORD AND VALIDATE THE ACCOUNT
    RETYRN YES OR NO.
    */

    //F YES 
    this.route.navigate(['/home/inbox']);

    //IF NO DO NOTHING 
    //alert("There is no account by such credintials");

  }

  signup() {


    console.log(this.signupform);
    this.route.navigate(['/home/inbox']);
    // let name = (<HTMLInputElement> document.getElementById("name")).value;
    // let email = (<HTMLInputElement> document.getElementById("email")).value;
    // let pw = (<HTMLInputElement> document.getElementById("pw")).value;

    // console.log(name)
    // console.log(email)
    // console.log(pw)

    /*
    SEND REQUEST WITH THE USERNAME AND PASSWORD AND VALIDATE THE ACCOUNT
    RETYRN YES OR NO.
    */

    //F YES 
    //this.route.navigate(['/home']);

    //IF NO DO NOTHING 
    //alert("There is no account by such credintials");

  }

}
