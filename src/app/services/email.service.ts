import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Email} from "../email";


const MAIL_API = 'http://localhost:8080/api/mail/';
const USER_API = 'http://localhost:8080/api/user/';


@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) {}


  public getInbox(userEmail: string, index: string) {
    return this.http.post(MAIL_API + "inbox", {
      "user_email": userEmail,
      "page_index": index
    });
  }

  public getInboxSortedBy(userEmail: string, index: string, sortCol: string) {
    return this.http.post(MAIL_API + "inbox", {
      "user_email": userEmail,
      "page_index": index,
      "sort_column": sortCol
    });
  }

  public getDraft(userEmail: string, index: string) {
    return this.http.post(MAIL_API + "draft", {
      "user_email": userEmail,
      "page_index": index
    },);
  }

  public getDraftSortedBy(userEmail: string, index: string, sortCol: string) {
    return this.http.post(MAIL_API + "draft", {
      "user_email": userEmail,
      "page_index": index,
      "sort_column": sortCol
    });
  }

  public getTrash(userEmail: string, index: string) {
    return this.http.post(MAIL_API + "trash", {
      "user_email": userEmail,
      "page_index": index
    },);
  }

  public getTrashSortedBy(userEmail: string, index: string, sortCol: string) {
    return this.http.post(MAIL_API + "trash", {
      "user_email": userEmail,
      "page_index": index,
      "sort_column": sortCol
    });
  }

  public getSent(userEmail: string, index: string) {
    return this.http.post(MAIL_API + "sent", {
      "user_email": userEmail,
      "page_index": index
    });
  }

  public getSentSortedBy(userEmail: string, index: string, sortCol: string) {
    return this.http.post(MAIL_API + "", {
      "user_email": userEmail,
      "page_index": index,
      "sort_column": sortCol
    });
  }


  public getCustomFolder(folder : string, userEmail: string, index: string) {
    return this.http.post(MAIL_API + "loadCustomFolder", {
      "folder" : folder,
      "user_email": userEmail,
      "page_index": index
    });
  }

  public getCustomFolderSortedBy(folder : string, userEmail: string, index: string,sortCol: string) {
    return this.http.post(MAIL_API + "loadCustomFolder", {
      "folder" : folder,
      "user_email": userEmail,
      "page_index": index,
      "sort_column": sortCol
    });
  }


  public searchInInbox(userEmail : string, column : string,index : string,key : string){
    return this.http.post(MAIL_API + "searchInInbox" , {
      "user_email"  : userEmail,
      "page_index" : index,
      "column" : column,
      "key" : key
    });
  }

  public searchInSent(userEmail : string, column : string,index : string,key : string){
    return this.http.post(MAIL_API + "searchInSentOrDraft" , {
      "folder" : "Sent",
      "user_email"  : userEmail,
      "page_index" : index,
      "column" : column,
      "key" : key
    });
  }

  public searchInDraft(userEmail : string, column : string,index : string,key : string){
    return this.http.post(MAIL_API + "searchInSentOrDraft" , {
      "folder" : "Draft",
      "user_email"  : userEmail,
      "page_index" : index,
      "column" : column,
      "key" : key
    });
  }

  public searchInTrash(userEmail : string, column : string,index : string,key : string){
    return this.http.post(MAIL_API + "searchInTrash" , {
      "user_email"  : userEmail,
      "page_index" : index,
      "column" : column,
      "key" : key
    });
  }

  public searchInFolder(userEmail : string,folder : string, column : string,index : string,key : string){
    return this.http.post(MAIL_API + "searchInFolder" , {
      "folder" : folder,
      "user_email"  : userEmail,
      "page_index" : index,
      "column" : column,
      "key" : key
    });
  }


  public deleteMails(mailIds : string[]){
    return this.http.put(MAIL_API + "deleteMails", {
      "mail_ids" : mailIds
    }).subscribe();
  }

  public moveToFolder(mailIds : string[], folder : string){
    return this.http.put(MAIL_API + "moveMailTo", {
      "mail_ids" : mailIds,
      "newfolder_name" : folder
    }).subscribe();
  }

  public eraseMails(mailIds : string[]){
    return this.http.put(MAIL_API + "eraseMails", {
      "mail_ids" : mailIds
    }).subscribe();
  }


  public compose(email : Email){
    return this.http.post(MAIL_API + "compose" , email);
  }

  public saveToDraft(email : Email){
    return this.http.post(MAIL_API + "saveToDraft", email);
  }

  public getAllContacts(userId : string){
    return this.http.put(USER_API + "getAllContacts" , {
      "user_id" : userId
    });
  }

  public searchInContacts(userId : string, col : string, key : string){
    return this.http.put(USER_API + "searchInContacts" , {
      "user_id" : userId,
      "col" : col,
      "key" : key
    });
  }


}
