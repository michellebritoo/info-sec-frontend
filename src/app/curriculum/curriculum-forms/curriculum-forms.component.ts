import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-curriculum-forms',
  templateUrl: './curriculum-forms.component.html',
  styleUrls: ['./curriculum-forms.component.css']
})
export class CurriculumFormsComponent implements OnInit {
  
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
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
    console.log("enviado")
  }

}
