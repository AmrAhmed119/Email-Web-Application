import { Component, OnInit } from '@angular/core';
import { Email } from 'src/app/email';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {

  emails : Email[] = [];         //list of emails to be displayed
  selectedEmails : Email[] = []  //list of selected emails upon checkbox
  checkId = "0";                 //id of checkboxes besides emails
  load = false;                  //loading screen
  selecting = true;              //selecting mode

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

  }

  toggleBg(event : any) {
    let ob = event.target;
    if(ob.checked === true) {
      document.getElementsByName(event.target.id)[0].style.background = "#ececed";
    }
    else {
      document.getElementsByName(event.target.id)[0].style.background = "#ffffff";
    }
  }

  newestEmails() {
    /*
      REQUEST HERE
      get emails

    */

  }

  priorityEmails() {

    /*
      REQUEST HERE
      get emails
      
    */

  }

  addEmail(event : any) {
    if(event.target.checked === true) {
        let id = event.target.id;
        const found = this.emails.find((obj) => {
          return obj.id == id;
        });
        this.selectedEmails.push(found!);
    }
  }

  delete() {
    let x = document.getElementById("bg");
    this.load = true;
    if(x != undefined) {
      x.style.background = "#E5E7E9";
    }
    setTimeout(()=>{
      for(let i=0;i<this.selectedEmails.length;i++) {
        this.emails=this.emails.filter(x=> x.id!=this.selectedEmails[i].id)
      }
      this.load = false;
      if(x != undefined) {
        x.style.background = "transparent";
      }
    }, 1000); 
    
  }

  selectAll() {
    
    for(let i=0;i<this.emails.length;i++) {
      let id = this.emails[i].id;
      if(id != undefined) {
        let checkbox = document.getElementById(id.toString()) as HTMLInputElement | null;
        if(checkbox != null) {
          checkbox.checked = false;
        }
      }
    }

    for(let i=0;i<this.emails.length;i++) {
      let id = this.emails[i].id;
      if(id != undefined) {
        let checkbox = document.getElementById(id.toString()) as HTMLInputElement | null;
        if(checkbox != null) {
          if(checkbox.checked === true) {
            checkbox.checked = false;
            this.selectedEmails.pop();
          }
          else {
            checkbox.checked = true;
            this.selectedEmails.push(this.emails[i]);
          }
        }
      }
    }
  }

}
