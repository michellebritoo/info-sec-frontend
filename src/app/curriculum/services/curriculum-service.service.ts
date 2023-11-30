import { Injectable } from '@angular/core';
import { CurriculumModel } from '../model/curriculum-model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CurriculumServiceService {
  private headers = new HttpHeaders({
    'Authorization': 'Basic aW5mb3NlYzppbmZvc2VjMjAyMzI='
  });
  private readonly requestOptions = { headers: this.headers };
  private readonly API = "http://localhost:8080/curriculum"

  constructor(private httpClient: HttpClient) { }

  getCourses() {
    return this.httpClient.get<CurriculumModel[]>(this.API, this.requestOptions)
  }
}
