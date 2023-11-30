import { Component, OnInit } from '@angular/core';
import { CurriculumModel } from '../model/curriculum-model';
import { CurriculumServiceService } from '../services/curriculum-service.service';
import { Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.css']
})
export class CurriculumComponent implements OnInit {
  displayedColumns = ['name', 'email'];
  
  //curriculumList: Observable<CurriculumModel[]>;
  dataSource: MatTableDataSource<CurriculumModel> = new MatTableDataSource();

  constructor(private curriculumService: CurriculumServiceService, private router: Router) {
    this.curriculumService.getCurriculumList()
    .subscribe(
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

  selectItem(event: any) {
    console.log("selected")
    this.router.navigate(['curriculum/details'])
  }

  createItem() {
    this.router.navigate(['curriculum/new'])
  }
}
