import { Component, OnInit } from '@angular/core';
import { Email } from 'src/app/email';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {

  emails : Email[] = [];
  checkId = 0;
  
  constructor() { }

  ngOnInit(): void {

    let msg : string = "Hello Mohamed, How are you now!, we are having alot of assignments and i can't handle it so help me if you can help me i need it please to ";
    this.emails.push(new Email("asd@gmail.com","Amr Ahmed","MohamedAnwar@gmail.com","25 Dec",msg))
    this.emails.push(new Email("asd@gmail.com","Amr Ahmed","MohamedAnwar@gmail.com","25 Dec",msg))
    this.emails.push(new Email("asd@gmail.com","Amr Ahmed","MohamedAnwar@gmail.com","25 Dec",msg))
    this.emails.push(new Email("asd@gmail.com","Amr Ahmed","MohamedAnwar@gmail.com","25 Dec",msg))
    this.emails.push(new Email("asd@gmail.com","Amr Ahmed","MohamedAnwar@gmail.com","25 Dec",msg))
    this.emails.push(new Email("asd@gmail.com","Amr Ahmed","MohamedAnwar@gmail.com","25 Dec",msg))
    this.emails.push(new Email("asd@gmail.com","Amr Ahmed","MohamedAnwar@gmail.com","25 Dec",msg))
    this.emails.push(new Email("asd@gmail.com","Amr Ahmed","MohamedAnwar@gmail.com","25 Dec",msg))
    this.emails.push(new Email("asd@gmail.com","Amr Ahmed","MohamedAnwar@gmail.com","25 Dec",msg))
    this.emails.push(new Email("asd@gmail.com","Amr Ahmed","MohamedAnwar@gmail.com","25 Dec",msg))
    this.emails.push(new Email("asd@gmail.com","Amr Ahmed","MohamedAnwar@gmail.com","25 Dec",msg))
    this.emails.push(new Email("asd@gmail.com","Amr Ahmed","MohamedAnwar@gmail.com","25 Dec",msg))
  }

}
