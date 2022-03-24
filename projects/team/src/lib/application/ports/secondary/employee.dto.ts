import { DepartmentDTO } from '../../../application/ports/secondary/department.dto';
export interface EmployeeDTO {
  readonly id?: string;
  readonly name: string;
  readonly imageUrl: string;
  readonly text: string;
  readonly routerLink: string;
  readonly position: string;
  readonly alt: string;
  readonly department: DepartmentDTO;
}
