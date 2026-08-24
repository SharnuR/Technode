import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-form-errors',
  standalone: true,
  imports: [],
  templateUrl: './form-errors-component.html',
  styleUrl: './form-errors-component.scss',
})
export class FormErrorsComponent {
  @Input() control!: AbstractControl;
  @Input() fieldName!: String;
  @Input() minLength!: number;
}
