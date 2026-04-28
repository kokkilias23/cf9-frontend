import { Component } from '@angular/core';
<<<<<<< HEAD

@Component({
  selector: 'app-step10-template-driven-forms',
  imports: [],
=======
import { PersonTemplateForm } from './person-template-form/person-template-form';

@Component({
  selector: 'app-step10-template-driven-forms',
  imports: [PersonTemplateForm],
>>>>>>> ca26cea4b62656505ab318355098c75763a7d28a
  templateUrl: './step10-template-driven-forms.html',
  styleUrl: './step10-template-driven-forms.css',
})
export class Step10TemplateDrivenForms {}
