import { Injectable } from '@angular/core';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FileDownloadService {

  constructor(private http: HttpClient) { }

  downloadFile(fileName: string): Observable<Blob>{
    return this.http.get(`assets/${fileName}`,{responseType:'blob'});
  }
}
