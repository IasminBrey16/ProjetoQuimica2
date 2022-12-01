import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Family } from 'src/app/models/family';

@Component({
  selector: 'app-create-family',
  templateUrl: './create-family.component.html',
  styleUrls: ['./create-family.component.css']
})
export class CreateFamilyComponent implements OnInit {
  name!: string;
  specificName!: string;

  constructor(
    private http: HttpClient,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  cadastrar(): void {
    let family: Family = {
      name: this.name,
      specificName: this.specificName
    };
    this.http
      .post<Family>("https://localhost:5001/api/family/create", family)
      .subscribe({
        next: (family) => {
          this._snackBar.open("familia salva!", "Ok!", {
            horizontalPosition: "right",
            verticalPosition: "top",
          });
        },
        error: (error) => {
          console.error("Algum erro aconteceu!", error);
        },
      });
  }
}

