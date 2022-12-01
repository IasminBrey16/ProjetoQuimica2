import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Element } from 'src/app/models/element';

@Component({
  selector: 'app-list-element',
  templateUrl: './list-element.component.html',
  styleUrls: ['./list-element.component.css']
})

export class ListElementComponent implements OnInit {
  elements!: Element[];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Element[]>("https://localhost:5001/api/element/list")
    .subscribe({next: (elements) => { this.elements = elements;},});
  }

}
