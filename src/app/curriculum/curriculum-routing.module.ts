import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { CurriculumFormsComponent } from './curriculum-forms/curriculum-forms.component';
import { CurriculumItemComponent } from './curriculum-item/curriculum-item.component';

const routes: Routes = [
  { path: '', component: CurriculumComponent },
  { path: 'new', component: CurriculumFormsComponent },
  { path: 'details', component: CurriculumItemComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurriculumRoutingModule { }
