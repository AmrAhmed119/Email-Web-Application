import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-folders',
  templateUrl: './folders.component.html',
  styleUrls: ['./folders.component.css']
})
export class FoldersComponent implements OnInit {
  folders:any[]=[{
    name:"image",
    checked:false
  },{
    name:"xxxx",
    checked:false,
  },
  {
    name:"lllllll",
    checked:false
  }]
  selectedfolders:any[]=[]
  pop=false;
  renam=false;
  selectedfolder:any

  constructor() { }

  ngOnInit(): void {
  }
  addfolder(){
    this.pop=true;
    console.log(this.folders);
  }
  savefolder(foldername:string){
    console.log(foldername)
    this.folders.push({
      name: foldername,
      checked:false
    });
    this.pop=false;
  }
  cancel(){
    this.pop=false;
    this.renam=false;
  }
  removeall(){
    for(let folder of this.folders){
      if(folder.checked){
        this.selectedfolders.push(folder);
        console.log(folder)
      }
    }
    console.log(this.selectedfolders)
    if(this.selectedfolders.length===0){
      alert("You should select folders to remove");
    }
    else{
      if(confirm("Are you sure you want to remove selected folders??")){
        for(let folder of this.selectedfolders){
          this.folders=this.folders.filter(x=>x.name!=folder.name);
        }
      }
      this.selectedfolders=[]
    }
  }
  rename(folder:any){
    this.renam=true;
    this.selectedfolder=folder
  }
  savename(newname:string){
    console.log(newname);
    for(let i=0;i<this.folders.length;i++){
      if(this.folders[i].name==this.selectedfolder.name){
        this.folders[i].name=newname;
        break;
      }
    }
    this.renam=false;
    this.selectedfolder=undefined
  }
  removefolder(folder:any){
      if(confirm("Are you sure you want to remove selected folder??")){
        this.folders=this.folders.filter(x=>x.name!=folder.name);
      }
      this.selectedfolder=undefined
    }
}
