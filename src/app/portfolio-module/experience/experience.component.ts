import { Component } from '@angular/core';
import { FileDownloadService } from 'src/app/file-download.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {

  constructor(private downloadResumeService:FileDownloadService){

  }
  onDownload(){
    console.log("Button Clicked");
    const fileName='Ressimen Rodriques_Resume24052024.pdf';
    this.downloadResumeService.downloadFile(fileName).subscribe(blob =>{
      const link= document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download=fileName;
      link.click();
    });
  }
}
