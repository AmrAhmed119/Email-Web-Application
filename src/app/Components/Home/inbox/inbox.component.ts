import { MailserviceService } from './../../../services/mailservice.service';
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

  constructor(private mailservice:MailserviceService) { }

  ngOnInit(): void {
    this.emails=this.mailservice.emails;
  }

  increment(event:any) {
      if(event.target.checked) {
        console.log(event.target.id)
      }
  }

}
