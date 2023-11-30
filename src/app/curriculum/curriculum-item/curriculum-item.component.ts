import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CurriculumServiceService } from '../services/curriculum-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-curriculum-item',
  templateUrl: './curriculum-item.component.html',
  styleUrls: ['./curriculum-item.component.css']
})
export class CurriculumItemComponent implements OnInit {
  curriculumId: number | null;

  constructor(
    private router: Router,
    private activateRoute: ActivatedRoute,
    private service: CurriculumServiceService,
    private snackbar: MatSnackBar
  ) {
    const idString = this.activateRoute.snapshot.paramMap.get('id');
    this.curriculumId = idString !== null ? Number(idString) : null;

    console.log('ID do currículo:', this.curriculumId);
  }

  ngOnInit(): void {
    if (this.curriculumId != null) {
      this.service.getCurriculumById(this.curriculumId).subscribe(
        data => {
          console.log(data);
        },
        error => {
          this.snackbar.open('Erro ao obter currículo', '', { duration: 5000 });
        }
      );
    }
  }

  onClick() {
    this.router.navigate(['/'])
  }
}
