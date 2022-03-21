import { FormGroup, FormControl } from '@angular/forms';
import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import {
  ADDS_EMPLOYEE_DTO,
  AddsEmployeeDtoPort,
} from '../../../application/ports/secondary/adds-employee.dto-port';

@Component({
  selector: 'lib-create-employee',
  templateUrl: './create-employee.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateEmployeeComponent {
  readonly createEmployee: FormGroup = new FormGroup({
    name: new FormControl(),
    imageUrl: new FormControl(),
    routerLink: new FormControl(),
    position: new FormControl(),
    alt: new FormControl(),
  });

  constructor(
    @Inject(ADDS_EMPLOYEE_DTO) private _addsEmployeeDto: AddsEmployeeDtoPort
  ) {}

  onCreateEmployeeSubmited(createEmployee: FormGroup): void {
    this._addsEmployeeDto.add({
      name: createEmployee.get('name').value,
      imageUrl: createEmployee.get('imageUrl').value,
      routerLink: createEmployee.get('routerLink').value,
      position: createEmployee.get('position').value,
      alt: createEmployee.get('alt').value,
    });
  }
}
