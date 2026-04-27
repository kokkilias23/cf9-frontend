import { Component, Input } from '@angular/core';
import { IPerson } from '../../shared/interfaces/person';

@Component({
  selector: 'app-step3-person-table-input',
  standalone: true,
  imports: [],
  templateUrl: './step3-person-table-input.html',
  styleUrl: './step3-person-table-input.css',
})
export class Step3PersonTableInput {
<<<<<<< HEAD
  @Input() person: IPerson | undefined;
=======
  @Input() person: IPerson | undefined
  @Input() step: string | undefined
>>>>>>> fb53032e98a2b2891d777315ac8e602a89113c49
}

