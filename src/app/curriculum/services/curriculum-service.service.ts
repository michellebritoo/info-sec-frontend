import { Injectable } from '@angular/core';
import { CurriculumModel } from '../model/curriculum-model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CurriculumServiceService {
  private readonly API = "http://localhost:8080"

  constructor(private httpClient: HttpClient) { }

  getCurriculumList() {
    const headers = new HttpHeaders({
      'Authorization': 'Basic aW5mb3NlYzppbmZvc2VjMjAyMzI='
    });
    const requestOptions = { headers: headers };

    return this.httpClient.get<CurriculumModel[]>(this.API + "/curriculum", requestOptions)
  }

  createCurriculum(curriculum: CurriculumModel) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic aW5mb3NlYzppbmZvc2VjMjAyMzI=',
      'X-Name': curriculum.name,
      'X-PhoneNumber': curriculum.phoneNumber,
      'X-Email': curriculum.email,
      'X-WebSite': curriculum.webSite,
      'X-Experience': curriculum.experience
    });
    const options = { headers: headers }

    return this.httpClient.post(this.API + "/curriculum", null, options);
  }
}
