import { Component, OnInit } from '@angular/core';
import { MailService } from 'app/services/mail.service';

@Component({
  selector: 'app-composite',
  templateUrl: './composite.component.html',
  styleUrls: ['./composite.component.css']
})
export class CompositeComponent implements OnInit {



  constructor(private mailservice : MailService) { }

  ngOnInit(): void {
  }

  send() {

    let t = document.getElementById('to') as HTMLInputElement;
    let s = document.getElementById('search') as HTMLInputElement;
    let m = document.getElementById('message') as HTMLInputElement;
    let p = document.querySelector('#by') as HTMLInputElement;

  }

  draft() {

  }

  discard() {

  }

}
function ngOnInit() {
  throw new Error('Function not implemented.');
}

function send() {
  throw new Error('Function not implemented.');
}

