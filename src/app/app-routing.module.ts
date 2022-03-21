import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsPageModule } from './pages/about-us.page-module';
import { HomePageModule } from './pages/home.page-module';
import { EmployeesPageModule } from './pages/employees.page-module';
import { EmployeeDetailsPageModule } from './pages/employee-details.page-module';
import { ContactUsPageModule } from './pages/contact-us.page-module';
import { AdminPageModule } from './pages/admin.page-module';

const routes: Routes = [
  {
    path: 'onas',
    loadChildren: () => AboutUsPageModule,
  },
  {
    path: '',
    loadChildren: () => HomePageModule,
  },
  {
    path: 'pracownik',
    loadChildren: () => EmployeesPageModule,
  },
  {
    path: 'pracownik/:name',
    loadChildren: () => EmployeeDetailsPageModule,
  },
  {
    path: 'contact',
    loadChildren: () => ContactUsPageModule,
  },
  {
    path: 'admin',
    loadChildren: () => AdminPageModule,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
