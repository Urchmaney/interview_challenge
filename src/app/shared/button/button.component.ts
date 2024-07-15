import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "dynamic-button",
  template: `<div class="dynamic-div" (click)="onClick()">{{display_name}}</div>`,
  styleUrls: ["./button.component.scss"]
})

export class ButtonComponent {
  @Input() display_name = "";

  @Output() clickEvent = new EventEmitter<string>();

  onClick() {
    this.clickEvent.emit(this.display_name);
  }
}