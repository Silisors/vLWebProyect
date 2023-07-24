import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { gql } from 'graphql-tag';

@Component({
  selector: 'app-admin-component',
  templateUrl: './admin-component.component.html',
  styleUrls: ['./admin-component.component.css']
})
export class AdminComponentComponent implements OnInit {
  emails!: any[];

  constructor(private apollo: Apollo) {}

  ngOnInit(): void {
    this.apollo.query<any>({
      query: gql`
      query{
        getEmail{
          name
          email
          zipcode
          phone
          state
          dated
        }
      }
      `,
    }).subscribe(({ data }) => {
      this.emails = data.getEmail;
    });
  }
}
