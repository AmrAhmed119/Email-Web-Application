import { Component, OnInit } from '@angular/core';
import { Email } from 'src/app/email';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {

  emails : Email[] = [];
  checkId = "0";

  constructor() { }

  ngOnInit(): void {

    let msg : string = "Hello Mohamed, How are you now!, we are having alot of assignments and i can't handle it so help me if you can help me i need it please to ";
    this.emails.push(new Email("asd@gmail.com","Amr Ahmed","MohamedAnwar@gmail.com","25 Dec",msg,1))
    this.emails.push(new Email("asd@gmail.com","Amr Ahmed","MohamedAnwar@gmail.com","25 Dec",msg,2))
    this.emails.push(new Email("asd@gmail.com","Amr Ahmed","MohamedAnwar@gmail.com","25 Dec",msg,3))
    this.emails.push(new Email("asd@gmail.com","Amr Ahmed","MohamedAnwar@gmail.com","25 Dec",msg,4))
    this.emails.push(new Email("asd@gmail.com","Amr Ahmed","MohamedAnwar@gmail.com","25 Dec",msg,5))
    this.emails.push(new Email("asd@gmail.com","Amr Ahmed","MohamedAnwar@gmail.com","25 Dec",msg,6))
    this.emails.push(new Email("asd@gmail.com","Amr Ahmed","MohamedAnwar@gmail.com","25 Dec",msg,7))
    this.emails.push(new Email("asd@gmail.com","Amr Ahmed","MohamedAnwar@gmail.com","25 Dec",msg,8))
    this.emails.push(new Email("asd@gmail.com","Amr Ahmed","MohamedAnwar@gmail.com","25 Dec",msg,9))
    this.emails.push(new Email("asd@gmail.com","Amr Ahmed","MohamedAnwar@gmail.com","25 Dec",msg,10))
    this.emails.push(new Email("asd@gmail.com","Amr Ahmed","MohamedAnwar@gmail.com","25 Dec",msg,11))
    this.emails.push(new Email("asd@gmail.com","Amr Ahmed","MohamedAnwar@gmail.com","25 Dec",msg,12))
  }

  increment(event:any) {
      if(event.target.checked) {
        console.log(event.target.id)
      }
  }

}
