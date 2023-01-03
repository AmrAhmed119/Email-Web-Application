import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from "../../../services/token-storage.service";
import {EmailService} from "../../../services/email.service";
import {ActivatedRoute} from "@angular/router";
import {MailService} from "../../../services/mail.service";
import {FileService} from "../../../services/file.service";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contacts = [
    {
      contact_id: "1",
      emails: "zeyad Ahmed",
      name: [
        "amr@gmai.com"
      ,
        "Help me in the project, pls i need help"
      ]
    }]


  popAdd = false;
  popDel = false;
  popEdit = false;

  constructor(private activatedroute:ActivatedRoute,
              private mailservice : MailService,
              private fileservice:FileService,
              private tokenStorageService : TokenStorageService,
              private emailService : EmailService) { }

  ngOnInit(): void {

    let user = this.tokenStorageService.getUser();
    this.contacts = user['contacts'];

    this.emailService.getAllContacts(user['user_id']).subscribe(data => {
      console.log(data);
    });


    console.log(this.contacts);
    /*
    get contacts
    this.contacts = cookie
    */

  }

  cancel() {
    this.popAdd=false;
    this.popDel=false;
    this.popEdit=false;
  }
  sort() {

    /*
    SEND REQUEST
    this.contacts = respnse
    */
    let user = this.tokenStorageService.getUser();

    this.emailService.getAllContacts(user['user_id']).subscribe(data => {
      let json = JSON.stringify(data);
      let ob = JSON.parse(json);
      this.contacts[0]['name'] = ob[0]['name'];
      this.contacts[0]['emails'] = ob[0]['emails']
      this.contacts[0]['contact_id'] = ob[0]['contact_id']

      console.log(this.contacts)
    });

    // const sorter2 = (sortBy : any) => (a : any, b : any) => a[sortBy].toLowerCase() > b[sortBy].toLowerCase() ? 1 : -1;
    // let arr = this.contacts.sort(sorter2('name'));
    // this.contacts = arr;

  }

  search() {
    let user = this.tokenStorageService.getUser();

    let element2 = document.getElementById('search') as HTMLInputElement;
    let searchText = element2.value;
    console.log(searchText)

    if(searchText != "") {
      /*
      REQUEST HERE
      this.contacts = response
      */


      this.emailService.searchInContacts(user['user_id'],'name',searchText).subscribe(data => {
        console.log(data)
        let json = JSON.stringify(data);
        let ob = JSON.parse(json);



      })


    }

    // let arr = [];
    // for(let i=0;i<this.contacts.length;i++) {
    //   if(this.contacts[i].name.includes(searchText)) {
    //     arr.push(this.contacts[i]);
    //   }
    // }
    // this.contacts = arr;
  }

  deleteContact() {
    this.popDel = true;
    this.popAdd=false;
    this.popEdit=false;
  }

  delete() {

    let element2 = document.getElementById('contact-number') as HTMLInputElement;
    let num = parseInt(element2.value);
    console.log(num)
    num--;
    if(num >= 0 && num < this.contacts.length) {

      /*
      REQUEST HERE
      this.contacts = response
      */
     this.contacts.splice(num,1);

    }

    this.popDel = false;
  }

  addContact() {
    this.popAdd = true;
    this.popDel=false;
    this.popEdit=false;
  }

  add() {

    let n = document.getElementById('contact-name') as HTMLInputElement;
    let e = document.getElementById('email-name') as HTMLInputElement;
    let contactName = n.value;
    let contactEmail = e.value;
    console.log(contactName)
    console.log(contactEmail)

    if(contactName != "" && contactEmail != "") {
      /*
      REQUEST HERE
      this.contacts = response
      */
      // this.contacts.push({
      //   "id" : "1",
      //   "name" : contactName,
      //   "lights" : [contactEmail]
      // })
    }

    this.popAdd = false;

  }

  editContact() {
    this.popEdit = true;
    this.popAdd=false
    this.popDel=false;
  }

  edit() {

    let n = document.getElementById('contact-numberr') as HTMLInputElement;
    let e = document.getElementById('contact-rename') as HTMLInputElement;
    let f = document.getElementById('contact-addEmail') as HTMLInputElement;
    let g = document.getElementById('contact-remove') as HTMLInputElement;
    let contactNumber = parseInt(n.value);
    let contactRename = e.value;
    let contactAddEmail = f.value;
    let emailNumber = parseInt(g.value);
    console.log(contactNumber)
    console.log(contactRename)
    console.log(contactAddEmail)
    console.log(emailNumber)
    contactNumber--;
    emailNumber--;

    if(contactRename != "") {
      /*
      RQUEST HERE
      */
      // this.contacts[contactNumber].name = contactRename;
    }

    if(contactAddEmail != "") {
      /*
      REQUEST HERE
      */
      // this.contacts[contactNumber].emails.push(contactAddEmail);
    }

    if(emailNumber >=0 && emailNumber<this.contacts[contactNumber].emails.length) {
      /**
       * REQUEST HERE
       */
      // this.contacts[contactNumber].lights.splice(emailNumber,1)
    }

    this.popEdit = false;
  }

}
