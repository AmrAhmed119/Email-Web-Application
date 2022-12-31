import { Component, OnInit } from '@angular/core';
import { MailserviceService } from 'app/services/mailservice.service';

@Component({
  selector: 'app-drafts',
  templateUrl: './drafts.component.html',
  styleUrls: ['./drafts.component.css']
})
export class DraftsComponent implements OnInit {

  constructor(private mailservice:MailserviceService) { }

  ngOnInit(): void {
  }

}
