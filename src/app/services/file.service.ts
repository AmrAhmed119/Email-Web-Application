import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  upload(files: File[]): Observable<any> {
    const formData: FormData = new FormData();
    console.log(files)
    for(let i=0;i<files.length;i++){
      formData.append('file',files[i])
    }
    // formData.append('mail_id',id)
    console.log(formData.getAll('file'))
    const req = new HttpRequest('POST', `${this.baseUrl}/upload`, formData);

    return this.http.request(req);
  }

  // getFiles(): Observable<any> {
  //   return this.http.get(`${this.baseUrl}/files`);
  // }
}