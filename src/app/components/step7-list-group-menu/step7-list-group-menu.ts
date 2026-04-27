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
    { text: "Step5 Event Bind", appLink:'event-bind-example'}
  ]
}
