import {Component, DoCheck, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Email} from 'app/email';
import { EmailService } from 'app/services/email.service';
import { MailService } from 'app/services/mail.service';
import { TokenStorageService } from 'app/services/token-storage.service';
import { UserDetailsService } from 'app/services/user-details.service';
@Component({
  selector: 'app-foldermails',
  templateUrl: './foldermails.component.html',
  styleUrls: ['./foldermails.component.css']
})
export class FoldermailsComponent implements OnInit {
  user : any;
  emails: Email[] = [];
  selectedEmails: Email[] = [];
  folderNames: string[] = [];
  diselect: boolean = false;
  index: any = 0
  foldername:any;

  constructor(private mailService: MailService,
              private userDetails: UserDetailsService,
              private emailService: EmailService,
              private tokenStorageService : TokenStorageService,
              private activatedroute:ActivatedRoute) {}

  ngOnInit(): void {

    this.selectedEmails = []
    this.diselect = false;
    this.foldername=this.activatedroute.snapshot.paramMap.get("name");
    console.log(this.foldername);
    // this.emails=this.mailService.emails.find(x=> x.mail_id==this.foldername);
    // this.emails=this.mailservice.emails;
    // this.user = this.tokenStorageService.getUser();
    /*let userEmail = this.tokenStorageService.decodeToken()["email"]
    this.userDetails.client.email = userEmail;*/

    // this.folderNames = this.user["custom_folders"];
    // this.emailService.getInbox(this.user["email"], "0").subscribe(data => {
    //   let arr = data as Email[]
    //   this.emails = arr;
    // });
    // this.mailService.emails = this.emails;

  }

  newest() {

    this.emailService.getInboxSortedBy(this.user["email"],"0","sended_at").subscribe( data => {
      let arr = data as Email[];
      this.emails = arr;
    })
  }

  priority() {

    this.emailService.getInboxSortedBy(this.user["email"],"0","priority").subscribe( data => {
      let arr = data as Email[];
      this.emails = arr;
    })

  }

  pagPrev() {

    this.index = Math.max(0, this.index - 1)
    this.emailService.getInbox(this.user["email"], (this.index*12).toString()).subscribe(data => {
      let arr = data as Email[]
      this.emails = arr;
    });

  }

  pagNext() {

    this.index = Math.max(0, this.index + 1)
    this.emailService.getInbox(this.user["email"], (this.index*12).toString()).subscribe(data => {
      let arr = data as Email[]
      this.emails = arr;
    });

  }

  addEmail(event: any) {

    let id = event.target.id;
    if (event.target.checked === true) {
      let found = this.emails.find((obj) => {
        return obj.mail_id == id;
      });
      this.selectedEmails.push(found!);
    } else {
      let found = this.emails.find((obj) => {
        return obj.mail_id == id;
      });
      let index = this.selectedEmails.indexOf(found!);
      this.selectedEmails.splice(index, 1);
    }

  }

  toggleBg(event: any) {

    let ob = event.target;
    if (ob.checked === true) {
      document.getElementsByName(event.target.id)[0].style.background = "#ececed";
    } else {
      document.getElementsByName(event.target.id)[0].style.background = "#ffffff";
    }

  }

  selectAll() {

    if (this.diselect === false) {
      this.diselect = true;
      this.selectedEmails = [];
      for (let i = 0; i < this.emails.length; i++) {
        let id = this.emails[i].mail_id;
        if (id != undefined) {
          let checkbox = document.getElementById(id.toString()) as HTMLInputElement | null;
          if (checkbox != null) {
            checkbox.checked = true;
            document.getElementsByName(id.toString())[0].style.background = "#ececed";
            this.selectedEmails.push(this.emails[i]);
          }
        }
      }
    } else {
      this.diselect = false;
      this.selectedEmails = [];
      for (let i = 0; i < this.emails.length; i++) {
        let id = this.emails[i].mail_id;
        if (id != undefined) {
          let checkbox = document.getElementById(id.toString()) as HTMLInputElement | null;
          if (checkbox != null) {
            checkbox.checked = false;
            document.getElementsByName(id.toString())[0].style.background = "#ffffff";
          }
        }
      }
    }

  }

  delete() {

    let arr = [];
    for(let i=0;i<this.selectedEmails.length;i++) {
      arr.push(this.selectedEmails[i].mail_id);
    }

    console.log(arr);
    this.emailService.deleteMails(arr);
    this.reloadEmails()

  }

  moveToFolder(event: any) {

    let btn = event.target as HTMLButtonElement;
    let name = btn.innerHTML;
    let arr = [];
    for(let i=0;i<this.selectedEmails.length;i++) {
      arr.push(this.selectedEmails[i].mail_id);
    }
    this.emailService.moveToFolder(arr,name);
    this.reloadEmails()

  }

  search() {

    let element1 = document.querySelector('#by') as HTMLInputElement;
    let element2 = document.getElementById('search') as HTMLInputElement;
    let searchBy = element1.value;
    let searchText = element2.value;

    this.emailService.searchInInbox(this.user["email"],searchBy,"0",searchText).subscribe( data => {
      let arr = data as Email[];
      this.emails = arr;
    })

  }

  sort() {

    let element1 = document.querySelector('#by') as HTMLInputElement;
    let sortBy = element1.value;

    this.emailService.getInboxSortedBy(this.user["email"],"0",sortBy).subscribe( data => {
      let arr = data as Email[];
      this.emails = arr;
    })

  }

  public reloadEmails() {
    this.emailService.getInbox(this.user["email"], "0").subscribe(data => {
      let arr = data as Email[];
      this.emails = arr;
    });
  }

}