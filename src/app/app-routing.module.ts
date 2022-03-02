import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsPageModule } from './pages/about-us.page-module';
import { ContactPageModule } from './pages/contact.page-module';

const routes: Routes = [
  {
    path: 'onas',
    loadChildren: () => AboutUsPageModule,
  },
  {
    path: 'contact',
    loadChildren: () => ContactPageModule,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
