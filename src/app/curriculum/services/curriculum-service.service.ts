import { Injectable } from '@angular/core';
import { CurriculumModel } from '../model/curriculum-model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CurriculumServiceService {

  constructor(httpClient: HttpClient) {
    
  }

  getCourses(): CurriculumModel[] {
    return [
      {
        _id: '1', name: 'Michelle', number:'41', email:'teste@teste.com', site:'www', profissionalExperinece:'+2anos'
      },
      {
        _id: '2', name: 'Thauã', number:'41', email:'teste@teste.com', site:'www', profissionalExperinece:'+2anos'
      }
    ];
  }
}
