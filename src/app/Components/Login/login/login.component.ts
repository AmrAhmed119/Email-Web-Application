import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route : Router) { }

  ngOnInit(): void {

    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    signUpButton?.addEventListener('click', () => {
    container?.classList.add("right-panel-active");
    });

    signInButton?.addEventListener('click', () => {
    container?.classList.remove("right-panel-active");
    });
    
  }

  signin() {

    let username = (<HTMLInputElement> document.getElementById("username")).value;
    let password = (<HTMLInputElement> document.getElementById("password")).value;

    console.log(username)
    console.log(password)

    
    /*
    SEND REQUEST WITH THE USERNAME AND PASSWORD AND VALIDATE THE ACCOUNT
    RETYRN YES OR NO.
    */

    //F YES 
    this.route.navigate(['/home']);

    //IF NO DO NOTHING 
    //alert("There is no account by such credintials");

  }

  signup() {

    let name = (<HTMLInputElement> document.getElementById("name")).value;
    let email = (<HTMLInputElement> document.getElementById("email")).value;
    let pw = (<HTMLInputElement> document.getElementById("pw")).value;

    console.log(name)
    console.log(email)
    console.log(pw)

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
