import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WorkPage } from './work.page';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: WorkPage,
      },
    ]),
  ],
  declarations: [WorkPage],
  providers: [],
  exports: [],
})
export class WorkPageModule {}
