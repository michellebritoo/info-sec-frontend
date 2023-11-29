import { Component, OnInit } from '@angular/core';
import { CurriculumModel } from '../model/curriculum-model';
import { CurriculumServiceService } from '../services/curriculum-service.service';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.css']
})
export class CurriculumComponent implements OnInit {
  displayedColumns = ['name', 'number', 'email', 'site', 'profissionalExperinece'];

  curriculumList: CurriculumModel[] = [];

  constructor(private curriculumService: CurriculumServiceService) { }

  ngOnInit(): void {
    this.curriculumList = this.curriculumService.getCourses();
  }

}
