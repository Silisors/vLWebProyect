import { Component } from '@angular/core';

interface FormData {
  fullName: string;
  email: string;
  state: string;
  zip: string;
}

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  formData: FormData = {
    fullName: '',
    email: '',
    state: '',
    zip: ''
  };

  guardarDatos() {
    localStorage.setItem('formData', JSON.stringify(this.formData));
  }
}
