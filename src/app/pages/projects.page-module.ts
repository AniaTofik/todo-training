import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProjectsPage } from './projects.page';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: ProjectsPage,
        }
      ])],
  	declarations: [ProjectsPage],
  	providers: [],
  	exports: [] })
export class ProjectsPageModule {
}
