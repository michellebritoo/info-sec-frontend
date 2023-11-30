import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CurriculumServiceService } from '../services/curriculum-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-curriculum-forms',
  templateUrl: './curriculum-forms.component.html',
  styleUrls: ['./curriculum-forms.component.css']
})
export class CurriculumFormsComponent implements OnInit {
  
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: CurriculumServiceService,
    private snackbar: MatSnackBar,
    private router: Router
    ) {
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
    if (this.form.valid) {
      this.service.createCurriculum(this.form.value).subscribe(
        data => {
          this.snackbar.open("Currículo cadastrado com sucesso!", '', { duration: 3000 });
          this.router.navigate(['/']);
        },
        error => {
          this.snackbar.open("Erro ao cadastrar currículo", '', { duration: 3000 });
          console.log("stack trace:", error);
        }
      );
    } else {
      const nonOptionalInput = Object.keys(this.form.controls)
        .filter(controlName => this.form.controls[controlName].hasError('required'));

      const mensagem = `Por favor, preencha os campos obrigatórios: ${nonOptionalInput.join(', ')}`;
      this.snackbar.open(mensagem, '', { duration: 5000 });
    }
  }

}
