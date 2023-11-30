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
      'X-Email': curriculum.email,
      'X-Experience': curriculum.experience
    });

    if (curriculum.webSite) {
      headers.append('X-WebSite', curriculum.webSite)
    }

    if (curriculum.phoneNumber) {
      headers.append('X-PhoneNumber', curriculum.phoneNumber)
    }

    const options = { headers: headers }

    return this.httpClient.post(this.API + "/curriculum", null, options);
  }

  getCurriculumById(id: number) {
    const headers = new HttpHeaders({
      'Authorization': 'Basic aW5mb3NlYzppbmZvc2VjMjAyMzI=',
      'id': id
    });
    const requestOptions = { headers: headers };

    return this.httpClient.get<CurriculumModel[]>(this.API + "/curriculum/" + id, requestOptions)
  }
}
