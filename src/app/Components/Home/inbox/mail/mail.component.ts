import { Email } from './../../../../email';
import { MailserviceService } from './../../../../services/mailservice.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent implements OnInit {
  email?:Email
  emailid?:string|null
  emails:Email[]=[]

  constructor(private activatedroute:ActivatedRoute,private mailservice:MailserviceService) { }

  ngOnInit(): void {
    this.emailid=this.activatedroute.snapshot.paramMap.get("id");
    this.email=this.mailservice.emails.find(x=> x.id==this.emailid);
    this.emails=this.mailservice.emails
    this.emails=this.emails.filter(x=> x.id!=this.emailid)
    console.log(this.email);
    console.log(this.emails);
  }
}
