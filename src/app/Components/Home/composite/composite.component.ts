import { Component, OnInit } from '@angular/core';
import { MailserviceService } from 'app/services/mailservice.service';

@Component({
  selector: 'app-composite',
  templateUrl: './composite.component.html',
  styleUrls: ['./composite.component.css']
})
export class CompositeComponent implements OnInit {

  

  constructor(private mailservice : MailserviceService) { }

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

