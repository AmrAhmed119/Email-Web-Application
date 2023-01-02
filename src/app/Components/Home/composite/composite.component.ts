import { FileService } from './../../../services/file.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MailService } from 'app/services/mail.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Email } from 'app/email';

@Component({
  selector: 'app-composite',
  templateUrl: './composite.component.html',
  styleUrls: ['./composite.component.css']
})
export class CompositeComponent implements OnInit {
  selectedFiles?: FileList;
  files:File[]=[]
  currentFile?: File;

  fileInfos?: Observable<any>;
  composeform!:FormGroup
  email ? :Email
  emailid? : string|null
  emails : Email[] = []


  constructor(private activatedroute:ActivatedRoute,private mailservice : MailService,private fileservice:FileService) { }


  
  ngOnInit(): void {
      this.emailid=this.activatedroute.snapshot.paramMap.get("id");
      this.email=this.mailservice.emails.find(x=> x.mail_id==this.emailid);
      this.emails=this.mailservice.emails;
      if(this.emailid===null){
        this.composeform=new FormGroup({
          to:new FormControl("",Validators.email),
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
  }



  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
    if(this.selectedFiles){
      this.currentFile=this.selectedFiles[0];
      this.files.push(this.currentFile);
    }
    console.log(this.files)
    console.log(this.currentFile)
    console.log(this.selectedFiles)
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
    console.log(this.composeform)
    //we take id here
    // this.upload(id)
  }
  discard(){
    this.composeform.reset({
      to:'',
      subject:'',
      reply:'',
      priority:'1'
    })
    this.files=[]
  }
  draft(){

  }

}
function ngOnInit() {
  throw new Error('Function not implemented.');
}

function send() {
  throw new Error('Function not implemented.');
}

