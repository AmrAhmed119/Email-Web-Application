import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  
  contacts = [
    { 
      id: "1",
      name: "zeyad Ahmed",
      lights: [
        "amr@gmai.com"
      ,
        "Help me in the project, pls i need help"
      ]
    },
    { 
      id: "1",
      name: "Amr Ahmed",
      lights: [
        "amr@gmai.com"
      ,
        "Help me in the project, pls i need help"
      ]
    },
  {
    id: "2",
    name: "Hussien belal",
    lights: [
"Help me in the project, pls i need help"    
,
"Help me in the project, pls i need help"    ]
  },
  {
    id: "3",
    name: "Mohamed Ahmed",
    lights: [
"Help me in the project, pls i need help"    ,
"Help me in the project, pls i need help",
"hello there",
"heloooooooooooooooooooooooooooooooooooo",   
"heloooooooooooooooooooooooooooooooooooo"   ]
  },
  {
    id: "4",
    name: "Mohamed Ahmed",
    lights: [
"Help me in the project, pls i need help"    ,
"Help me in the project, pls i need help"    ]
  }
  
];

  popAdd = false;
  popDel = false;
  popEdit = false;

  constructor() { }

  ngOnInit(): void {

    /*
    get contacts
    this.contacts = cookie
    */

  }

  sort() {

    /*
    SEND REQUEST 
    this.contacts = respnse
    */
    
    const sorter2 = (sortBy : any) => (a : any, b : any) => a[sortBy].toLowerCase() > b[sortBy].toLowerCase() ? 1 : -1;
    let arr = this.contacts.sort(sorter2('name'));
    this.contacts = arr;

  }

  search() {
    let element2 = document.getElementById('search') as HTMLInputElement;
    let searchText = element2.value;
    console.log(searchText)

    if(searchText != "") {
      /*
      REQUEST HERE
      this.contacts = response
      */

      let arr = [];
      for(let i=0;i<this.contacts.length;i++) {
        if(this.contacts[i].name.includes(searchText)) {
          arr.push(this.contacts[i]);
        }
      }
      this.contacts = arr;
      element2.value = ""

    }
    
  }

  deleteContact() {
    this.popDel = true;
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
      this.contacts.push({
        "id" : "1",
        "name" : contactName,
        "lights" : [contactEmail]
      })
    }

    this.popAdd = false;
    
  }

  editContact() {
    this.popEdit = true;
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
      this.contacts[contactNumber].name = contactRename;
    }

    if(contactAddEmail != "") {
      /*
      REQUEST HERE
      */
      this.contacts[contactNumber].lights.push(contactAddEmail);
    }

    if(emailNumber >=0 && emailNumber<this.contacts[contactNumber].lights.length) {
      /**
       * REQUEST HERE
       */
      this.contacts[contactNumber].lights.splice(emailNumber,1)
    }

    this.popEdit = false;
  }

}