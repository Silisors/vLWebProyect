import { Component } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  constructor(private apollo: Apollo) {}

  onFormSubmit(event: Event, emailInput: HTMLInputElement, phoneInput: HTMLInputElement, nameInput: HTMLInputElement, zipcodeInput: HTMLInputElement, stateInput: HTMLInputElement) {
    event.preventDefault();

    const email = emailInput.value;
    const phone = phoneInput.value;
    const name = nameInput.value;
    const zipcode = zipcodeInput.value;
    const state = stateInput.value;

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
        state
      },
    }).subscribe(() => {
      // Aquí puedes agregar cualquier lógica adicional después de la mutación, si es necesario
      console.log('Información enviada correctamente');
    }, (error) => {
      console.error('Error:', error);
    });
  }

}
