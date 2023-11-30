import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CurriculumServiceService } from '../services/curriculum-service.service';

@Component({
  selector: 'app-curriculum-forms',
  templateUrl: './curriculum-forms.component.html',
  styleUrls: ['./curriculum-forms.component.css']
})
export class CurriculumFormsComponent implements OnInit {
  
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private service: CurriculumServiceService) {
    this.form = this.formBuilder.group({
      name: [null],
      phoneNumber: [null],
      email: [null],
      webSite: [null],
      experience: [null]
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.service.createCurriculum(this.form.value).subscribe(
      data => {
        console.log("cadastrou");
      },
      error => {
        console.error('Erro ao obter currículos:', error);
      }
    );;
  }

}
