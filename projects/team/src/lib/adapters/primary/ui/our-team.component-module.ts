import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OurTeamComponent } from './our-team.component';

@NgModule({ imports: [CommonModule, [RouterModule]],
  	declarations: [OurTeamComponent],
  	providers: [],
  	exports: [OurTeamComponent] })
export class OurTeamComponentModule {
}
