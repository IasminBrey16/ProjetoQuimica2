import { Element } from "../../../../models/element";
import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Family } from "src/app/models/family";
import { ActivatedRoute, Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: 'app-create-element',
  templateUrl: './create-element.component.html',
  styleUrls: ['./create-element.component.css']
})
export class CreateElementComponent implements OnInit {
  id!: number;
  symbol!: string;
  z!: number;
  familyId!: number;
  families!: Family[];

  constructor(
    private http: HttpClient,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.http
      .get<Family[]>("https://localhost:5001/api/family/list")
      .subscribe({
        next: (families) => {
          this.families = families;
        },
      });
  }

  cadastrar(): void {
    let element: Element = {
      symbol: this.symbol,
      z: this.z,
      familyId: this.familyId
    };
    this.http
      .post<Element>("https://localhost:5001/api/element/create", element)
      .subscribe({
        next: (element) => {
          this._snackBar.open("calculo salvo!", "Ok!", {
            horizontalPosition: "right",
            verticalPosition: "top",
          });
          this.router.navigate(["pages/element/list"]);
        },
        error: (error) => {
          console.error("Algum erro aconteceu!", error);
        },
      });
  }
}
