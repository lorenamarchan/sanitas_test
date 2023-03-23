import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Input() name!: string
  @Input() label!: string

  @Output()
  model = new EventEmitter<string>();

  setModel(event: Event): void {
    const target = event.target as any
    this.model.emit(target.value)
  }

}
