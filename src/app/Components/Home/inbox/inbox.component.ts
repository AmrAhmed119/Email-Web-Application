import { MailserviceService } from './../../../services/mailservice.service';
import { Component, OnInit } from '@angular/core';
import { Email } from 'app/email';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {

  emails : Email[] = [];
  selectedEmails : Email[] = [];
  folderNames : string[] = ["games","friends","relatives","assignments"];
  diselect : boolean = false;

  constructor(private mailservice:MailserviceService) { }

  ngOnInit(): void {
    this.emails=this.mailservice.emails;
    this.selectedEmails = []
    this.diselect = false;

    /*
    SEND REQUEST HERE
    send -> nothing
    receive -> list of emails
    this.emails = response
    */

    /*
    SEND REQUEST HERE
    send -> nothing
    receive -> list of folder names
    this.folderNames = response
    */

  

  }

  newest() {

    /*
    SEND REQUEST HERE 
    get emails sorted bt date from newest to oldest
    send -> nothing
    receive -> list of emails sorted by date
    this.emails = response
    */

  }

  priority() {

    /*
    SEND REQUEST HERE 
    get emails sorted bt date from newest to oldest
    send -> nothing
    receive -> list of emails sorted by date
    this.emails = response
    */

  }

  pagPrev() {

    /*
    SEND REQUEST HERE 
    get the previous 12 emails 
    send -> nothing
    receive -> list of emails
    this.emails = response
    */

  }

  pagNext() {

    /*
    SEND REQUEST HERE 
    get the previous 12 emails 
    send -> nothing
    receive -> list of emails
    this.emails = response
    */

  }

  addEmail(event : any) {
    /* HAS NO REQUEST */
    let id = event.target.id;
    if(event.target.checked === true) {
      let found = this.emails.find((obj) => {
        return obj.id == id;
      });
      this.selectedEmails.push(found!);
    }
    else {
      let found = this.emails.find((obj) => {
        return obj.id == id;
      });
      let index = this.selectedEmails.indexOf(found!);
      this.selectedEmails.splice(index,1);
    }

  }

  toggleBg(event : any) {
    /* HAS NO REQUEST */
    let ob = event.target;
    if(ob.checked === true) {
      document.getElementsByName(event.target.id)[0].style.background = "#ececed";
    }
    else {
      document.getElementsByName(event.target.id)[0].style.background = "#ffffff";
    }

  }

  selectAll() {
    /* HAS NO REQUEST */
    if( this.diselect === false) {
      this.diselect = true;
      this.selectedEmails = [];
      for(let i=0;i<this.emails.length;i++) {
        let id = this.emails[i].id;
        if(id != undefined) {
          let checkbox = document.getElementById(id.toString()) as HTMLInputElement | null;
          if(checkbox != null) {
            checkbox.checked = true;
            this.selectedEmails.push(this.emails[i]);
          }
        }
      }
    }
    else {
      this.diselect = false;
      this.selectedEmails = [];
      for(let i=0;i<this.emails.length;i++) {
        let id = this.emails[i].id;
        if(id != undefined) {
          let checkbox = document.getElementById(id.toString()) as HTMLInputElement | null;
          if(checkbox != null) {
            checkbox.checked = false;
          }
        }
      }      
    }

  }

  delete() {

    /*
    SEND REQUEST HERE 
    send -> list of emails (or emails id only if applicable)
    receive -> list of emails
    this.emails = response
    */   

  }

  moveToFolder(event : any) {
    let btn = event.target as HTMLButtonElement;
    let name = btn.innerHTML;

    /*
    SEND REQUEST HERE 
    send -> selectedEmails, name
    receive -> list of emails
    this.emails = response
    */

  }

  search() {

    let element1 = document.querySelector('#by') as HTMLInputElement;
    let element2 = document.getElementById('search') as HTMLInputElement;
    let searchBy = element1.value;
    let searchText = element2.value;

    /*
    SEND REQUEST HERE 
    send -> searchText, searchBy
    receive -> list of emails
    this.emails = response
    */

  }

  sort() {

    let element1 = document.querySelector('#by') as HTMLInputElement;
    let sortBy = element1.value;
    
    /*
    SEND REQUEST HERE 
    send -> sortBy
    receive -> list of emails
    this.emails = response
    */


  }
}
