import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Step2PersonTable } from './components/step2-person-table/step2-person-table';
import { Step3PersonTableInput } from './components/step3-person-table-input/step3-person-table-input';
<<<<<<< HEAD
=======
import { Step4ForDirective } from './components/step4-for-directive/step4-for-directive';
import { Step5EventBind } from './components/step5-event-bind/step5-event-bind';

>>>>>>> aa1372d473bb110a1b15f09eee7233dd5ea0ffc4
import { IPerson } from './shared/interfaces/person';

@Component({
  selector: 'app-root',
  imports: [
    Step2PersonTable, 
    Step3PersonTableInput, 
    Step4ForDirective,
    Step5EventBind
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('cf9-frontend');
  user = {
    firstname: 'Bob',
    lastname: 'Dylan',
    email: 'bob.dylan@aueb.com'
  }

  // Step3 Pass data to child step3 component
  Person1 :IPerson = {
    firstname: "firstname1",
    lastname: "fastname1",
    email: "lastname1@aueb.com"
  }

  Person2 :IPerson = {
    firstname: "firstname2",
    lastname: "fastname2",
    email: "lastname2@aueb.com"
  }

}
