import { Component, Input } from "@angular/core";

@Component({
  selector: "dynamic-button",
  template: `<div class="dynamic-div" (click)="onClick()">{{display_name}}</div>`,
  styleUrls: ["./button.component.scss"]
})

export class ButtonComponent {
  @Input() display_name = ""

  onClick() {
    console.log(`clicking here ${this.display_name}`);
  }
}