import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-step7-list-group-menu',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './step7-list-group-menu.html',
  styleUrl: './step7-list-group-menu.css',
})
export class Step7ListGroupMenu {
  menu = [
    { text: "Step2 Person Table", appLink:'person-table-example'},
    { text: "Step3 Component Input", appLink:'component-input-example'},
    { text: "Step4 @for Directive", appLink:'for-directive-example'},
    { text: "Step5 Event Bind", appLink:'event-bind-example'},
    { text: "Step8 Simple Datatable", appLink:'simple-datatable-example'},
<<<<<<< HEAD
    { text: "Step9 Component Output", appLink:'component-output-example'}
=======
    { text: "Step9 Output Example", appLink: 'component-output-example'}
>>>>>>> f860837d23cccde0cb7c38c244ac2c810c4d93b7
  ]
}
