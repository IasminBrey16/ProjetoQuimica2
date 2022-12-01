import { Family } from 'src/app/models/family';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Element } from 'src/app/models/element';

@Component({
  selector: 'app-filter-element',
  templateUrl: './filter-element.component.html',
  styleUrls: ['./filter-element.component.css']
})
export class FilterElementComponent implements OnInit {
  familyId!: number;
  families!: Family[];
  elements!: Element[];

  constructor(private http: HttpClient) {}

  ngOnInit(){}

  filtrar(){
    this.http.get<Element[]>("https://localhost:5001/api/element/filter/" + this.familyId.toString())
    .subscribe({next: (elements) => { this.elements = elements;},});
  }

}
