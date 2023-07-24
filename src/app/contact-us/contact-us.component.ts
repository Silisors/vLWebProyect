  import { Component } from '@angular/core';
  import { Apollo } from 'apollo-angular';
  import gql from 'graphql-tag';
  import { FormBuilder, FormGroup, Validators } from '@angular/forms';

  interface FormData {
    name: string;
    email: string;
    phone: string;
    zipcode: string;
    state: string;
  }

  @Component({
    selector: 'app-contact-us',
    templateUrl: './contact-us.component.html',
    styleUrls: ['./contact-us.component.css']
  })
  export class ContactUsComponent {
    invalidEmail: boolean = false;
    email: string = '';

    formData: FormData = {
      name: '',
      email: '',
      phone: '',
      zipcode: '',
      state: '',
    };
    errorMessage: string = ''; // Variable para almacenar el mensaje de error
    successMessage: string = '';

    constructor(private apollo: Apollo) {}

    onFormSubmit(event: Event) {
      event.preventDefault();

      const { name, email, phone, zipcode, state } = this.formData;

      this.apollo.mutate({
        mutation: gql`
          mutation CreateEmail($name: String!, $email: String!, $phone: String!, $zipcode: String!, $state: String!) {
            createEmail(name: $name, email: $email, phone: $phone, zipcode: $zipcode, state: $state)
          }
        `,
        variables: {
          name,
          email,
          phone,
          zipcode,
          state,
        },
      }).subscribe(() => {
        this.successMessage = 'Data has been successfully submitted';

        console.log('Information has been sent correctly');
      }, (error) => {
        this.errorMessage = error.message; // Almacena el mensaje de error en la variable
        console.error('Error:', error);
      });
    }
    validateEmail() {
      const emailRegex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
      this.invalidEmail = !emailRegex.test(this.email);
    }
  }
