import { Component, OnInit } from '@angular/core';
import {MatPaginatorModule} from '@angular/material/paginator';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  standalone: true,
  imports: [MatPaginatorModule],
})
export class PaginatorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
