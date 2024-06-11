import { Component,ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
@Component({
  
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  
})
export class ContactComponent {

  @ViewChild('contactForm') NgForm:any;
  onSubmit(){
    console.log("Form Submitted");
  }
}
