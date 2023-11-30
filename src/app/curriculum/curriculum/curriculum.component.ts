import { Component, OnInit } from '@angular/core';
import { CurriculumModel } from '../model/curriculum-model';
import { CurriculumServiceService } from '../services/curriculum-service.service';
import { Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.css']
})
export class CurriculumComponent implements OnInit {
  displayedColumns = ['name', 'phoneNumber', 'email', 'webSite', 'experience'];
  
  //curriculumList: Observable<CurriculumModel[]>;
  dataSource: MatTableDataSource<CurriculumModel> = new MatTableDataSource();

  constructor(private curriculumService: CurriculumServiceService) {
    this.curriculumService.getCourses().subscribe(
      data => {
        this.dataSource.data = data;
      },
      error => {
        console.error('Erro ao obter currículos:', error);
      }
    );
   }

  ngOnInit(): void {
  }

}
