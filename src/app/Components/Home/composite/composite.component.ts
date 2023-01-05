import { FileService } from './../../../services/file.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MailService } from 'app/services/mail.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Email } from 'app/email';
import {TokenStorageService} from "../../../services/token-storage.service";
import {EmailService} from "../../../services/email.service";

@Component({
  selector: 'app-composite',
  templateUrl: './composite.component.html',
  styleUrls: ['./composite.component.css']
})
export class CompositeComponent implements OnInit {
  selectedFiles?: FileList;
  files:File[]=[]
  currentFile?: File;

  fileInfos:any[]=[];
  composeform!:FormGroup
  email ? :Email
  emailid? : string|null
  emails : Email[] = []


  constructor(private activatedroute:ActivatedRoute,
              private mailservice : MailService,
              private fileservice:FileService,
              private tokenStorageService : TokenStorageService,
              private emailService : EmailService) { }



  ngOnInit(): void {
      this.emailid=this.activatedroute.snapshot.paramMap.get("id");
      this.email=this.mailservice.emails.find(x=> x.mail_id==this.emailid);
      this.emails=this.mailservice.emails;
      if(this.emailid===null){
        this.composeform=new FormGroup({
          to:new FormControl("",[Validators.required,Validators.email]),
          subject:new FormControl(""),
          reply:new FormControl(""),
          priority:new FormControl("1")
        });
      }
      else{
        this.composeform=new FormGroup({
          to:new FormControl(this.email?.mail,Validators.email),
          subject:new FormControl(this.email?.subject),
          reply:new FormControl(this.email?.message),
          priority:new FormControl(this.email?.priority)
        });
      }

      this.fileservice.reset().subscribe(value=>{
        console.log(value);
      });
  }



  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
    if(this.selectedFiles){
      for(let i=0;i<this.selectedFiles.length;i++){
        this.currentFile=this.selectedFiles[i];
        this.files.push(this.currentFile);
      }
    }
    this.fileservice.generate(this.files).subscribe(value=>{
      this.evaluate(value);
    });
  }
  evaluate(value:any){
    this.fileInfos=value.body;
    console.log(this.files);
    console.log(this.currentFile);
    console.log(this.selectedFiles);
    console.log(this.fileInfos);
    this.selectedFiles=undefined
  }


  upload(): void {
    if(this.files){
      this.fileservice.upload(this.files).subscribe(responsedata=>{
        console.log(responsedata);
      });
      // this.fileInfos=this.service.getFiles();
    }
    this.files=[]
  }

  send(){

    // let x = document.getElementById('to') as HTMLInputElement;
    // let y = document.getElementById('subject') as HTMLInputElement;
    // let a = document.querySelector('#pri') as HTMLInputElement;
    // let z = document.getElementById('message') as HTMLInputElement;

    let to = this.composeform.value.to;
    let subject = this.composeform.value.subject;
    let priority = this.composeform.value.priority;
    let message = this.composeform.value.reply;

    let user = this.tokenStorageService.getUser();
    let sender = user['email'];
    let email = new Email(null,subject,message,priority,null,{
      "sender" : sender,
      "reciever" : [to]
    }, null,null);

    console.log(email);
    
    this.emailService.compose(email).subscribe(data => {
      this.hand(data);
    });
    //we take id here
    // this.upload(id)
  }

  hand(data:any){
    console.log(data);
    this.discard();
  }


  
  discard(){
    this.composeform.reset({
      to:'',
      subject:'',
      reply:'',
      priority:'1'
    })
    this.files=[]
    this.fileInfos=[]
    this.fileservice.reset().subscribe(value=>{
        console.log(value);
    });
    
  }
  draft(){
    let x = document.getElementById('to') as HTMLInputElement;
    let y = document.getElementById('subject') as HTMLInputElement;
    let a = document.querySelector('#pri') as HTMLInputElement;
    let z = document.getElementById('message') as HTMLInputElement;

    let to = this.composeform.value.to;
    let subject = this.composeform.value.subject;
    let priority = this.composeform.value.priority;
    let message = this.composeform.value.reply;

    let user = this.tokenStorageService.getUser();
    let sender = user['email'];
    let email = new Email(null,subject,message,priority,null,{
      "sender" : sender,
      "reciever" : [to]
    }, null,null);

    console.log(email);

    this.emailService.saveToDraft(email).subscribe(data => {
      this.hand(data);
    });
  }

}
function ngOnInit() {
  throw new Error('Function not implemented.');
}

function send() {
  throw new Error('Function not implemented.');
}

