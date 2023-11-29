import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurriculumComponent } from './curriculum/curriculum.component';

const routes: Routes = [
  { path: '', component: CurriculumComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurriculumRoutingModule { }
