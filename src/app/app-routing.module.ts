import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsPageModule } from './pages/about-us.page-module';
import { ContactPageModule } from './pages/contact.page-module';
import { HomePageModule } from './pages/home.page-module';
import { WorkPageModule } from './pages/work.page-module';
import { EmployeesPageModule } from './pages/employees.page-module';
import { EmployeeDetailsPageModule } from './pages/employee-details.page-module';

const routes: Routes = [
  {
    path: 'onas',
    loadChildren: () => AboutUsPageModule,
  },
  {
    path: 'contact',
    loadChildren: () => ContactPageModule,
  },
  {
    path: '',
    loadChildren: () => HomePageModule,
  },
  {
    path: 'work',
    loadChildren: () => WorkPageModule,
  },
  { 
        path: 'pracownik', 
        loadChildren: () => EmployeesPageModule
      },
  { 
        path: 'pracownik/:name', 
        loadChildren: () => EmployeeDetailsPageModule
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
