import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EmployeeDetailsPage } from './employee-details.page';
import { EmployeeDetailComponentModule } from '../../../projects/team/src/lib/adapters/primary/ui/employee-detail.component-module';
import { FirebaseEmployeesServiceModule } from '../../../projects/team/src/lib/adapters/secondary/infrastructure/firebase-employees.service-module';
import { OurTeamComponentModule } from '../../../projects/team/src/lib/adapters/primary/ui/our-team.component-module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: ':employeeId',
        component: EmployeeDetailsPage,
      },
    ]),
    EmployeeDetailComponentModule,
    FirebaseEmployeesServiceModule,
    OurTeamComponentModule,
  ],
  declarations: [EmployeeDetailsPage],
  providers: [],
  exports: [],
})
export class EmployeeDetailsPageModule {}
