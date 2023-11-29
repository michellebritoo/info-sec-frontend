import { Component, OnInit } from '@angular/core';
import { CurriculumModel } from '../model/curriculum-model';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.css']
})
export class CurriculumComponent implements OnInit {

  curriculumList: CurriculumModel[] = [
    {
      _id: '1', name: 'Michelle', number:'41', email:'teste@teste.com', site:'www', profissionalExperinece:'+2anos'
    }
  ];
  displayedColumns = ['name', 'number', 'email', 'site', 'profissionalExperinece'];

  
  constructor() {}

  ngOnInit(): void {}

}
