import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurriculumRoutingModule } from './curriculum-routing.module';
import { CurriculumComponent } from './curriculum/curriculum.component';

import { AppMaterialModule } from '../shared/app-material/app-material.module';


@NgModule({
  declarations: [
    CurriculumComponent
  ],
  imports: [
    CommonModule,
    CurriculumRoutingModule,
    AppMaterialModule
  ]
})
export class CurriculumModule { }
