import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsPageModule } from './pages/about-us.page-module';
import { ContactPageModule } from './pages/contact.page-module';
import { HomePageModule } from './pages/home.page-module';
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
    path: 'pracownik/:Anna Kiedel',
    loadChildren: () => EmployeeDetailsPageModule,
  },
  {
    path: 'pracownik',
    loadChildren: () => EmployeeDetailsPageModule,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
