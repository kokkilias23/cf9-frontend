import { Component } from '@angular/core';

@Component({
  selector: 'app-step2-person-table',
  standalone: true,
  imports: [],
  templateUrl: './step2-person-table.html',
  styleUrl: './step2-person-table.css',
})
export class Step2PersonTable {
  public user = {
    firstname: 'Bob',
    lastname: 'Dylan',
    email: 'bob.dylan@aueb.com'
  };
}