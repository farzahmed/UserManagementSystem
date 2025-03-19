import { Directive, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appCnicFormatter]'
})
export class CnicFormatterDirective {
  constructor(private ngControl: NgControl) {}

  @HostListener('input', ['$event'])
  onInputChange(event: Event): void {
    let input = this.ngControl.control?.value || '';

    input = input.replace(/\D/g, '');

    if (input.length > 5) {
      input = input.substring(0, 5) + '-' + input.substring(5);
    }
    if (input.length > 13) {
      input = input.substring(0, 13) + '-' + input.substring(13, 14);
    }

    this.ngControl.control?.setValue(input, { emitEvent: false });
  }
}
