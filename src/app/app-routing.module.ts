import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsPageModule } from './pages/about-us.page-module';
import { ContactPageModule } from './pages/contact.page-module';
import { ProjectsPageModule } from './pages/projects.page-module';

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
        loadChildren: () => ProjectsPageModule
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
